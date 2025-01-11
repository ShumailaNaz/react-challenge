import React from 'react';

const Question = ({ question }) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{question.title}</h2>
      <p className="mb-4">{question.questionText}</p>
      <input
        type="text"
        placeholder="Answer input space"
        className="w-full border px-3 py-2 rounded"
      />
    </div>
  );
};

export default Question;