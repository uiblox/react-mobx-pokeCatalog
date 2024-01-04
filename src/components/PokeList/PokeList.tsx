import { useQuery } from "react-query";
import { PokeItem } from "../PokeItem/PokeItem";
import styles from "./PokeList.module.css";
import banner from "../../assets/Pokemon_logo.png";
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
      <div className={styles["pokelist-banner"]}>
        <img src={banner} width="400" height="147" />
      </div>
      <div className={styles["pokelist-grid"]}>
        {!isLoading &&
          data.results.map((i: PokeItem) => (
            <PokeItem key={i.name} name={i.name} url={i.url} />
          ))}
      </div>
    </>
  );
};

export default PokeList;
