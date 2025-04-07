import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact Us</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">
            School Address
          </h3>
          <p className="mb-2">Excellence High School</p>
          <p className="mb-2">123 Education Drive</p>
          <p className="mb-2">Knowledge City, EX 12345</p>
          <p className="mb-4">United States</p>

          <h3 className="text-xl font-bold mb-4 text-blue-900">
            Contact Information
          </h3>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: info@excellencehigh.edu</p>
          <p>Office Hours: Monday-Friday, 8:00 AM - 4:00 PM</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">
            Send Us a Message
          </h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-900">
          School Location
        </h3>
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1313.4010638950122!2d83.92341343737006!3d27.45202214338913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39943fc8d9bd7993%3A0xd7c1d47d5df5ed7!2z4KS24KWN4KSw4KWAIOCkqOCkvuCksOCkvuCkr-Cko-ClgCDgpJfgpKPgpY3gpKHgpJXgpYAg4KS44KS-LiDgpKTgpKXgpL4g4KS44KSCLiDgpLXgpL_gpKfgpL7gpLLgpK8!5e1!3m2!1sen!2sin!4v1743965659514!5m2!1sen!2sin" className="w-full h-full"></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
