export interface Expense{
    id?: number;
    expenseId?: string;
    name: string;
    note: string;
    amount: number;
    date: Date | string;
    category: string;
}