import React from "react";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or need help with your order? Our team is
          here to assist you and ensure you have the best food ordering
          experience.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Get In Touch
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-gray-600">
                Need help with orders, payments, or your account?
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">support@foodiehub.com</p>
            </div>

            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 98765 43210</p>
            </div>

            <div>
              <h3 className="font-semibold">Office Address</h3>
              <p className="text-gray-600">
                Ghaziabad, Uttar Pradesh, India
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Support Hours</h3>
              <p className="text-gray-600">
                9:00 AM - 11:00 PM, All Days
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;