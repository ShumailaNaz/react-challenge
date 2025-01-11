import React, { useEffect, useState } from 'react';


import QAForm from '../components/QAForm/QAForm';
import { fetchQuestions } from '../utils/fetchQuestions';

const InterviewQA = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data);
      setLoading(false);
    };
    getQuestions();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Interview QA</h1>
      <QAForm questions={questions} />
    </div>
  );
};

export default InterviewQA;


