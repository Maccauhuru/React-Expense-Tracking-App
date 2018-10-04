export default (expenses) => {
    const reduced = expenses.map((expense) => expense.amount).reduce((a, b) => a + b, 0);
    return expenses.length === 0 ? 0 : reduced
}
