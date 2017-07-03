import React, {Component} from 'react';
import { Link } from 'react-router';

export default class DropGrid extends Component {

  render() {
    let product = this.props.product;

    return (
      <div className="col-sm-3">
        <img className="img-responsive" src={product.images[0]} />
        <h2 className="text-center">{product.product_name}</h2>
        <div className="text-center">
          {product.org_price}
          <Link to={'/drop/'+product.product_id}>
            <button className="btn btn-primary">Participate Now</button>
          </Link>
        </div>
      </div>
    )
  }
}
