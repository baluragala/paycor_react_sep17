import React from "react";
import "./ProductListItem.css";
import PropTypes from "prop-types";

// function ProductListItem(props) {
//   let {
//     product: { title, price }
//   } = props;
//   return (
//     <div className="item">
//       <h2>{title}</h2>
//       <h3>{price}</h3>
//     </div>
//   );
// }

class ProductListItem extends React.Component {
  render() {
    let {
      product: { title, price },
      productClicked
    } = this.props;
    return (
      <div className="item" onClick={() => productClicked(title)}>
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    );
  }
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  productClicked: PropTypes.func.isRequired
};

export default ProductListItem;
