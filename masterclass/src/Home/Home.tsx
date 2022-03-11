import React, {FC} from 'react';
import './Home.css';
import blocks from "./blocks.json";
import modules from "./modules.json"
import App from "../App";


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
                                    Ti darà l'opportunità di diventare Designer d'interni in soli 12 mesi e con
                                    l'esclusivo
                                    vantaggio di fare tutto questo comodamente da casa tua o in qualunque luogo e ora tu
                                    voglia.
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
                                        hai tanta voglia di studiare e imparare, anche se parti da 0 e se nuovo nel
                                        settore
                                    </p>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col1"}>
                                    <div className={"image gray"}/>
                                </div>
                                <div className={"col2"}>
                                    <p>
                                        senti che è arrivato il momento di metterti finalmente in gioco e spolverare un
                                        po'
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
                                        metterti in proprio come interior designer, o se semplicemente vuoi essere in
                                        grado
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
                                        vuoi riuscire a posizionarti nel mercato nel migliore dei modi, distinguendoti
                                        dalla
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
                            <p className={"color-red grassetto"} style={{fontSize: "34px"}}>
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
                                IDM ti consentirà di <span className={"grassetto"}>imparare</span> tutto quello che si
                                cela
                                dietro ad un vero progetto di
                                Interior Design per arredare nel miglior dei modi tutti gli spazi interni fruiti
                                dall'uomo.
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
                <div className={"strutturaCorso default-block-size"}>
                    <div className={"textContainer boxWithText"}>
                        <p className={"no-margin"}>
                            COM'E' <br/>
                            STRUTTURATO <br/>
                            IL CORSO?
                        </p>
                        <div className={"btn"}>
                            <p>
                                scopri
                            </p>
                        </div>
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
                <div className={"unisciti default-block-size"}>
                    <div className={"textContainer white"}>
                        <p className={"title"}>
                            UNISCITI ALLA MASTERCLASS
                        </p>
                        <p>
                            Riserva il tuo posto all'interno della classe ora, senza impegno, per
                            non perderti l'occasione di accedervi appena apriranno le iscrizioni ufficiali!
                        </p>
                        <div className={"btn"}>
                            <p>
                                Unisciti Ora
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"immagina default-block-size"}>
                    <div className={"row1 title"}>
                        <p>
                            Immagina di svegliarti con ...
                        </p>
                        <div className={"decoration"}/>
                    </div>
                    <div className={"row2"}>
                        <div className={"col1"}>
                            <div className={"image"}/>
                            <p>
                                Tantissime nuove
                                richieste di lavoro
                            </p>
                        </div>
                        <div className={"col2"}>
                            <div className={"image"}/>
                            <p>
                                +10 K
                                nuovi clienti
                            </p>
                        </div>
                        <div className={"col3"}>
                            <div className={"image"}/>
                            <p>
                                una quantità pazzesca di visualizzazioni sul tuo profilo instagram
                            </p>
                        </div>

                    </div>
                    <div className={"row3"}>
                        <p className={"title"}>
                            TUTTO QUESTO PUO' DAVVERO ACCADERE A TE!
                        </p>
                        <p>
                            Quello di cui hai bisogno?
                        </p>
                        <div className={"container"}>
                            <div className={"image"}/>
                            <p className={"color-red grassetto"}>
                                La chiave per sbloccare quel potenziale!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"cosaOtterrai default-block-size"}>
                    <p className={"title"}>
                        COSA OTTERRAI
                    </p>
                    <p>
                        50+ VIDEOLEZIONI
                    </p>
                    <p>
                        30+ CHECKLIST
                    </p>
                    <p>12 PDF SCARICABILI </p>
                    <p>10+ FOGLI DI LAVORO </p>
                </div>
                <div className={"costo default-block-size"}>
                    <div className={"textContainer boxWithText"}>
                        <p className={"no-margin grassetto"}>
                            QUAL E' IL COSTO <br/>
                            DI <span className={"color-red"}>IDM</span>?
                        </p>
                        <div className={"btn no-margin"}>
                            <p>
                                scopri
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"investimento default-block-size"}>
                    <img src={require("../Assets/images/sfondoInvestimento.webp")} alt=""/>
                    <div className={"container"}>
                        <p className={"title"}>
                            SCEGLI IL TUO PIANO
                        </p>
                        <div className={"containerFormula"}>
                            <div className={"col1"}>
                                <div className={"titleContainer"}>
                                    <div className={"backgroundRed"}>
                                        <p className={"formulaTitle"}>
                                            UNICA <br/>
                                            SOLUZIONE
                                        </p>
                                    </div>
                                </div>
                                <p className={"grassetto color-gary"}>
                                    SOLO CORSO
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 2497
                                </p>
                                <div className={"containerBtn"}>
                                    <div className={"backgroundBtn"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                                <p className={"text"}>
                                    CORSO + <br/>
                                    VIP UPGRADE
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 2899
                                </p>
                                <div className={"containerBtn colorInverted"}>
                                    <div className={"backgroundBtn colorInverted"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col2"}>
                                <div className={"titleContainer"}>
                                    <div className={"backgroundRed"}>
                                        <p className={"formulaTitle"}>
                                            PAGA CON <br/>
                                            3 RATE
                                        </p>
                                    </div>
                                </div>
                                <p className={"grassetto color-gary"}>
                                    SOLO CORSO
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 850
                                </p>
                                <div className={"containerBtn"}>
                                    <div className={"backgroundBtn"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                                <p className={"text"}>
                                    CORSO + <br/>
                                    VIP UPGRADE
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 980
                                </p>
                                <div className={"containerBtn colorInverted"}>
                                    <div className={"backgroundBtn colorInverted"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={"col3"}>
                                <div className={"titleContainer"}>
                                    <div className={"backgroundRed"}>
                                        <p className={"formulaTitle"}>
                                            PAGA CON <br/>
                                            7 RATE
                                        </p>
                                    </div>
                                </div>
                                <p className={"grassetto color-gary"}>
                                    SOLO CORSO
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 370
                                </p>
                                <div className={"containerBtn"}>
                                    <div className={"backgroundBtn"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                                <p className={"text"}>
                                    CORSO + <br/>
                                    VIP UPGRADE
                                </p>
                                <p className={"priceOnlyCourse"}>
                                    <span className={"color-red"} style={{fontSize: "calc(1px + 2.5vw)"}}>€</span> 420
                                </p>
                                <div className={"containerBtn colorInverted"}>
                                    <div className={"backgroundBtn colorInverted"}>
                                        <p>
                                            REGISTRATI ORA
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"accessoLimitato default-block-size"}>
                    <img src={require("../Assets/images/accessoLimitato.webp")} alt=""/>
                    <div className={"container"}>
                        <p className={"title"}>
                            Accesso limitato <br/>
                            a 12 mesi
                        </p>
                        <p className={"text"}>
                            <span className={"color-red"}>IDM</span> è pensato per portare le tue <span
                            className={"grassetto"}>skills al livello successivo</span>.
                            Così come mi sono impegnata io nella creazione di un corso di Interior Design così completo,
                            ora
                            mi aspetto da te tante ore dedicate allo studio e quindi per metterti alla prova ho deciso
                            di
                            darti un <span className={"grassetto"}>tempo</span>, quello <span
                            className={"grassetto"}>sufficiente</span> per poter davvero diventare un/una designer di
                            successo!
                        </p>
                    </div>
                </div>
                <div className={"vipUpgrade default-block-size"}>
                    <img src={require("../Assets/images/vipUpgrade.webp")} alt=""/>
                    <div className={"container"}>
                        <div className={"textContainer no-margin"}>
                            <p className={"color-gary"}>
                                VIP UPGRADE
                            </p>
                            <p className={"color-light-gary"}>
                                VIP UPGRADE
                            </p>
                            <p className={"color-red"}>
                                VIP UPGRADE
                            </p>
                        </div>
                        <div className={"iconsContainer"}>
                            <div className={"col1"}>
                                <img src={require("../Assets/images/mac.webp")} alt=""/>
                                <p>
                                    Accesso<br/>
                                    esclusivo<br/>
                                    a vita
                                </p>
                            </div>
                            <div className={"col2"}>
                                <img src={require("../Assets/images/docs.webp")} alt=""/>
                                <p>
                                    Accesso<br/>
                                    ad un fantastico<br/>
                                    bonus
                                </p>
                            </div>
                            <div className={"col3"}>
                                <img src={require("../Assets/images/world.webp")} alt=""/>
                                <p>
                                    Accesso<br/>
                                    riservato alla<br/>
                                    community
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bonus default-block-size"}>
                    <img src={require("../Assets/images/sfondoBonus.webp")} alt=""/>
                    <div className={"container"}>
                        <p className={"title"}>
                            BONUS ESCLUSIVO
                        </p>
                        <p className={"subtitle"}>
                            Solo per la formula Vip-Upgrade
                        </p>
                        <img src={require("../Assets/images/bonus.webp")} alt=""/>
                        <p className={"strategia"}>
                            LA MIA STRATEGIA VINCENTE
                        </p>
                        <p className={"elenco"}>
                            <ul>
                                <li>
                                    Ti mostro <span className={"grassetto"}>come creo</span> io stessa le mie <span
                                    className={"grassetto"}>moodboard</span>
                                </li>
                                <li>
                                    Ti faccio vedere le <span className={"grassetto"}>app</span> con cui io stessa <span
                                    className={"grassetto"}>edito</span> i miei <span
                                    className={"grassetto"}>post</span>
                                </li>
                                <li>
                                    Ti aiuto nella <span className={"grassetto"}>creazione</span> di un <span
                                    className={"grassetto"}>portfolio</span> efficace ad ottenere sempre nuovi clienti
                                </li>
                                <li>
                                    Ti mostro le strategie vincenti che ti consentiranno ti <span
                                    className={"grassetto"}>aumentare</span> il tuo <span className={"grassetto"}>engagement sui social</span>
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={"ora default-block-size"}>
                    <img src={require("../Assets/images/sfondoOra.webp")} alt=""/>
                    <div className={"container"}>
                        <div className={"titleContainer text-center"}>
                            <p className={"title"}>
                                ORA TOCCA A TE SCEGLIERE
                            </p>
                            <p className={"description"}>
                                Se vuoi iniziare questo bellissimo percorso insieme a me perché credi fortemente nella
                                tua
                                passione è finalmente giunto il momento di far parte della classe!
                            </p>
                            <p className={"btn"}>
                                Voglio iscrivermi ora!
                            </p>
                        </div>
                        <img className={"ipad"} src={require("../Assets/images/ipad.webp")} alt=""/>
                        <p className={"text-center info"}>
                            Se, in questo momento, l'indecisione risiede in te allora scopri maggiori informazioni sulla
                            Masterclass!
                        </p>
                        <p className={"infoBtn text-center"}>
                            Voglio iscrivermi ora!
                        </p>
                    </div>
                </div>
                <div className={"faq default-block-size"}/>
            </>
        );
    }
}

export default Home;
