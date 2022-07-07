import { useRouter } from "next/router";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "../../styles/ProductPage.module.css";

function ProductPage() {
  const [size, setSize] = useState(0);
  const [pizza, setPizza] = useState(0);
  const [extras, setExtras] = useState([]);

  const router = useRouter();

  const { id } = router.query;

  const handleChange = (e, extra) => {
    if (e.target.checked) {
      setExtras([...extras, extra]);
    } else {
      setExtras([...extras.filter((e) => e._id !== extra._id)]);
    }
  };

  const calculatedPrice = () => {
    return extras.length > 0
      ? extras.length === 1
        ? pizza.prices[size] + extras[0].price
        : extras.reduce((acc, curr) =>
            acc.price ? acc.price + curr.price : acc + curr.price
          ) + pizza.prices[size]
      : pizza.prices[size];
  };

  const fetchProduct = useCallback(async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setPizza(data.result);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    id && fetchProduct(id);
  }, [fetchProduct, id]);

  return pizza ? (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.image} layout="fill" alt="product image" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${calculatedPrice()}</span>
        <p className={styles.desc}>{pizza.description}</p>

        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image
              src="/img/size.png"
              layout="fill"
              objectFit="contain"
              alt="product image"
            />
            <span className={styles.number}>small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image
              src="/img/size.png"
              layout="fill"
              objectFit="contain"
              alt="product image"
            />
            <span className={styles.number}>medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image
              src="/img/size.png"
              layout="fill"
              objectFit="contain"
              alt="product image"
            />
            <span className={styles.number}>large</span>
          </div>
        </div>

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map((extra, i) => (
            <div className={styles.option} key={i}>
              <input
                onChange={(e) => handleChange(e, extra)}
                type="checkbox"
                id={extra.text}
                name={extra.text}
                className={styles.checkbox}
              />
              <label htmlFor={extra.text}>{extra.text}</label>
            </div>
          ))}
        </div>

        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Add to cart</button>
        </div>
      </div>
    </div>
  ) : null;
}

export default ProductPage;
