import { useState } from "react";
import "./App.css";
import useSWR from "swr";
import Main from "@components/Main";
import ThumbLink from "@components/ThumbLink";
import { API_POPULAR_URL, API_KEY } from "./constants";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export function App() {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [width, setWidth] = useState<number>(185);
  const { data, error, isLoading } = useSWR(
    `${API_POPULAR_URL}?api_key=${API_KEY}&page=${pageNumber}`,
    fetcher,
  );

  const movies = data?.results || [];

  return (
    <>
      {movies.length > 0 && (
        <Main>
          {movies.map((movie: any) => (
            <ThumbLink
              key={movie.id}
              id={movie.id}
              movie={movie}
              width={width}
            />
          ))}
        </Main>
      )}
      {isLoading && <p>Loading movies...</p>}
      {error && <p>Error loading movies!</p>}
    </>
  );
}
