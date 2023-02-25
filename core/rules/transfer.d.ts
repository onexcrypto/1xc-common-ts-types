import { UserRule } from "./types";
export declare class TransferConstraints {
    rules: UserRule[];
    constructor(rules: UserRule[] | undefined);
    canTransfer(): {
        rule: import("./types").IRuleCardScan | import("./types").IRuleCardEmit | import("./types").IRuleExchange | import("./types").IRuleTransfer | import("./types").IRuleUser | undefined;
        isAllowed: boolean;
        isDenied: boolean;
    };
}
