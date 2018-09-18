import React from "react";
import "./ProductListItem.css";

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
      product: { title, price }
    } = this.props;
    return (
      <div className="item">
        <h2>{title}</h2>
        <h3>{price}</h3>
      </div>
    );
  }
}

export default ProductListItem;
