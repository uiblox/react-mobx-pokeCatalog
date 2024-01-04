import { useInfiniteQuery, useQuery } from "react-query";
import { PokeItem } from "../PokeItem/PokeItem";
import styles from "./PokeList.module.css";
import banner from "../../assets/Pokemon_logo.png";
export interface PokeItem {
  name: string;
  url: string;
}

const PokeList = () => {
  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery(
    "pokemon-list",
    async ({ pageParam = 0 }) => {
      return await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${pageParam * 100}`
      )
        .then((res) => res.json())
        .then((res) => ({ ...res, page: pageParam }))
        .catch((err) => console.log(err));
    },
    {
      staleTime: 600_000,
      getNextPageParam: (lastPage) => {
        if (lastPage.next !== null) {
          return lastPage.page + 1;
        }
      },
    }
  );
  return (
    <>
      <div className={styles["pokelist-banner"]}>
        <img src={banner} width="400" height="147" />
      </div>
      <div className={styles["pokelist-grid"]}>
        {!isLoading &&
          data?.pages.map((d) =>
            d.results.map((i: PokeItem) => (
              <PokeItem key={i.name} name={i.name} url={i.url} />
            ))
          )}
      </div>
      {hasNextPage && (
        <div className={styles["grid-footer"]}>
          <button
            className={styles["poke-button"]}
            onClick={() => fetchNextPage()}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default PokeList;
