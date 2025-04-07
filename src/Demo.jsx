import React, { useState } from 'react';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white text-blue-900 w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-3">
            EHS
          </div>
          <div>
            <h1 className="text-2xl font-bold">Excellence High School</h1>
            <p className="text-sm">Excellence in Education Since 1985</p>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="bg-blue-800 px-4 py-1 rounded-full">
            <p className="text-sm">Admin Login</p>
          </div>
        </div>
      </div>
    </header>
  );
};

const Navigation = ({ activePage, setActivePage }) => {
  const navItems = ['Home', 'Notices', 'Committee', 'Contact'];
  
  return (
    <nav className="bg-blue-800 text-white">
      <div className="container mx-auto px-4">
        <ul className="flex flex-wrap">
          {navItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => setActivePage(item)}
                className={`px-4 py-3 hover:bg-blue-700 transition ${
                  activePage === item ? 'bg-blue-700 font-medium' : ''
                }`}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Excellence High School</h3>
            <p>123 Education Drive</p>
            <p>Knowledge City, EX 12345</p>
          </div>
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Contact</h3>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@excellencehigh.edu</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">School Calendar</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-blue-800 text-center">
          <p>© {new Date().getFullYear()} Excellence High School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16 rounded-lg mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Excellence High School</h1>
          <p className="text-xl mb-6">Preparing Students for the Future</p>
          <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition">
            Learn More
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Academic Excellence</h2>
          <p>Our school consistently maintains high academic standards with exceptional results in board examinations.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Extracurricular Activities</h2>
          <p>We offer a wide range of sports, arts, and cultural activities to ensure holistic development.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 text-blue-900">Modern Facilities</h2>
          <p>Our campus features well-equipped labs, a comprehensive library, and state-of-the-art classrooms.</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Latest Announcements</h2>
        <div className="border-l-4 border-blue-900 pl-4 mb-4">
          <h3 className="font-bold">Annual Sports Day - April 15, 2025</h3>
          <p className="text-gray-600">Prepare for the upcoming annual sports competition</p>
        </div>
        <div className="border-l-4 border-blue-900 pl-4">
          <h3 className="font-bold">Parent-Teacher Meeting - April 20, 2025</h3>
          <p className="text-gray-600">Important meeting to discuss student progress</p>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Contact Us</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">School Address</h3>
          <p className="mb-2">Excellence High School</p>
          <p className="mb-2">123 Education Drive</p>
          <p className="mb-2">Knowledge City, EX 12345</p>
          <p className="mb-4">United States</p>
          
          <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Information</h3>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Email: info@excellencehigh.edu</p>
          <p>Office Hours: Monday-Friday, 8:00 AM - 4:00 PM</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-900">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
              <input type="text" id="subject" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4 text-blue-900">School Location</h3>
        <div className="bg-gray-200 h-64 rounded flex items-center justify-center">
          <p className="text-gray-600">Map placeholder - School location</p>
        </div>
      </div>
    </div>
  );
};

const CommitteePage = () => {
  const committees = [
    {
      name: "School Management Committee",
      members: [
        { name: "Dr. Robert Johnson", position: "Chairman", image: "/api/placeholder/100/100" },
        { name: "Mrs. Sarah Davis", position: "Vice Chairman", image: "/api/placeholder/100/100" },
        { name: "Mr. Michael Brown", position: "Secretary", image: "/api/placeholder/100/100" }
      ]
    },
    {
      name: "Academic Committee",
      members: [
        { name: "Prof. Lisa Anderson", position: "Head", image: "/api/placeholder/100/100" },
        { name: "Dr. James Wilson", position: "Member", image: "/api/placeholder/100/100" },
        { name: "Ms. Emily Taylor", position: "Member", image: "/api/placeholder/100/100" }
      ]
    },
    {
      name: "Student Welfare Committee",
      members: [
        { name: "Mr. David Miller", position: "Coordinator", image: "/api/placeholder/100/100" },
        { name: "Mrs. Patricia Clark", position: "Member", image: "/api/placeholder/100/100" },
        { name: "Mr. Thomas White", position: "Member", image: "/api/placeholder/100/100" }
      ]
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Organization Committees</h2>
      
      {committees.map((committee, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-gray-200">
            {committee.name}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committee.members.map((member, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-bold text-lg">{member.name}</h4>
                <p className="text-blue-900">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const NoticesPage = () => {
  const notices = [
    {
      id: 1,
      title: "Annual Examination Schedule",
      date: "April 2, 2025",
      content: "The annual examinations for Class 12 will commence from May 5, 2025. The detailed timetable has been posted on the school notice board."
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "April 1, 2025",
      content: "The annual Science Exhibition will be held on April 25, 2025. Students interested in participating should register with their science teachers by April 10."
    },
    {
      id: 3,
      title: "Summer Vacation Notice",
      date: "March 28, 2025",
      content: "The school will remain closed for summer vacation from May 25 to June 30, 2025. Classes will resume on July 1, 2025."
    },
    {
      id: 4,
      title: "Career Counseling Session",
      date: "March 25, 2025",
      content: "A career counseling session for Class 12 students will be conducted on April 12, 2025. Various university representatives will be present to guide students regarding career options."
    }
  ];
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">School Notices</h2>
      
      <div className="space-y-4">
        {notices.map((notice) => (
          <div key={notice.id} className="border-l-4 border-blue-900 bg-gray-50 p-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg">{notice.title}</h3>
              <span className="text-sm text-gray-500">{notice.date}</span>
            </div>
            <p>{notice.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdminPanel = ({ setShowAdmin }) => {
  const [noticeTitle, setNoticeTitle] = useState('');
  const [noticeContent, setNoticeContent] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Notice posted successfully!');
    setNoticeTitle('');
    setNoticeContent('');
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900">Admin Panel</h2>
          <button 
            onClick={() => setShowAdmin(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <h3 className="text-xl font-bold mb-4 text-blue-900">Post a New Notice</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="title">Notice Title</label>
            <input 
              type="text" 
              id="title" 
              className="w-full p-2 border border-gray-300 rounded"
              value={noticeTitle}
              onChange={(e) => setNoticeTitle(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="content">Notice Content</label>
            <textarea 
              id="content" 
              rows="6" 
              className="w-full p-2 border border-gray-300 rounded"
              value={noticeContent}
              onChange={(e) => setNoticeContent(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition">
              Post Notice
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Demo = () => {
  const [activePage, setActivePage] = useState('Home');
  const [showAdmin, setShowAdmin] = useState(false);
  
  const renderPage = () => {
    switch(activePage) {
      case 'Home':
        return <HomePage />;
      case 'Contact':
        return <ContactPage />;
      case 'Committee':
        return <CommitteePage />;
      case 'Notices':
        return <NoticesPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <Navigation activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderPage()}
      </main>
      
      <div className="container mx-auto px-4 py-4">
        <button 
          onClick={() => setShowAdmin(true)}
          className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
        >
          Admin Panel
        </button>
      </div>
      
      <Footer />
      
      {showAdmin && <AdminPanel setShowAdmin={setShowAdmin} />}
    </div>
  );
};

export default Demo;