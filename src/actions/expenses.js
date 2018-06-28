import uuid from 'uuid';




{ /*CREATE ACTION GENERATORS*/ }

//ADD_EXPENSE
 export const addExpense = ({
    description = '',
    notes = '',
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        notes,
        amount,
        createdAt
    }
})

//REMOVE_EXPENSE
export const removeExpense = ({
    id
} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});




