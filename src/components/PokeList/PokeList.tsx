import { useQuery } from "react-query";
import { PokeItem } from "../PokeItem/PokeItem";

export interface PokeItem {
  name: string;
  url: string;
}

const PokeList = () => {
  const { data, isLoading } = useQuery(
    "pokemon-list",
    async () => {
      return await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    {
      staleTime: 600_000,
    }
  );
  return (
    <>
      {!isLoading &&
        data.results.map((i: PokeItem) => (
          <div key={i.name}>
            <PokeItem name={i.name} url={i.url} />
          </div>
        ))}
    </>
  );
};

export default PokeList;
