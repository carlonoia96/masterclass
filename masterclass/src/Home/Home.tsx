import React, {FC, Fragment} from 'react';
import './Home.css';
import blocks from "./blocks.json";
import modules from "./modules.json"
import App from "../App";
import Postcard from "../Postcard/Postcard";
import Button from "../Button/Button";


interface HomeProps {
    blocks: any,
    modules: any,
    statusFaq?: any
}

class Home extends React.Component<{}, HomeProps> {

    constructor(props: any) {
        super(props);
        this.state = {
            blocks: blocks,
            modules: modules,
            statusFaq: []
        }
    }

    clickBlock(block: any) {
        if (!block.open) {
            block.open = true;
        } else {
            block.open = false;
        }
        this.setState({
            blocks
        });
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

    faqEvent(event: any) {
        if (!this.state.statusFaq[event]) {
            for (const key in this.state.statusFaq) {
                this.state.statusFaq[key] = false;
            }
            this.state.statusFaq[event] = true;
        } else {
            this.state.statusFaq[event] = false;
        }

        this.setState({
            statusFaq: this.state.statusFaq
        })
    }

    isOpen(index: any, icon?: boolean) {
        if (icon) {
            if (!this.state.statusFaq[index]) {
                return {height: "calc(1px + 1.8vw)"}
            } else {
                return {height: "auto"}
            }
        } else {
            if (!this.state.statusFaq[index]) {
                return {color: "white"}
            } else {
                return {color: "#ff1616"}
            }
        }

    }

    isIconOpen(index: any) {
        if (!this.state.statusFaq[index]) {
            return ""
        } else {
            return "rotate-right background-white"
        }
    }

    render() {
        return (<>
                <div className={"first-viewed default-block-size"}>
                    <div className={"textContainer text-center no-margin hide-not-mobile"}>
                        <p className={"title"}><span className={"color-red"}>I</span>nterior <span
                            className={"color-red"}>D</span>esign</p>
                        <p className={"title"} style={{marginTop: "60px"}}>
                            <span className={"color-red"}>M</span>asterclass
                            <div className={"image"}/>
                        </p>
                    </div>
                    <div className={"textContainer text-center hide-not-desktop"}>
                        <p className={"subtitle"}>
                            Ti presento
                        </p>
                        <p className={"title no-margin"}>
                            IDM
                        </p>
                    </div>
                    <div className={"image-home hide-not-desktop"}/>
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
                                        hai tanta voglia di studiare e imparare, anche se parti da 0 e sei nuovo nel
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
                        <Postcard
                            classID={"postcard-1"}
                            hoverEffect={true}
                            title={"IDM"}
                            text={
                                <Fragment>
                                    <p>
                                        E' un <span className={"grassetto"}>corso online</span> nel quale ho raccolto
                                        tutta la
                                        mia<br/>
                                        <span className={"color-red"}>formazione</span>, <span
                                        className={"color-red"}>esperienza</span> e <span
                                        className={"color-red"}>professionalità</span>.
                                    </p>
                                    <p>
                                        IDM ti consentirà di <span className={"grassetto"}>imparare</span> tutto quello
                                        che si
                                        cela
                                        dietro ad un vero progetto di
                                        Interior Design per arredare nel miglior dei modi tutti gli spazi interni fruiti
                                        dall'uomo.
                                    </p>
                                    <p>
                                        Cosa aspetti? <br/>  <span
                                        className={"color-red grassetto"}>Entra a far parte della classe ora!</span>
                                    </p>
                                    <Button text={"ISCRIVITI"}/>
                                </Fragment>
                            }
                            image={false
                            }
                        />
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
                        <Button text={"Scopri!"} />
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
                            <span className={"grassetto"}>Riserva</span> il tuo posto all'interno della classe
                            ora, <span className={"grassetto"}>senza impegno</span>, per
                            non perderti l'occasione di accedervi appena apriranno le iscrizioni ufficiali!<br/>Ci sono
                            SOLO 10 posti disponibili!
                        </p>
                        <Button text={"Unisciti ora!"} />
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
                    <p>20+ FOGLI DI LAVORO </p>
                </div>
                <div className={"costo default-block-size"}>
                    <div className={"textContainer boxWithText"}>
                        <p className={"no-margin grassetto"}>
                            QUAL E' IL COSTO <br/>
                            DI <span className={"color-red"}>IDM</span>?
                        </p>
                        <Button text={"Scopri!"} />
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
                            <Button text={"Voglio iscrivermi ora!"} />
                        </div>
                        <img className={"ipad"} src={require("../Assets/images/ipad.webp")} alt=""/>
                        <p className={"text-center info"}>
                            Se, in questo momento, l'indecisione risiede in te allora scopri maggiori informazioni sulla
                            Masterclass!
                        </p>
                        <Button text={"Voglio iscrivermi ora!"} />
                    </div>
                </div>
                <div className={"faq default-block-size only-desktop"}>
                    <img src={require("../Assets/images/sfondoFaq.webp")} alt=""/>
                </div>

                <div className={"faqs"}>
                    <img src={require("../Assets/images/faqTop.webp")} alt=""/>
                    <div className={"container"}>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(0)}
                             style={this.isOpen(0, true)}>
                            <p className={"title"} style={this.isOpen(0)}>
                                Qual è l'obiettivo del corso?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(0)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    L'obiettivo del corso è preparare una figura professionale e preparata a tutto tondo
                                    all'interno del design d'interni.
                                    Tale figura deve essere in primo luogo capace di comprendere le reali necessità del
                                    suo
                                    committente e sulla base di queste deve creare un progetto efficace, attraverso vari
                                    fattori.
                                    Tra questi vi sono la conoscenza di stili e tendenze, il corretto utilizzo di
                                    materiali
                                    e texture, la scelta dei prodotti d'arredo adeguati alle diverse esigenze e
                                    funzioni.
                                    Inoltre, vi è la capacità di progettare gli spazi in modo funzionale e di saperli
                                    rappresentare sia tramite il disegno manuale che digitale. Per non parlare
                                    dell'importanza che ricopre l'illuminazione.
                                    Il corso si prefigge come obiettivo quello di fornire tutti gli strumenti necessari
                                    alla
                                    realizzazione di un ottimo progetto di interni e di alimentare sempre la curiosità e
                                    la
                                    creatività dei suoi studenti.
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(1)}
                             style={this.isOpen(1, true)}>
                            <p className={"title"} style={this.isOpen(1)}>
                                A chi è rivolta la Masterclass?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(1)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    La Masterclass si rivolge a:
                                    <ul>
                                        <li>
                                            figure già esperte del settore d'interni che vogliono rimanere sempre in
                                            costante aggiornamento o che vogliono affinare le loro conoscenze;
                                        </li>
                                        <li>
                                            architetti che hanno il desiderio di poter soddisfare i propri clienti
                                            offrendo
                                            anche il servizio di progettazione degli spazi interni;
                                        </li>
                                        <li>
                                            aspiranti interior designer che vogliono fare della propria passione la
                                            propria
                                            professione;
                                        </li>
                                        <li>
                                            home lovers che desiderano compiere scelte stilistiche corrette nelle
                                            proprie
                                            abitazioni o che vogliono gestire gli arredi di casa autonomamente;
                                        </li>
                                        <li>
                                            agenti immobiliari o persone che vogliono lavorare a contatto con queste
                                            figure,
                                            con l'obiettivo finale di saper vendere/affittare in meno tempo possibile un
                                            immobile, grazie alla scelta consapevole da parte del cliente di come
                                            potrebbero
                                            essere suddivisi e progettati gli spazi interni
                                        </li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(2)}
                             style={this.isOpen(2, true)}>
                            <p className={"title"} style={this.isOpen(2)}>
                                Quanto tempo mi ci vorrà per completare il corso?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(2)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    IDM prevede una durata di 12 mesi, esattamente un mese per ciascun modulo di cui si
                                    compone.
                                    Solo per coloro che sceglieranno l'opzione vip-upgrade il corso sarà usufruibile
                                    senza
                                    limite di accesso.
                                    I 12 mesi messi a disposizione sono più che sufficienti per dimostrare di partire
                                    con lo
                                    spirito giusto, ossia quello di avere la grinta e la voglia di applicarsi tante ore
                                    quotidianamente nello studio di un mestiere sempre più richiesto e in continua
                                    evoluzione.
                                    In questi mesi avrai l'opportunità di dedicarti al 100% al suo interno, scaricare
                                    tutti
                                    i file pdf messi a disposizione per poter apprendere più in fretta e soprattutto per
                                    segnare gli appunti necessari ad un ripasso di argomenti nel corso degli anni.
                                    Se al contrario, pensi di non riuscire a dedicare qualche ora del tuo tempo
                                    quotidianamente il consiglio è di fare l'accesso vip.
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(3)}
                             style={this.isOpen(3, true)}>
                            <p className={"title"} style={this.isOpen(3)}>
                                Com'è strutturato?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(3)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    IDM si sviluppa in 12 moduli, pensati per accrescere le tue competenze uno ogni
                                    mese.
                                    All'interno di ciascun modulo troverai raggruppati gli argomenti per classi.
                                    Potrai accedere alla lezione successiva solo una volta aver completato quella
                                    corrente.
                                    La masterclass è strutturata come video lezione e potrà essere seguita ogni volta
                                    che
                                    vuoi e all'ora che preferisci, ciò che ti serve è una connessione a internet.
                                    I vantaggi di seguire un corso in questa modalità sono molteplici e la cosa migliore
                                    è
                                    che non resterai mai indietro con le lezioni.
                                    La tempistica scelta serve a me per comprendere i tuoi progressi e il modo in cui ti
                                    andrai ad applicare.
                                    Oltre alle videolezioni troverai anche altro materiale come pdf scaricabili e
                                    stampabili
                                    che resteranno sempre con te, delle cheklist studiate per fissare le tue competenze,
                                    fogli di lavoro per appunti o esercizi e tanto altro ancora a livello interattivo in
                                    ciascuna lezione.
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(4)}
                             style={this.isOpen(4, true)}>
                            <p className={"title"} style={this.isOpen(4)}>
                                Cosa trovo dentro alla Masterclass?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(4)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    Al suo interno troverai tantissimi contenuti interattivi come video, quiz, domande a
                                    risposta multipla, box con spazi vuoti da compilare e molto altro.
                                    Non è un corso qualsiasi che puoi trovare ovunque, anzi, ho racchiuso in maniera
                                    intuitiva e divertente tutta la mia formazione, il mio percorso, i miei progetti e
                                    ho
                                    fatto in modo che anche tu potessi ricevere la mia stessa preparazione.

                                    Oltre a lezioni teoriche saranno presenti anche degli esercizi da svolgere.

                                    IDM è davvero la base del tuo successo ma per raggiungerlo dovrai impegnarti tanto!
                                    Se ami ciò che fai ti riuscirà senza alcuno sforzo!
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(5)}
                             style={this.isOpen(5, true)}>
                            <p className={"title"} style={this.isOpen(5)}>
                                Esiste un piano di pagamento?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(5)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    Certo che sì!
                                    Potrai acquistare IDM in tre modalità: in un'unica soluzione o in più soluzioni
                                    tramite
                                    la scelta di tre o sette rate.

                                    Ho deciso di offrire a chiunque la possibilità di accedervi con la modalità più
                                    consona
                                    alle proprie necessità.

                                    IDM manterrà sempre lo stesso costo ma darò il privilegio ai primi che si
                                    iscriveranno
                                    quando apriranno le iscrizioni un vantaggio di costo, con un'offerta che non si
                                    ripeterà
                                    più!
                                </p>
                            </div>
                        </div>
                        <div className={"block no-margin"} onClick={() => this.faqEvent(6)}
                             style={this.isOpen(6, true)}>
                            <p className={"title"} style={this.isOpen(6)}>
                                Se mi iscrivo c'è un supporto?
                                <i className={`faqs-icon icon-crea ${this.isIconOpen(6)}`}/>
                            </p>
                            <div className={"descriptionContainer"}>
                                <p className={"description"}>
                                    A tutti gli iscritti c'è la possibilità di fare domande ogni volta che sarà
                                    necessario e
                                    proprio per facilitare questo passaggio ho creato un format apposito che ti
                                    consentirà
                                    ogni volta che completerai un modulo di inserire le tue perplessità. Sono ben
                                    accette
                                    riflessioni, pareri e suggerimenti perché l'obiettivo è spingere IDM sempre al
                                    massimo
                                    per aiutare quante più persone possibili a concretizzare i propri sogni.

                                    Sarà attivo un canale Telegram per gli utenti Vip-upgrade e uno Whatsapp per tutti
                                    gli
                                    altri.

                                    Inoltre, avrai modo di conoscermi meglio tramite la mia pagina Instagram e il mio
                                    canale
                                    YouTube.

                                    Cosa stai aspettando? Se hai dei dubbi approfittane subito!
                                </p>
                            </div>
                        </div>
                    </div>
                    <img src={require("../Assets/images/faqBottom.webp")} alt=""/>
                </div>
            </>
        );
    }
}

export default Home;
