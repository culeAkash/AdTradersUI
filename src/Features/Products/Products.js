import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Dropdown, Input } from 'semantic-ui-react'
import styles from '../../Static/Styles/Products.module.css'
import ProductCard from '../../Components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
// import { getCategories } from '../../Services/CategoryService';
import { fetchProducts, selectAllProducts } from './ProductSlice';
import { fetchCategories, getAllCategories } from '../Category/CategorySlice';

export default function Products() {


  const dispatch = useDispatch()
  const [filterCategories, setFiltercategories] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  // console.log("inside products");



  let { response, products } = useSelector((state) => selectAllProducts(state, filterCategories, searchInput));

  const categories = useSelector(getAllCategories);




  let content;

  if (response.status === 'loading') {
    // loading spinner will go here
    content = <p>Loading ...</p>
  }
  else if (response.status === 'succeeded') {
    content =
      products.map(product => {
        return (
          <Col
            key={product._id}
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
            <ProductCard product={product} />
          </Col>
        )
      })
  }
  else if (response.status === 'failed') {
    // go to error page
    content = <p>Something went very wrong...</p>
  }



  const handleCategoryChange = (event, data) => {
    // console.log(data.value)
    setFiltercategories(data.value)
  }


  const handleSearch = (event) => {
    // console.log(event.target.value);
    setSearchInput(event.target.value.trim());
  }


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
          onChange={handleCategoryChange}
        />

        <Input icon='search' placeholder='Search for products' onChange={handleSearch} className={styles.search_bar} />

      </div>

      <h1 className={styles.products_head}>
        ALL PRODUCTS
      </h1>

      <Row className={styles.prod_content}>
        {content}
      </Row>



    </div>
  )
}



  // [
  //   { key: 'angular', text: 'Angular', value: 'angular' },
  //   { key: 'css', text: 'CSS', value: 'css' },
  //   { key: 'design', text: 'Graphic Design', value: 'design' },
  //   { key: 'ember', text: 'Ember', value: 'ember' },
  //   { key: 'html', text: 'HTML', value: 'html' },
  //   { key: 'ia', text: 'Information Architecture', value: 'ia' },
  //   { key: 'javascript', text: 'Javascript', value: 'javascript' },
  //   { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  //   { key: 'meteor', text: 'Meteor', value: 'meteor' },
  //   { key: 'node', text: 'NodeJS', value: 'node' },
  //   { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  //   { key: 'python', text: 'Python', value: 'python' },
  //   { key: 'rails', text: 'Rails', value: 'rails' },
  //   { key: 'react', text: 'React', value: 'react' },
  //   { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  //   { key: 'ruby', text: 'Ruby', value: 'ruby' },
  //   { key: 'ui', text: 'UI Design', value: 'ui' },
  //   { key: 'ux', text: 'User Experience', value: 'ux' },
  // ]