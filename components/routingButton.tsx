import React from "react";
import styles from "./routingButton.module.css";
import Link from "next/link";

function RoutingButton() {
  return (
    <Link className={styles.btn} href='/route'>
      Go To Route
    </Link>
  );
}

export default RoutingButton;
