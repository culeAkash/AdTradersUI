import React from 'react'
import styles from '../Static/Styles/Home.module.css'
import HomeCarousal from '../Components/HomeCarousal'
import owner from '../Static/Images/owner.png'
import owner2 from '../Static/Images/owner2.png'
import { Button, Card, CardBody, CardHeader } from 'reactstrap'

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
    {
      src: 'https://picsum.photos/id/678/1200/400',
      altText: 'Slide 4',
      caption: 'Slide 4',
      key: 4,
    },
  ];

  return (
    <div className={styles.home_container}>

      {/* Carousal */}
      <HomeCarousal items={items} />



      {/* Info */}

      <div className={styles.info_section}>

        <div className={styles.owner_images}>
          <img src={owner} alt="" />
          <img src={owner2} alt="" />
        </div>

        <div className={styles.company_info}>
          A.D. TRADERS is a reputable metal trading and export-import shop established in 2017. With a strong commitment to delivering quality products and exceptional service, we have quickly become a trusted name in the industry. We specialize in trading various grades of metals, including electric and lithium-ion batteries, magnetic metals, and household utensils. Our wide range of offerings caters to diverse industries and customer needs.
          <br />
          <div style={{
            marginTop: '2em',
            color: 'red'
          }}>
            <p>GSTIN : 19ANWPJ7766R1ZG</p>
            <p>Owner Name : Krishna Jaiswal and Deepak Jaiswal</p>
            <p>Contact : 7980952307 / 8981294217 </p>
          </div>

          <div className={styles.actions}>
            <Card outline color='dark'>
              <CardHeader style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}>Know more about us</div>
                <div>See our products</div>
              </CardHeader>
              <CardBody style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ width: '50%' }}> <Button color='warning'>Contact Us</Button> </div>
                <div><Button color='primary'>See our stock</Button></div>
              </CardBody>
            </Card>
          </div>

        </div>
      </div>


      <div className={styles.actions_small + " mx-3 mb-2"}>
        <Card outline color='dark'>
          <CardHeader style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%' }}>Know more about us</div>
            <div>See our products</div>
          </CardHeader>
          <CardBody style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '50%' }}> <Button color='warning'>Contact Us</Button> </div>
            <div><Button color='primary'>See our stock</Button></div>
          </CardBody>
        </Card>
      </div>

    </div >
  )
}
