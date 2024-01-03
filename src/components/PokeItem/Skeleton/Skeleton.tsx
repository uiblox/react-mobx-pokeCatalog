import { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

export const Skeleton = ({ style }: { style: CSSProperties }) => {
  return <div className={styles.skeleton} style={style}></div>;
};
