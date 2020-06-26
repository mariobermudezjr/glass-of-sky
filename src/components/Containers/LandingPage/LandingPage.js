import React from 'react'
const skyImage = require('../../../../public/images/sky-image-optimized.jpg')

import Link from '../../Link'
import Button from '@material-ui/core/Button'
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
        <Button
          variant="contained"
          color="primary"
          size={'large'}
          component={Link}
          naked
          href="/home"
        >
          Read More
        </Button>
      </div>
    </div>
  </div>
)

export default LandingPage
