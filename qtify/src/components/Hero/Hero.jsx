import React from 'react'
import HeroImage from '../../assets/vibrating-headphone.png'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div>
        <div className={styles.hero}>
            <h1>100 Thousand Songs, ad-free</h1><br/>
            <h1>Over thousands podcast episodes</h1>
            <img src={HeroImage} alt="headphones" width={212}/>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Hero