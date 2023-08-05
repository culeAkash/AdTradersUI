import React from 'react'
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import styles from '../Static/Styles/ProductCard.module.css'

export default function ProductCard({ product }) {
    return (
        <div>
            <Card className="mb-3">
                <img className={styles.prod_image} src="/static/images/products/product_1.png" alt="prod" />
                <CardBody>
                    <CardTitle tag='h5'>{product.name}</CardTitle>
                    <CardSubtitle tag='h6' className="mb-2 text-muted">{product.stockStatus}</CardSubtitle>
                    <Button color="primary">Add to Cart</Button>{''}<span>&nbsp;</span>
                </CardBody>
            </Card>
        </div>
    )
}
