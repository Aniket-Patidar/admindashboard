// App.js
import React, { useState } from 'react';

// Sample data for different Poojas
const poojaData = {
  "Durga Pooja": {
    question: "What is the significance of Durga Pooja?",
    answer: "Durga Pooja celebrates the victory of the goddess Durga over the demon Mahishasura."
  },
  "Gopal Pooja": {
    question: "Why is Gopal Pooja performed?",
    answer: "Gopal Pooja is performed to seek the blessings of Lord Krishna."
  },
  // Add more Pooja data here
};

function Task() {
  const [selectedPooja, setSelectedPooja] = useState("Durga Pooja");

  const handlePoojaChange = (event) => {
    setSelectedPooja(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome to Pooja Booking</h1>
      <select value={selectedPooja} onChange={handlePoojaChange}>
        {Object.keys(poojaData).map((pooja) => (
          <option key={pooja} value={pooja}>{pooja}</option>
        ))}
      </select>
      <div className="pooja-info">
        <h2>{selectedPooja}</h2>
        <p><strong>Question:</strong> {poojaData[selectedPooja].question}</p>
        <p><strong>Answer:</strong> {poojaData[selectedPooja].answer}</p>
      </div>
      <button onClick={() => alert("Redirect to booking page")}>Book Now</button>
    </div>
  );
}

export default Task;
