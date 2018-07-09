import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({dispatch , id ,description , amount , createdAt}) => {
  return (
    <div>
      <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
      <p>Amount :{amount} - Created :{createdAt}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default (ExpenseListItem);