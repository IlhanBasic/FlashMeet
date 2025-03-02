import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaGamepad,
  FaLaptopCode,
  FaGlassCheers,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="hero-gradient py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">
                About FlashMeet
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Connecting people through spontaneous events and meaningful
                gatherings in your city
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="People meeting at an event"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-dark mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-6 text-lg">
                  At FlashMeet, we believe that meaningful connections happen in
                  person. Our mission is to make it incredibly easy for people
                  to organize and discover local events, bringing communities
                  together through shared interests and experiences.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Whether you're looking to play sports, meet for coffee,
                  collaborate on projects, or just hang out, FlashMeet provides
                  the platform to make it happen quickly and effortlessly.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-20 bg-primary rounded-full"></div>
                  <p className="text-primary font-semibold">
                    Connecting since 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">
                What We Offer
              </h2>
              <p className="text-gray-700 text-lg">
                FlashMeet is your go-to platform for organizing and discovering
                a wide variety of events in your area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaUsers size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Social Gatherings
                </h3>
                <p className="text-gray-600">
                  Connect with new friends or meet up with existing ones for
                  casual hangouts, dinners, or coffee meetups.
                </p>
              </div>

              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaCalendarAlt size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Sports Activities
                </h3>
                <p className="text-gray-600">
                  Find teammates for basketball, soccer, tennis, or any other
                  sport you enjoy playing with others.
                </p>
              </div>

              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaGamepad size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Gaming Sessions</h3>
                <p className="text-gray-600">
                  Organize or join gaming nights, whether it's board games,
                  video games, or tabletop RPGs.
                </p>
              </div>

              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaLaptopCode size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Coworking</h3>
                <p className="text-gray-600">
                  Find productive spaces to work alongside others, share ideas,
                  and network with professionals.
                </p>
              </div>

              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaGlassCheers size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Nightlife</h3>
                <p className="text-gray-600">
                  Discover the best parties, concerts, and nightlife events
                  happening in your city.
                </p>
              </div>

              <div className="feature-card bg-white">
                <div className="text-primary mb-4">
                  <FaMapMarkerAlt size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Local Exploration
                </h3>
                <p className="text-gray-600">
                  Join groups exploring local attractions, hiking trails,
                  museums, and hidden gems in your area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse items-center gap-12">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Team working together"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-dark mb-6">Our Story</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  FlashMeet was born from a simple observation: despite living
                  in densely populated cities, many people struggle to find
                  meaningful social connections and activities that match their
                  interests.
                </p>
                <p className="text-gray-700 mb-6 text-lg">
                  Our founders experienced this firsthand when moving to new
                  cities. They found it challenging to meet like-minded
                  individuals and participate in activities they enjoyed. This
                  inspired them to create a platform that makes spontaneous
                  meetups and organized events accessible to everyone.
                </p>
                <p className="text-gray-700 text-lg">
                  Since our launch in 2023, we've helped thousands of people
                  across multiple cities find their communities, pursue their
                  passions, and create lasting memories together.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Meet Our Team
              </h2>
              <p className="text-gray-700 text-lg">
                The passionate individuals behind FlashMeet who are dedicated to
                bringing people together.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="team-card bg-white text-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Marko Petrović</h3>
                <p className="text-primary mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Passionate about bringing communities together through
                  technology.
                </p>
              </div>

              <div className="team-card bg-white text-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Ana Jovanović</h3>
                <p className="text-primary mb-3">COO & Co-Founder</p>
                <p className="text-gray-600 text-sm">
                  Expert in community building and event management.
                </p>
              </div>

              <div className="team-card bg-white text-center">
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Nikola Đorđević</h3>
                <p className="text-primary mb-3">CTO</p>
                <p className="text-gray-600 text-sm">
                  Tech visionary with a passion for creating intuitive user
                  experiences.
                </p>
              </div>

              <div className="team-card bg-white text-center">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Team member"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">Milica Stanković</h3>
                <p className="text-primary mb-3">Head of Marketing</p>
                <p className="text-gray-600 text-sm">
                  Creative strategist focused on growing the FlashMeet
                  community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-black">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the Community?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start organizing and discovering events in your area today. Join
              thousands of users already connecting through FlashMeet.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white cursor-pointer px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Sign Up Now
              </button>
              <button className="cursor-pointer bg-transparent border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ButtonToTop/>
    </>
  );
};

export default AboutPage;
