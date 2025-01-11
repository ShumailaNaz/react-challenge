import React, { useState } from "react";

const QAForm = ({ questions }) => {
  const [answers, setAnswers] = useState(
    questions.map((question) => ({
      questionText: question.questionText,
      answer: "",
    }))
  );

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    setAnswers((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, answer: value } : item
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the JSON content
    const jsonContent = JSON.stringify(answers, null, 2);

    // Create a blob and trigger a download
    const blob = new Blob([jsonContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "answers.json";
    link.click();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {questions.map((question, index) => (
        <div key={index} className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">{`Question ${index + 1}`}</h3>
          <p>{question.questionText}</p>
          <input
            type="text"
            className="border rounded w-full mt-2 p-2"
            placeholder="Answer input space"
            value={answers[index].answer}
            onChange={(e) => handleInputChange(e, index)}
          />
        </div>
      ))}
      <button
        type="submit"
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-600"
      >
        Submit
      </button>
    </form>
  );
};

export default QAForm;
