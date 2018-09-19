import React from "react";

export default function ProductDetail(props) {
  // let {
  //   match: {
  //     params: { pid }
  //   }
  // } = props;
  console.log(props);
  return (
    <div>
      <h1>Product Detail for {props.match.params.pid}</h1>
      <button onClick={() => props.history.goBack()}>Back</button>
      <button
        onClick={() =>
          props.history.push("/products/new", { name: "newname " })
        }
      >
        Add Product
      </button>
    </div>
  );
}
