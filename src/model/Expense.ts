export interface Expense{
    id?: number;
    expenseId?: string;
    name: string;
    note: string;
    amount: string;
    date: Date | string;
    category: string;
}