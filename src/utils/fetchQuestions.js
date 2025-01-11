// src/utils/fetchQuestions.js
export const fetchQuestions = async () => {
    try {
      const response = await fetch('/questions.json');
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };