import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/PizzaCard.module.css";

function PizzaCard({ pizza }) {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => router.push(`/product/${pizza._id}`)}
    >
      <Image
        className={styles.image}
        src={pizza.image}
        alt="pizza for sale"
        width="400"
        height="300"
      />
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>{pizza.price}</span>
      <p className={styles.desc}>{pizza.description}</p>
    </div>
  );
}

export default PizzaCard;
