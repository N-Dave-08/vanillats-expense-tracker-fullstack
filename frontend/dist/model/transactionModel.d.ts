export interface Transaction {
    id: number;
    description: string;
    amount: number;
    type: "income" | "expense";
}
export declare class TransactionModel {
    private baseUrl;
    getAll(): Promise<Transaction[]>;
    add(data: Omit<Transaction, "id">): Promise<any>;
}
//# sourceMappingURL=transactionModel.d.ts.map