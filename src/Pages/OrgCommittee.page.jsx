import React from "react";
import SpeakerBtn from "../utils/SpeakerBtn";
import OrgCommittee from "../Data/OrgCommittee";

const OrgCommittePage = () => {
  const [expandedMember, setExpandedMember] = React.useState(null);

  const toggleMember = (committee, memberIndex) => {
    const memberKey = `${committee}-${memberIndex}`;
    if (expandedMember === memberKey) {
      setExpandedMember(null);
    } else {
      setExpandedMember(memberKey);
    }
  };


  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6 text-blue-900">
        Organization Committees
      </h2>

      {OrgCommittee.map((committee, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-xl font-bold text-blue-900 mb-4 pb-2 border-b border-gray-200">
            {committee.name}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committee.members.map((member, idx) => {
              const memberKey = `${index}-${idx}`;
              const isExpanded = expandedMember === memberKey;

              return (
                <div key={idx} className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex flex-col items-center text-center mb-3">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-4">
                      <img
                        src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-PNG-Photos.png"
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-bold text-lg">{member.name}</h4>
                    <p className="text-blue-900 mb-2">{member.position}</p>

                    {/* <SpeakerBtn
                      text={`${member.name}, ${member.position} at ${committee.name}. ${member.bio}`}
                    /> */}

                    <button
                      onClick={() => toggleMember(index, idx)}
                      className="mt-2 text-blue-600 hover:text-blue-800"
                    >
                      {isExpanded ? "Show Less" : "Show More"}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 text-left border-t pt-4">
                      <p className="font-semibold text-gray-700">Contact:</p>
                      <p className="mb-3 text-sm">{member.contact}</p>
                      <p className="font-semibold text-gray-700">Biography:</p>
                      <p className="text-sm">{member.bio}</p>
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

export default OrgCommittePage;
