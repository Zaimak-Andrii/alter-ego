import { useCallback, useEffect, useState } from 'react';

const useFetch = <T,>(
  fetchFn: (...args: any[]) => Promise<T>,
  immediate = false
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const executeFetch = useCallback(
    async (...args: any[]) => {
      setIsLoading(true);
      setData(null);
      setError(null);

      try {
        const data = await fetchFn(...args);
        setData(data);

        return data;
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchFn]
  );

  useEffect(() => {
    if (immediate) {
      executeFetch();
    }
  }, [executeFetch, immediate]);

  return { data, error, isLoading, executeFetch };
};

export default useFetch;
