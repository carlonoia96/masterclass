import React, {FC} from 'react';
import './Home.css';

interface HomeProps {
    setCurrentRoute: (menu: string) => void;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (<>
            <div className={"first-viewed default-block-size"}>
                <div className={"textContainer text-center grassetto no-margin"}>
                    <p className={"title"}>INTERIOR<br/> DESIGN</p>
                    <p className={"title red"} style={{marginTop: "60px"}}>MASTERCLASS</p>
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
                        <p className={"color-red grassetto"}>
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
            <div className={"faPerTe"}>
                <p className={"title default-block-size"}>
                    FA PER TE SE SEI (O ASPIRI A DIVENTARE):
                </p>
                <div className={"container"}>
                    <div className={"block"}>
                        <p>
                            INTERIOR<br/>
                            DESIGNER
                        </p>
                        <div className={"image"}/>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default Home;
