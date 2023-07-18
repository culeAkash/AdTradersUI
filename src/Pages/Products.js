import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Dropdown, Input } from 'semantic-ui-react'
import styles from '../Static/Styles/Products.module.css'
import ProductCard from '../Components/ProductCard';

export default function Products() {

  const categories = [];


  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


  return (
    <div className={styles.product_container + " container-fluid"}>
      <div className={styles.product_actions}>

        <Dropdown
          clearable
          multiple
          search
          selection
          placeholder='Select Product categories'
          options={categories}
          className={styles.dropdown}
        />

        <Input icon='search' placeholder='Search for products' className={styles.search_bar} />

      </div>

      <h1 className={styles.products_head}>
        ALL PRODUCTS
      </h1>

      <Row className={styles.prod_content}>
        {
          arr.map(a => {
            return (
              <Col
                xs={{
                  size: '6',
                  offset: '0'
                }}
                md={{
                  size: '4',
                  offset: '0'
                }}
                lg={{
                  size: 3
                }}
                sm={
                  {
                    size: '6',
                    offset: '0'
                  }
                }
              >
                <ProductCard />
              </Col>
            )
          })
        }


      </Row>


    </div>
  )
}
