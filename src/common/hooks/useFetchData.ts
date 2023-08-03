import { useEffect, useState } from "react";

interface FetchResult<T> {
  data: T;
  loading: boolean;
  error: string;
}

export const useFetchData = <T>(url: string): FetchResult<T> => {
  const [data, setData] = useState<T>([] as any);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          setError("Failed to fetch data");
          setLoading(false);
          return;
        }
        const jsonData = await response.json();

        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
