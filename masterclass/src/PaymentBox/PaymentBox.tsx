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
                        <a href={value.link} target={"_blank"}>
                            <div className={"paymentBox"}>
                                <div className={"container"}>
                                    <div className={"title"}>
                                        <p> {value.title} </p>
                                    </div>
                                    <div className={"price-box"}>
                                        <div className={"price"}>
                                            <p><span className={"color-red"}>€ </span> {value.price}</p>
                                        </div>
                                        <div className={"separator"}/>
                                        {value.btnText ? <JoinButton text={value.btnText}/> : null}
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))
                }

            </div>
        </>);
    }
}

export default PaymentBox;
