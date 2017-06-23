import React, {Component} from 'react';
import { Link } from 'react-router';

export default class ProductGrid extends Component {

  render() {
    let product = this.props.product;

    return (
      <div className="col-sm-3">
        <img className="img-responsive" src={product.image} />
        <h2 className="text-center">{product.name}</h2>
        <div className="text-center">
          {product.price}
          <Link to={'/product/'+product._id}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
        </div>
      </div>
    )
  }
}
