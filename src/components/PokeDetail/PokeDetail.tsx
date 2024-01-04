import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styles from "./PokeDetail.module.css";
const PokeDetail = () => {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading } = useQuery(
    ["poke-detail", name],
    async () => {
      return await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
        .then((res) => res.json())
        .catch((err) => console.log(err));
    },
    { staleTime: 600_000 }
  );
  return (
    <>
      {!isLoading && data ? (
        <div className={styles["poke-detail"]}>
          <Link
            className={styles["poke-button"]}
            to={"/react-mobx-pokeCatalog"}
          >
            &lt; back
          </Link>
          <div className={styles["poke-content"]}>
            <div className={styles["poke-detail-background"]}>
              <img
                className={styles["poke-detail-img"]}
                src={data.sprites.other.dream_world.front_default}
                alt={data.name}
              />
            </div>
            <div className={styles["poke-info"]}>
              <h1 className={styles["poke-name"]}>{data.name.toUpperCase()}</h1>
              <p
                className={styles["poke-stats"]}
              >{`Base Experience: ${data.base_experience}`}</p>
              <p
                className={styles["poke-stats"]}
              >{`Moves: ${data.moves.length}`}</p>
              <p
                className={styles["poke-stats"]}
              >{`Abilities: ${data.abilities.length}`}</p>
              <p
                className={styles["poke-stats"]}
              >{`Forms: ${data.forms.length}`}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default PokeDetail;
