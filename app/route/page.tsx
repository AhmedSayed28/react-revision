import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

function Page() {
  return (
    <Link className={styles.btn} href='/'>
      Back
    </Link>
  );
}

export default Page;
