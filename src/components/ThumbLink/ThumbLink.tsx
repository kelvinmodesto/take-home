type Props = {
  movie: any;
  id: string;
  width: number;
};

export const ThumbLink = ({ movie, id, width }: Props) => {
  return (
    <a href={`https://example.com/${id}`} style={{ width }}>
      <div key={movie.id}>
        <img
          src={`https://image.tmdb.org/t/p/w${width}/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
    </a>
  );
};
