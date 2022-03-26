import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Cover from '../../Assets/dynamo_frontpage.jpeg'

function Home(props) {
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English')

    let content = {
        English: {
            title: 'Welcome to Satumaan Dynamo',
        },
        Suomi: {
            title: 'Tervetuloa Dynamoon!',
        },
    }

    props.language === 'Suomi' ? (content = content.Suomi) : (content = content.English)

    return (
        <Container>
            <div>
                <h1 style={{ justifyContent: 'center', textAlign: 'center' }}>{content.title}</h1>
                <br />
                <img src={Cover} style={{ position: 'relative', maxWidth: '100%', maxHeight: '100%' }}></img>
            </div>
        </Container>
    )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

export default Home
