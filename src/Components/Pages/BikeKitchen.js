import React, { useState } from 'react'
import { Container } from '@material-ui/core'

function BikeKitchen(props) {
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English')
    let content = {
        Suomi: {
            title: 'Meistä',
            description:
                'Satumaan Dynamo on yhteisöllinen fillaripaja, työtila ja olohuone Roihuvuoressa. Emme ole kaupallinen pyöräkorjaamo, mutta opetamme mielellämme ihmisiä korjaamaan omia pyöriään. Autamme, neuvomme ja lainaamme työkaluja.',
            paragraph:
                'Niin kutsutulla puhtaalla puolella on työpöytiä, laajakaistayhteys ja täysmittainen keittiö sekä oleskelutilaa. Puhtaalla puolella on useat tehneet töitä koronakurimuksen etätyöaikana sekä jo ennen sitä. Työpöydät ovat pääsääntöisesti työskentelykäytössä iltapäiväkuuteen saakka.  Puhtaalla puolella on järjestetty myös tapahtumia, lautapeli-iltoja sekä muita yhteisiä oleskelutuokioita. \n\nPaja on täysmittainen polkupyöräpaja puhtaan puolen vieressä, jossa dynamolaiset sekä vierailijat voivat huoltaa pyöriään omatoimisesti. Autamme, neuvomme ja jeesaamme mielellämme! Emme korjaa pyörää puolestasi vaan homman juju on meitä paikasta A paikkaan B kuljettavien kumipyörien ymmärtäminen ja yhdessä oppiminen.',
        },
        English: {
            title: 'BikeKitchen us',
            description: 'Translation',
            paragraph: 'Translation',
        },
    }

    props.language === 'Suomi' ? (content = content.Suomi) : (content = content.English)

    return (
        <Container>
            <div>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                <p>{content.paragraph}</p>
            </div>
        </Container>
    )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

export default BikeKitchen
