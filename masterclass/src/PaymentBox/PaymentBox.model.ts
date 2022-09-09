export default class PaymentBoxModel {
    installments: {
        title: any;
        price: number;
        link?:string;
        btnText?: string;
        btnLink?: string;
    }[] = [];
}
