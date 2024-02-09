import React from "react";
import styles from "./HugeTitle.module.css";

type TextProps = {
  text: string;
};

export default function Text(props: TextProps) {
  const { text } = props;
  return (
    <p className={styles.hugeTitle}>
      <b>{text}</b>
    </p>
  );
}
