export class TransactionModel {
    baseUrl = "http://localhost:5000/transactions";
    async getAll() {
        const res = await fetch(this.baseUrl);
        return res.json();
    }
    async add(data) {
        const res = await fetch(this.baseUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return res.json();
    }
}
//# sourceMappingURL=transactionModel.js.map