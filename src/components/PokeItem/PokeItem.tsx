import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Skeleton } from "./Skeleton/Skeleton";
import styles from "./PokeItem.module.css";

export const PokeItem = ({ name, url }: { name: string; url: string }) => {
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    async () => {
      return await fetch(url).then((res) => res.json());
    },
    {
      staleTime: 600_000,
    }
  );
  return (
    <>
      {!isLoading ? (
        <Link
          to={`/react-mobx-pokeCatalog/details/${data.name}`}
          className={styles["poke-item"]}
        >
          <div className={styles["poke-container"]}>
            <div className={styles["poke-heading"]}>
              <div className={styles["poke-index"]}>#{data.id}.</div>
              <strong>{data.name}</strong>
            </div>
            <img
              src={data.sprites.other.dream_world.front_default}
              alt={data.name}
              width="96"
              height="96"
            />
            <div className={styles["poke-stats"]}>
              <div className={styles["poke-stat"]}>
                <strong>Weight: </strong>
                {data.weight}lbs
              </div>
              <div className={styles["poke-stat"]}>
                <strong>Height: </strong>
                {data.height}'
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div className={styles["skeleton-item"]}>
          <Skeleton style={{ width: 96, height: 96 }} />
          <div className={styles["skeleton-content"]}>
            <Skeleton style={{ width: 120, height: 21 }} />
            <Skeleton style={{ width: 256, height: 21 }} />
          </div>
        </div>
      )}
    </>
  );
};
