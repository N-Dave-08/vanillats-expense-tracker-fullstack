import { TransactionModel } from "../model/transactionModel.js";
import { TransactionView } from "../view/transactionView.js";

export class TransactionController {
  constructor(
    private model: TransactionModel,
    private view: TransactionView,
  ) {
    this.init();
  }

  async init() {
    const form = document.getElementById("form") as HTMLFormElement;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const desc = (document.getElementById("desc") as HTMLInputElement).value;
      const amount = (document.getElementById("amount") as HTMLInputElement)
        .value;
      const type = (document.getElementById("type") as HTMLSelectElement).value;

      await this.model.add({
        description: desc,
        amount: Number(amount),
        type: type as any,
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
