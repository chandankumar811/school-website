import React from "react";

const SpeakerBtn = ({ text }) => {
  const speak = () => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ne-NP"; // Set the language to Nepali
      utterance.rate = 1; // Set the speech rate (1 is normal speed)
      utterance.pitch = 1; // Set the pitch (1 is normal pitch)

      const voices = window.speechSynthesis.getVoices();
      const nepaliVoice = voices.find((voice) => voice.lang === "ne-NP");
      if (nepaliVoice) {
        utterance.voice = nepaliVoice; // Set the voice to Nepali
      } else {
        console.warn("Nepali voice not found, using default voice.");
      }
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser doesn't support text-to-speech.");
    }
  };
  return (
    <button
      onClick={speak}
      className="text-blue-600 hover:text-blue-800 flex items-center mt-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
        />
      </svg>
      Listen
    </button>
  );
};

export default SpeakerBtn;
