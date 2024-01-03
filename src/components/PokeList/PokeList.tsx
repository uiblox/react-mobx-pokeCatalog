import { useQuery } from "react-query";

interface PokeData {
  name: string;
  url: string;
}

export const PokeList = () => {
  const { data, isLoading } = useQuery(
    "pokemon-list",
    async () => {
      return await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      ).then((res) => res.json());
    },
    {
      staleTime: 600_000,
    }
  );
  return (
    <>
      {!isLoading &&
        data.results.map((i: PokeData) => <div key={i.name}>{i.name}</div>)}
    </>
  );
};
