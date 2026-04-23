export class TransactionView {
    listEl = document.getElementById("list");
    balanceEl = document.getElementById("balance");
    render(transactions) {
        this.listEl.innerHTML = "";
        transactions.forEach((t) => {
            const li = document.createElement("li");
            li.textContent = `${t.description} - ₱${t.amount} (${t.type})`;
            this.listEl.appendChild(li);
        });
    }
    renderBalance(transactions) {
        const balance = transactions.reduce((acc, t) => {
            return t.type === "income"
                ? acc + Number(t.amount)
                : acc - Number(t.amount);
        }, 0);
        this.balanceEl.textContent = `Balance: ₱${balance}`;
    }
}
//# sourceMappingURL=transactionView.js.map