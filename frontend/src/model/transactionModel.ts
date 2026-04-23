export interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: "income" | "expense";
}

export class TransactionModel {
  private baseUrl = "http://localhost:5000/transactions";

  async getAll(): Promise<Transaction[]> {
    const res = await fetch(this.baseUrl);
    return res.json();
  }

  async add(data: Omit<Transaction, "id">) {
    const res = await fetch(this.baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return res.json();
  }
}
