# FlashMeet

FlashMeet is a platform for quickly organizing events and gatherings in your city – whether it's casual meetups, sports activities, gaming sessions, coworking, or night outs. Events are automatically deleted after they end to keep the platform clean and relevant.

## Features
- 📍 **Instant Event Creation** – Add an event with essential details (name, description, location, time, max participants).
- 🔒 **Google OAuth Authentication** – Secure and quick sign-in via Google.
- 💳 **Paid Reservations** – Organizers can set a small participation fee (Stripe integration).
- ✉️ **Email Notifications** – Users receive confirmation emails upon RSVP.
- 🗑 **Automatic Event Cleanup** – Expired events are removed to keep the platform tidy.

## Tech Stack
- **Next.js + React.js** – UI & API routes (server-side validation for events).
- **TailwindCSS** – Modern and responsive design.
- **MongoDB** – Stores users and event data.
- **Email.js** – Sends participation confirmations.
- **Google OAuth** – Simplifies authentication.
- **Stripe** – Handles paid event reservations (currently limited to development mode).

## Deployment Issues
- **Stripe Payments**: Currently, Stripe is only functional in development mode. For production, you need to activate your Stripe account and obtain live API keys.
- **Google OAuth**: Sign-in with Google may not work in production due to domain restrictions. Make sure to configure your Google Cloud project correctly.

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/IlhanBasic/flashmeet.git
   cd flashmeet
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env.local` file and add the required environment variables:
```
NEXT_PUBLIC_EMAIL_SERVICE_ID=your_email_service_id
NEXT_PUBLIC_EMAIL_PUBLIC_KEY=your_email_public_key
NEXT_PUBLIC_EMAIL_NEWSLETTER_TEMPLATE_ID=your_email_newsletter_template_id
NEXT_PUBLIC_EMAIL_CONTACT_TEMPLATE_ID=your_email_contact_template_id
MONGO_URI=your_mongo_uri
CLIENT_ID=your_client_id
STRIPE_PRIVATE_KEY=your_stripe_private_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to see the app in action.

## Future Improvements

- 📱 Mobile app integration for on-the-go event creation and RSVPs.
- 🌍 Multi-language support for a broader audience.

## Contributing
Contributions are welcome! Feel free to fork the repo, create a branch, and submit a pull request.
