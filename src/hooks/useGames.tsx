import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController to manage request cancellation

    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((response) => setGames(response.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return; // Ignore cancellation errors
        setError(err.message);
      });

    return () => controller.abort(); // Cleanup function to abort the request on unmount
  }, []);

  return { games, error };
};

export default useGames;
