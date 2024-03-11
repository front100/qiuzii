import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { QuizContext } from '../context/quizContext';

import { IQuizList, TransformedData } from '../interfaces/quizdata';
import { createAnswers, decodeText } from '../helpers/helpFunctions';

const useFetch = (endpoint: string) => {
  const { quizData, setQuizData } = useContext(QuizContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [refetch, setRefetch] = useState(false);

  const fetchOptions = {
    method: 'GET',
    url: `https://opentdb.com/${endpoint}`,
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios.request(fetchOptions);
      const resData: IQuizList = res.data;
      const transformedData: TransformedData[] = resData.results.map((item) => ({
        question: decodeText(item.question),
        correctAnswer: decodeText(item.correct_answer),
        answers: createAnswers(item.incorrect_answers, item.correct_answer),
        category: item.category,
        difficulty: item.difficulty,
      }));

      setQuizData(transformedData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => {
    setError(null);
    fetchData();
  };

  return {
    isLoading,
    error,
    quizData,
    setRefetch,
    refetchData,
    setError,
  };
};
export default useFetch;
