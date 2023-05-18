import React from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      callback(...args);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};
