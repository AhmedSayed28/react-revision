"use client";
import Image from "next/image";
// import styles from "./page.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import RoutingButton from "@/components/routingButton";
import styles from "../components/routingButton.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [discount, setDiscount] = useState(false);
  const [text, setText] = useState("");

  const increment = () => {
    setCounter(counter + 1);
    if (counter > 8) {
      setDiscount(true);
      setText("you have a discount with $100");
    }
  };

  const decrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(counter * 0);
  };

  useEffect(() => {}, [discount]);

  // let hasHeader = true;
  return (
    <main>
      {/* {hasHeader && <Header text='Hello i am a header' />}
      <h1>Hello There</h1>
      <Footer text='Hello from Footer' />
      <RoutingButton /> */}
      <h1>ليك خصم 100 دولار لو عديت عشر منتجات </h1>
      <h1>Counter: {counter}</h1>
      <h3 style={{ color: "red" }}>{text}</h3>
      <button onClick={increment} className={styles.btn}>
        +
      </button>
      <button onClick={decrement} className={styles.btn}>
        -
      </button>
      {/* <button onClick={incrementBy5} className={styles.btn}>
        incrementBy5
      </button> */}
      <button onClick={reset} className={styles.btn}>
        0
      </button>
    </main>
  );
}
