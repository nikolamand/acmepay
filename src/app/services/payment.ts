export interface PaymentMethod {
    id?: number | null;
    name: string;
    amount: number;
    methods: Array<string>;
    currency: string;
}