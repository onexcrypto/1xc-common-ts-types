import { Indexable, Insertable, Money } from "./common";
export interface GeneratedCard {
    id: string;
    serial: string;
    read: string;
    write: string;
    type: string;
    currency: string;
    generatedAt: number;
    boundWallet: {
        id: string;
        balance: Money;
    };
    name: string;
    color: string;
    website: string;
    address: string;
    phone: string;
    email: string;
    notice: string;
}
export interface ICardGenerationRequest extends Indexable, Insertable {
    userId: string;
    paymentId: string;
    cards: GeneratedCard[];
}
