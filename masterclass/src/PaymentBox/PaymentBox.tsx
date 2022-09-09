import React, {FC} from 'react';
import './PaymentBox.css';
import PaymentBoxModel from "./PaymentBox.model";
import JoinButton from "../JoinButton/JoinButton";

interface PaymentBoxProps {
    paymentBox: PaymentBoxModel;
}

class PaymentBox extends React.Component<PaymentBoxProps> {

    render() {
        return (<>
            <div className={"paymentBox-container"}>

                {
                    this.props.paymentBox.installments.map(value => (
                        <div className={"paymentBox"}>
                            <div className={"container"}>
                                <div className={"title"}>
                                    <p> {value.title} </p>
                                </div>
                                <div className={"price-box"}>
                                    <div className={"price"}>
                                        <p> {value.price} </p>
                                    </div>
                                    <div className={"separator"}/>
                                    {value.btnText ? <JoinButton text={value.btnText}/> : null}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>);
    }
}

export default PaymentBox;
