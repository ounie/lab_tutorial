import React, {Component} from 'react';
import accounting from 'accounting';

export default class ProductDetails extends Component {
  render() {
    let product = this.props.product;
    let flavors = [];
    if(product.flavors){
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
        return <span key={i}>{flavor} </span>
    });

    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center">{product.name}</h2>
            {product.description ? <p className="lead">
              <strong>Description: </strong>
              {product.description}
            </p> : <p>no description available</p>}
            <p className="lead">
              <strong>Flavors: </strong>
              {flavorList}
            </p>
            <h2 className="text-center">{accounting.formatMoney(product.price)}</h2>
            <button className="btn btn-primary">Add To Cart</button>
          </div>
        </div>
      </div>
    )
  }
}
