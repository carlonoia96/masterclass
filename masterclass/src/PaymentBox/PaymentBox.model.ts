export default class PaymentBoxModel {
    installments: {
        title: any;
        price: number;
        btnText?: string;
        btnLink?: string;
    }[] = [];
}
