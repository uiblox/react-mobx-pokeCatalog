import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";

const PokeDetail = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(
    ["poke-detail", name],
    async () => {
      return await fetch("https://pokeapi.co/api/v2/pokemon/" + name).then(
        (res) => res.json()
      );
    },
    { staleTime: 600_000 }
  );
  return (
    <div>
      S{!isLoading && JSON.stringify(data)}
      <Link to={"/"}>back</Link>
    </div>
  );
};

export default PokeDetail;
