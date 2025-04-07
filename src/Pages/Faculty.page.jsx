import React from "react";
import FacultyMember from "../Data/FacultyMember";

const FacultyPage = () => {
  const [expandedFaculty, setExpandedFaculty] = React.useState(null);

  const toggleFaculty = (department, facultyIndex) => {
    const facultyKey = `${department}-${facultyIndex}`;
    if (expandedFaculty === facultyKey) {
      setExpandedFaculty(null);
    } else {
      setExpandedFaculty(facultyKey);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">Faculty Members</h2>

      {FacultyMember.map((department, deptIndex) => (
        <div key={deptIndex} className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-gray-200">
            {department.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {department.faculty.map((faculty, facIndex) => {
              const facultyKey = `${deptIndex}-${facIndex}`;
              const isExpanded = expandedFaculty === facultyKey;

              return (
                <div key={facIndex} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                      <img
                        src={faculty.image}
                        alt={faculty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg">{faculty.name}</h4>
                    <p className="text-blue-900 font-medium">
                      {faculty.subject}
                    </p>

                    {/* <SpeakerButton
                      text={`${faculty.name}, ${faculty.subject} teacher in the ${department.name}. ${faculty.bio}`}
                    /> */}

                    <button
                      onClick={() => toggleFaculty(deptIndex, facIndex)}
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 text-left border-t pt-4">
                      <p className="font-semibold text-gray-700">Contact:</p>
                      <p className="mb-3 text-sm">{faculty.contact}</p>
                      <p className="font-semibold text-gray-700">Biography:</p>
                      <p className="text-sm">{faculty.bio}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FacultyPage;
