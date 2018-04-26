import React from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return <div>Lets EDIT some expenses for : {props.match.params.id}</div>;
}

export default EditExpensePage;