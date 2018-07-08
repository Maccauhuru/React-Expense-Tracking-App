import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({dispatch , id ,description , amount , createdAt}) => {
  return (
    <div>
      <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
      <p>Amount :{amount} - Created :{createdAt}</p>
      <button  onClick={()=>dispatch(removeExpense({id}))}>REMOVE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect()(ExpenseListItem);