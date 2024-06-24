import Image from "next/image";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import Card from "@/components/card/Card";
import CardList from "@/components/cardList/CardList";
import About from "@/components/about/About";

export default function Home() {
  return (
    <div>
      <Featured/>
      <About />
      <CardList/>
    </div>
  );
}
