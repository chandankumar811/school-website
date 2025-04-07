import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Shree Narayani Gandaki Shadharan Tatha Sanskrit Secondary School
              </h3>
              <a href="https://maps.app.goo.gl/5WRvRxYmo7U6y3AV8">
                <p className="hover:underline">Binayi Triveni-6, Nawalparasi (B.S.E)</p>
              </a>
            </div>
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@excellencehigh.edu</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Quick Links</h3>
              <ul>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    School Calendar
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-blue-800 text-center">
            <p>
              © {new Date().getFullYear()} Shree Narayani Gandaki Shadharan
              Tatha Sanskrit Secondary School. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
