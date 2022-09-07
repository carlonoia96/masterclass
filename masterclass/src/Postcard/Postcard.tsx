import React, {FC} from 'react';
import './Postcard.css';

interface PostcardProps {
    classID: string;
    link?: string;
    hoverEffect: boolean;
    title?: string;
    text: any;
    image: boolean;
}

function printContent(props: any) {
    if (props.title) {
        return (<>
            <p className={"text-align-center"}>
                <span className={"bold postCard-title"}>{props.title}</span>
                <br/>
                <br/>
                {props.text}
            </p>
        </>)
    } else {
        return (<>
            {props.text}
        </>)
    }
}

function printImag(props: any) {
    if (props.image) {
        return (
            <div className={"container bk-red"}>
                <div className={"img"}/>
            </div>
        )
    }
}

class Postcard extends React.Component<PostcardProps> {
    render() {
        return (<>
            <div className={`postCard-container ${this.props.classID}`}>
                <a
                    href={this.props.link}
                    {...this.props.link ? {target: "_blank"} : {}}
                    className={`${!this.props.hoverEffect ? 'no-hover-effect' : ''} ${this.props.link ? 'cursor-pointer' : ''}`}
                >
                    <div className={`postCard bk-white`}>
                        {printImag(this.props)}
                        {printContent(this.props)}
                    </div>
                </a>
            </div>
        </>);
    }
}

export default Postcard;
