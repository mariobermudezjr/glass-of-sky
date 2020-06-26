import React from 'react'
const skyImage = require('../../../../public/images/sky-image-optimized.jpg')

import Link from '../../Link'
import styles from './LandingPage.module.css'

const LandingPage = () => (
  <div
    style={{
      backgroundImage:
        'url(' + `${require('../../../../public/images/sky-image-optimized.jpg')}` + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'table',
      width: '100%',
      height: '100vh',
    }}
  >
    <div className={styles.content}>
      <h1 className={styles.h1Landing}>GLASS OF SKY</h1>
      <p className={styles.pLanding}>a place where you</p>
      <p className={styles.pLanding}>can leave your</p>
      <p className={styles.pLanding}>thoughts and ideas.</p>
      <div className={styles.buttonContainer}>
        <Link href="/home" className={styles.customButton}>
          Read more
        </Link>
      </div>
    </div>
  </div>
)

export default LandingPage
