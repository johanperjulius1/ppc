import Image from "next/image";
import classes from "./toplist-item.module.css";
import Rating from "./feber/rating";
import BadgeBoard from "./badge-board";
import { Casino } from "@/types/types";

interface CasinoProps {
  casino: Casino
}


export default function ToplistItem({ casino }: CasinoProps) {
  const { title, logo, rating, excerpt, link } = casino;
  const logoPath = `/images/logos/${title}/${logo}`;

  return (
    <div className={`${classes["toplist-item"]}`}>
      <div
        className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-left"]}`}
      >
        <Image
          className={classes.img}
          src={logoPath}
          alt={`${title} logo`}
          width={150}
          height={50}

        />


        <Rating rating={rating} />
        <BadgeBoard />
        <div> {excerpt}</div>
      </div>
      <div
        className={`${classes["toplist-item__container"]} ${classes["toplist-item__container-right"]}`}
      >
        <a className={classes["toplist-item__button"]} href={link}>
          Besok casinot{" "}
        </a>
      </div>
    </div>
  );
}
