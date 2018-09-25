import React from 'react';
import expenses from '../tests/fixtures/expenses';

expenses.map(items => items.amount).reduce((acc, curr) => {
    return acc + curr;
});


