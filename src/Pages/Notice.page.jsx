import React from "react";

const NoticePage = () => {
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
          <div
            key={notice.id}
            className="border-l-4 border-blue-900 bg-gray-50 p-4"
          >
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

export default NoticePage;
