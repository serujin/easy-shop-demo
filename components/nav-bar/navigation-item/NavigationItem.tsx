import Link from "next/link";
import styles from "./NavigationItem.module.css";

type NavigationItemProps = {
  text: string;
};

export default function NavigationItem(props: NavigationItemProps) {
  const { text } = props;
  return (
    <li>
      <Link className={styles.navigationLink} href={"#"}>
        <b>{text}</b>
      </Link>
    </li>
  );
}
