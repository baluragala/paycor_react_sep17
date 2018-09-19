import React from "react";
import "./ProductListItem.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
  constructor(props) {
    super(props);
    console.log("Constructor");
  }
  render() {
    let {
      product: { title, price, id },
      productClicked
    } = this.props;
    console.log("render", title);
    return (
      <div className="item" onClick={() => productClicked(title)}>
        <h2>
          <Link to={`/products/${id}`}>{title}</Link>
        </h2>
        <h3>{price}</h3>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.product !== this.props.product;
  }
}

ProductListItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  productClicked: PropTypes.func.isRequired
};

ProductListItem.defaultProps = {
  product: {
    title: "default",
    price: 0
  }
};

export default ProductListItem;
