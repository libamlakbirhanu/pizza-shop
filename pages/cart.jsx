import Image from 'next/image'
import styles from '../styles/cart.module.css'

function cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
       <table className={styles.table}>
          <thead className={styles.tableHeader}>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extras</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='product image' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>Double ingredient, Spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>5</span>
              </td>
              <td>
                <span className={styles.total}>$99.50</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='product image' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>Double ingredient, Spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>5</span>
              </td>
              <td>
                <span className={styles.total}>$99.50</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='product image' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>Double ingredient, Spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>5</span>
              </td>
              <td>
                <span className={styles.total}>$99.50</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='product image' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>Double ingredient, Spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>5</span>
              </td>
              <td>
                <span className={styles.total}>$99.50</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image src='/img/pizza.png' layout='fill' objectFit='cover' alt='product image' />
                </div>
              </td>
              <td>
                <span className={styles.name}>CORALZO</span>
              </td>
              <td>
                <span className={styles.extras}>Double ingredient, Spicy sauce</span>
              </td>
              <td>
                <span className={styles.price}>$19.90</span>
              </td>
              <td>
                <span className={styles.quantity}>5</span>
              </td>
              <td>
                <span className={styles.total}>$99.50</span>
              </td>
            </tr>
          </tbody>
        </table> 
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div
            className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$79.60
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  )
}

export default cart