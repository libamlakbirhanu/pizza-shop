import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  const fetchPizzas = async () => {
    try {
      const res = await axios.get("/api/products");
      console.log(res.data);
      setPizzas(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPizzas();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et uauada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscig elit.
      </p>
      <div className={styles.wrapper}>
        {pizzas?.map((pizza, i) => (
          <PizzaCard key={i} pizza={pizza} />
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
