"use server";
import Stripe from "stripe";
import Event from "@/models/event.model";

const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

export async function reserveTicket(eventId) {
  try {
    const event = await Event.findById(eventId).populate('placeId performerId');

    if (!event || !event.price) {
      console.error("Event not found or no price provided");
      return null;
    }

    const stripePrice = await stripe.prices.create({
      currency: "usd",
      unit_amount: event.price * 100,
      product_data: {
        name: event.title,
        metadata: {
          event_id: event.id,
          category: event.category,
        },
      },
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price: stripePrice.id,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
      billing_address_collection: "auto",
      metadata: {
        event_id: event.id,
        event_name: event.title,
        event_category: event.category,
        event_place: event.placeId.name,
        performer: event.performerId.name,
      },
    });

    console.log("Stripe session created successfully:", session.id);
    return session.url;
  } catch (error) {
    console.log("Error creating Stripe session:", error);
    return null;
  }
}

