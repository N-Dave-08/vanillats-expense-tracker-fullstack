import { TransactionModel } from "../model/transactionModel.js";
import { TransactionView } from "../view/transactionView.js";
export declare class TransactionController {
    private model;
    private view;
    constructor(model: TransactionModel, view: TransactionView);
    init(): Promise<void>;
    load(): Promise<void>;
}
//# sourceMappingURL=transactionController.d.ts.map