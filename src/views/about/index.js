import React, { useState } from 'react'
import { Container } from '@material-ui/core'

function About(props) {
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English')
    let content = {
        English: {
            title: 'About us',
            description: 'Translation',
            paragraph: 'Translation',
            links: 'Read about us',
        },
        Suomi: {
            title: 'Meistä',
            description:
                'Satumaan Dynamo on yhteisöllinen fillaripaja, työtila ja olohuone Roihuvuoressa. Emme ole kaupallinen pyöräkorjaamo, mutta opetamme mielellämme ihmisiä korjaamaan omia pyöriään. Autamme, neuvomme ja lainaamme työkaluja.',
            paragraph:
                'Niin kutsutulla puhtaalla puolella on työpöytiä, laajakaistayhteys ja täysmittainen keittiö sekä oleskelutilaa. Puhtaalla puolella on useat tehneet töitä koronakurimuksen etätyöaikana sekä jo ennen sitä. Työpöydät ovat pääsääntöisesti työskentelykäytössä iltapäiväkuuteen saakka.  Puhtaalla puolella on järjestetty myös tapahtumia, lautapeli-iltoja sekä muita yhteisiä oleskelutuokioita. \n\nPaja on täysmittainen polkupyöräpaja puhtaan puolen vieressä, jossa dynamolaiset sekä vierailijat voivat huoltaa pyöriään omatoimisesti. Autamme, neuvomme ja jeesaamme mielellämme! Emme korjaa pyörää puolestasi vaan homman juju on meitä paikasta A paikkaan B kuljettavien kumipyörien ymmärtäminen ja yhdessä oppiminen.',
            links: 'Meistä muualla',
        },
    }

    props.language === 'Suomi' ? (content = content.Suomi) : (content = content.English)

    return (
        <Container>
            <div>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <p>{content.paragraph}</p>
                <h2>{content.links}</h2>
                <a href="">{content.links}</a>
            </div>
        </Container>
    )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

export default About
