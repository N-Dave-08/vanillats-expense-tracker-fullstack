export class TransactionController {
    model;
    view;
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }
    async init() {
        const form = document.getElementById("form");
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const desc = document.getElementById("desc").value;
            const amount = document.getElementById("amount")
                .value;
            const type = document.getElementById("type").value;
            await this.model.add({
                description: desc,
                amount: Number(amount),
                type: type,
            });
            this.load();
            form.reset();
        });
        this.load();
    }
    async load() {
        const data = await this.model.getAll();
        this.view.render(data);
        this.view.renderBalance(data);
    }
}
//# sourceMappingURL=transactionController.js.map