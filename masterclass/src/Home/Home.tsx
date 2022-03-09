import React, {FC} from 'react';
import './Home.css';
import blocks from "./blocks.json";
import modules from "./modules.json"


interface HomeProps {
    blocks: any,
    modules: any
}

class Home extends React.Component<{}, HomeProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            blocks: blocks,
            modules: modules
        }
    }

    clickBlock(block: any) {
        if (!block.open) {
            block.open = true;
        } else {
            block.open = false;
        }
        this.setState({});
    }

    blockStyle(block: any) {
        if (block.open) {
            return {fontSize: "18px"}
        } else {
            return {fontSize: "32px"}
        }
    }

    showBlockText(block: any) {
        if (block.open) {
            return block.description
        } else {
            return block.title
        }
    }

    checkBackgroundImage(module: any) {
        if (module.scuro) {
            return "image scura";
        } else {
            return "image"
        }

    }

    render() {
        return (<>
            <div className={"first-viewed default-block-size"}>
                <div className={"textContainer text-center no-margin"}>
                    <p className={"title"}><span className={"color-red"}>I</span>nterior <span
                        className={"color-red"}>D</span>esign</p>
                    <p className={"title"} style={{marginTop: "60px"}}>
                        <span className={"color-red"}>M</span>asterclass
                        <div className={"image"}/>
                    </p>
                </div>
            </div>
            <div className={"slide2 default-block-size"}>
                <p className={"title color-red"}>
                    IDM
                </p>
                <div className={"container"}>
                    <div className={"col1"}>
                        <div className={"textContainer"}>
                            <p>
                                Ti darà l'opportunità di diventare Designer d'interni in soli 12 mesi e con l'esclusivo
                                vantaggio di fare tutto questo comodamente da casa tua o in qualunque luogo e ora tu voglia.
                            </p>
                        </div>
                    </div>
                    <div className={"col2"}>
                        <div className={"image"}/>
                    </div>
                </div>
            </div>
            <div className={"check default-block-size"}>
                <p className={"title"}>IDM è PERFETTA se...</p>
                <div className={"textContainer"}>
                    <div className={"rowsContainer"}>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <div className={"image red"}/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    hai tanta voglia di studiare e imparare, anche se parti da 0 e se nuovo nel settore
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <div className={"image gray"}/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    senti che è arrivato il momento di metterti finalmente in gioco e spolverare un po'
                                    delle tue vecchie conoscenze per restare sempre al passo con gli ultimi
                                    aggiornamenti
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <div className={"image red"}/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    vuoi investire nel tuo futuro e nella tua passione. Hai cercato per anni
                                    un'università o una scuola per diventare interior designer ma non l'hai ancora
                                    trovata
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <div className={"image gray"}/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    vuoi diventare un arredatore d'interni presso studi di progettazione, o vuoi
                                    metterti in proprio come interior designer, o se semplicemente vuoi essere in grado
                                    di progettare da solo il design di casa tua
                                </p>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"col1"}>
                                <div className={"image red"}/>
                            </div>
                            <div className={"col2"}>
                                <p>
                                    vuoi riuscire a posizionarti nel mercato nel migliore dei modi, distinguendoti dalla
                                    concorrenza e attraendo sempre più clienti attraverso la giusta strategia
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"idm default-block-size"}>
                <div className={"container"}>
                    <div className={"textContainer text-center"}>
                        <p className={"color-red grassetto"} style={{fontSize:"34px"}}>
                            IDM
                        </p>
                        <p>
                            E' un <span className={"grassetto"}>corso online</span> nel quale ho raccolto tutta la
                            mia<br/>
                            <span className={"color-red"}>formazione</span>, <span
                            className={"color-red"}>esperienza</span> e <span
                            className={"color-red"}>professionalità</span>.
                        </p>
                        <p>
                            IDM ti consentirà di <span className={"grassetto"}>imparare</span> tutto quello che si cela
                            dietro ad un vero progetto di
                            Interior Design per arredare nel miglior dei modi tutti gli spazi interni fruiti dall'uomo.
                        </p>
                        <p>
                            Cosa aspetti <span
                            className={"color-red grassetto"}>entra a far parte della classe ora!</span>
                        </p>
                    </div>
                    <div className={"btn no-margin"}>
                        <p className={"white grassetto"}>
                            ISCRIVITI
                        </p>
                    </div>
                </div>
            </div>

            <div className={"faPerTe default-block-size"}>
                <p className={"title"}>
                    FA PER TE SE SEI (O ASPIRI A DIVENTARE):
                </p>
                <div className={"container"}>

                    {this.state.blocks.map((block: any) => (
                        <div className={"block"} onMouseEnter={() => this.clickBlock(block)}
                             onMouseLeave={() => this.clickBlock(block)}>
                            <p className={"text"} style={this.blockStyle(block)}>
                                {this.showBlockText(block)}
                            </p>
                            {/*<div className={"image"}/>*/}
                        </div>
                    ))}

                </div>
            </div>

            <div className={"moduli default-block-size"}>
                <p className={"title no-margin"}>
                    12 MODULI
                </p>
                <div className={"container"}>
                    {this.state.modules.map((module: any) => (
                        <div className={"block"}>
                            <div className={this.checkBackgroundImage(module)}>
                                <p>{module.number}</p>
                            </div>
                            <p className={"text"}>
                                {module.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>);
    }
}

export default Home;
