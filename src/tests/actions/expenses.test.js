import { addExpense, removeExpense, editExpense } from '../../actions/expenses';


test('should setup removeExpense action object',()=>{
    const result = removeExpense({id : '123dc'});
    expect(result).toEqual(
        {
            type: 'REMOVE_EXPENSE',
            id : '123dc'
        }
    );
});

test('should setup editExpense action object',()=>{
const result = editExpense('12345abc', {note :'new note value'});
expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id  : '12345abc',
        updates :{
            note :'new note value'
        }
});
});
