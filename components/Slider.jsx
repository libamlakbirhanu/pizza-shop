import Image from 'next/image'
import { useState } from 'react'
import styles from '../styles/Slider.module.css'

function Slider() {
  const images = ['/img/featured.jpg', '/img/featured2.jpg', '/img/featured3.jpg']
  const [imgInd, setImgInd] = useState(0)

  const handleArrowClick = (dir) => {
    if (dir === 'r')
      setImgInd(imgInd !== 2 ? imgInd + 1 : 0)
    else
      setImgInd(imgInd !== 0 ? imgInd - 1 : 2)
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0, zIndex: '1' }} onClick={() => handleArrowClick('l')}>
        <Image src='/img/arrowl.png' alt='left arrow' layout='fill' objectFit='cover' />
      </div>
      <div className={styles.wrapper} style={{ transform: `translateX(${-100 * imgInd}vw)` }}>
        <div className={styles.heroTextWrapper}>
          <h1 className={styles.heroTitle}>Best Pizza In Town</h1>
          <p className={styles.heroText}>Our pizzas elevate the taste of there kinda to a whole new level.</p>
        </div>
        {images.map((image, index) =>
          <div className={styles.imgContainer} key={index}>
            <Image src={image} alt='pizza image' layout='fill' objectFit='cover' />
          </div>
        )}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={() => handleArrowClick('r')}>
        <Image src='/img/arrowr.png' alt='right arrow' layout='fill' objectFit='cover' />
      </div>
    </div >
  )
}

export default Slider