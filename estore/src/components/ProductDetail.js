import React from "react";

export default function ProductDetail(props) {
  // let {
  //   match: {
  //     params: { pid }
  //   }
  // } = props;
  return (
    <div>
      <h1>Product Detail for {props.match.params.pid}</h1>
    </div>
  );
}
