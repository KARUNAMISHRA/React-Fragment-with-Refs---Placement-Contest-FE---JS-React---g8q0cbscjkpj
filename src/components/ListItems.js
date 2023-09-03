 import React from "react";

const ListItems = (props) => {
  return <li className={props.valuex===1?"items":""}>List element number {props.valuex}</li>;
};
export default ListItems;
