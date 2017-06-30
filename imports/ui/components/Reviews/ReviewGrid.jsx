import React, {Component} from 'react';
import StarRating from 'star-rating-react';

export default class ReviewGrid extends Component {

  render() {
    let review = this.props.review;

    return (
      <div>
        <hr className="lineBreak"/>
        <StarRating
          size={5}
          value={review.stars}
        />
        <div>
          Review: {review.review}
        </div>
      </div>
    )
  }
}
