import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import styles from '../Static/Styles/ProductCard.module.css'

export default function ProductCard() {
    return (
        <div>
            <Card className="mb-3">
                <img className={styles.prod_image} src="/static/images/products/product_1.png" alt="prod" width />
                <CardBody>
                    <CardTitle tag='h5'>Product Name</CardTitle>
                    <CardSubtitle tag='h6' className="mb-2 text-muted">$98</CardSubtitle>
                    <Button color="primary">Add to Cart</Button>{''}<span>&nbsp;</span>
                </CardBody>
            </Card>
        </div>
    )
}
