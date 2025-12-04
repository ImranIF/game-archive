import apiClient from "@/services/api-client";
import { CanceledError, type AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController(); // Create an AbortController to manage request cancellation

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig, // Spread any additional request configurations
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return; // Ignore cancellation errors
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort(); // Cleanup function to abort the request on unmount
    },
    deps ? [...deps] : []
  ); // Include dependencies if provided else an empty array is used as dependency

  return { data, error, isLoading };
};

export default useData;
