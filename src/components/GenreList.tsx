import useGenres from "../hooks/useGenres";

type Props = {};

export default function GenreList({}: Props) {
  const { genres } = useGenres();

  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
}
