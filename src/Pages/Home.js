import React from 'react'
import { Box, Card, Paper, Typography } from '@mui/material'
import styles from '../Static/Styles/Home.module.css'
import HomeCarousal from '../Components/HomeCarousal'
import img from '../Static/Images/A.D. TRADERS.png'
import owner from '../Static/Images/owner.png'
import { Link } from 'react-router-dom'

export default function Home() {

  const items = [
    {
      src: 'https://picsum.photos/id/123/1200/400',
      altText: 'Slide 1',
      caption: 'Slide 1',
      key: 1,
    },
    {
      src: 'https://picsum.photos/id/456/1200/400',
      altText: 'Slide 2',
      caption: 'Slide 2',
      key: 2,
    },
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 3',
      caption: 'Slide 3',
      key: 3,
    },
  ];


  return (
    <Box sx={{
      height: '100%', minHeight: '100vh'
    }}>


      {/* Carousel */}
      <HomeCarousal items={items} />


      {/* Hero section */}
      <section className={styles.info_section}>
        <img src={img} alt="icon" className={styles.company_logo} />


        <div className={styles.info_card}>
          <img src={owner} alt="ceo" className={styles.ceo_image} />
          <div className={styles.info}>
            <Typography sx={{
              fontFamily: 'monospace',
              fontWeight: '900',
              fontSize: '1.2rem',
              color: '#2E266D',
              mt: '1em'
            }}>Owner : Krishna Jaiswal </Typography>
            <Typography sx={{
              fontFamily: 'serif',
              fontWeight: '700',
              fontSize: '1rem',
              color: '#433b7f'
            }}>
              <Typography sx={{
                fontFamily: 'monospace',
                fontWeight: '900',
                fontSize: '1.2rem'
              }}>
                Note from the owner :</Typography> We deal in all types of metals and other scrap items since 2019. We are GST registered privated limited with our <Typography sx={{
                  color: 'red',
                  fontWeight: '900',
                  fontFamily: 'monospace'
                }}>GSTIN : 34873489739878935</Typography>. You can see through our <Link to='/products' style={{ textDecoration: 'none' }}>Stock</Link> and contact us for further queries.
            </Typography>
          </div>
        </div>

      </section>

    </Box >
  )
}
