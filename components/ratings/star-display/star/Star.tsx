import Image from "next/image";
import styles from "./Star.module.css";

const STAR_SIZE = 17;

type StarProps = {
  id: "full" | "half" | "empty";
};

export default function Star(props: StarProps) {
  const { id } = props;
  const imageUrl = `/ratings/${id}-star.svg`;
  const camelCaseStarId = id.slice(0, 1).toUpperCase() + id.slice(1);
  const imageAlt = `${camelCaseStarId} star`;
  return (
    <Image
      className={styles.starItem}
      src={imageUrl}
      alt={imageAlt}
      width={STAR_SIZE}
      height={STAR_SIZE}
    />
  );
}
