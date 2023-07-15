import React from 'react'
import { Container } from 'reactstrap'
import { Dropdown, Input } from 'semantic-ui-react'
import styles from '../Static/Styles/Products.module.css'

export default function Products() {

  const categories = [];


  return (
    <Container fluid>
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


    </Container>
  )
}
