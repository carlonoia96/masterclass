import React, { FC } from 'react';
import './JoinButton.css';

interface JoinButtonProps {
    text:string;
    link?:string;
    hideOnMobile?:boolean
    hideOnDesktop?:boolean
}

class JoinButton extends React.Component<JoinButtonProps> {
    render() {
        return (<>
            <div className={`btn text-align-center ${this.props.hideOnMobile?'hide-on-mobile':''} ${this.props.hideOnDesktop?'hide-on-desktop':''} `}>
                <a href={this.props.link} {...this.props.link ? { target :"_blank" }:{}} className={`${!this.props.link?'no-hover-effect':''}`}>
                    <p className={"white bk-red"}>{this.props.text}</p>
                </a>
            </div>
        </>);
    }
}

export default JoinButton;
