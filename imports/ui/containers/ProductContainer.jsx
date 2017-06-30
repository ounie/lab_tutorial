import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ProductPage from '/imports/ui/pages/ProductPage.jsx';
import {Products} from '/imports/api/products/products.js';
import {Reviews} from '/imports/api/reviews/reviews.js';

export default createContainer((props) => {
  const id = props.params.id;
  //console.log('props ', props);
  //console.log('id ', id);
  const oneProductSub = Meteor.subscribe('one_product', id);
  let selector = {_id: id};

  const product = Products.findOne(selector);
  //console.warn('productSub ', products);

  const productReviewsSub = Meteor.subscribe('productReviews', id);
  const reviews = Reviews.find({product_id: id}).fetch();

  return {
    product: product,
    reviews: reviews,
    loading: !oneProductSub.ready() || !productReviewsSub.ready()
  };

}, ProductPage);
