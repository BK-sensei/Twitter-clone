import React, { useContext } from 'react'
import { ModalContext } from '../Context/ModalContext'

import '../Styles/Home.css'
import ModalComponent from '../Components/ModalComponent';

const Home = () => {

    const { setModalType, visible, setVisible } = useContext(ModalContext)

    const handleModal = (modalType) => {
        setModalType(modalType)
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <div className="row">
            <div className="col-6"
                style={{ backgroundImage: `url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png")`}}
            >
                <div className="left-part">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="white" 
                        className="bi bi-twitter white-logo" 
                        viewBox="0 0 16 16"
                    >
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                    </svg>
                </div>
                {/* <div 
                    className="home" 
                    style={{ backgroundImage: `url("https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png")`}}
                ></div> */}
            </div>

            <div className="col-6 right-part d-flex flex-column align-self-center">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="#1C9CEF" 
                    className="bi bi-twitter blue-logo" 
                    viewBox="0 0 16 16"
                >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
                <h1>Ça se passe maintenant</h1>
                <h2>Rejoignez Twitter dès aujourd'hui.</h2>
                <button 
                    type="button" 
                    className="btn rounded-pill signup" 
                    onClick={() => handleModal("signup")}
                >
                    S'inscire avec un e-mail
                </button>
                <p>En vous inscrivant, vous acceptez les <span className="blue">Conditions d'Utilisation</span> et la <span className="blue">Politique de Confidentialité</span>, incluant l'<span className="blue">Utilisation de Cookies</span>.</p>
                <div className="connexion">
                    <h3>Vous avez déjà un compte ?</h3>
                    <button 
                        type="button" 
                        className="btn rounded-pill login" 
                        onClick={() => handleModal("login")}
                    >
                        Se connecter
                    </button>
                    <ModalComponent />
                </div>

            </div>

            <footer>
                <a href="https://about.twitter.com/en">À propos</a>
                <a href="https://help.twitter.com/fr">Centre d'assistance</a>
                <a href="https://twitter.com/fr/tos">Conditions d’utilisation</a>
                <a href="https://twitter.com/fr/privacy">Politique de Confidentialité</a>
                <a href="https://help.twitter.com/fr/rules-and-policies/twitter-cookies">Politique relative aux cookies</a>
                <a href="https://help.twitter.com/fr/resources/accessibility">Accessibilité</a>
                <a href="https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=adsinfo">Informations sur les publicités</a>
                <a href="https://blog.twitter.com/">Blog</a>
                <a href="https://status.twitterstat.us/">Statut</a>
                <a href="https://careers.twitter.com/">Carrières</a>
                <a href="https://about.twitter.com/en/who-we-are/brand-toolkit">Ressources de la marque</a>
                <a href="https://ads.twitter.com/login?ref=gl-tw-tw-twitter-advertise">Publicité</a>
                <a href="https://marketing.twitter.com/fr">Marketing</a>
                <a href="https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&utm_source=twc&utm_medium=web&utm_campaign=ao&utm_content=twitterforbusiness">Twitter pour les professionnels</a>
                <a href="https://developer.twitter.com/en">Développeurs</a>
                <a href="https://twitter.com/i/directory/profiles">Répertoire</a>
                <a href="https://twitter.com/settings/account/personalization">Paramètres</a>
                <a href="https://twitter.com/">© 2022 Twitter, Inc.</a>
            </footer>
        </div>
    );
};

export default Home;