import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Cover from '../../Assets/dynamo_frontpage.jpeg'

function Home(props) {
    let languageStoredInLocalStorage = localStorage.getItem('language')
    let [language, setLanguage] = useState(
        languageStoredInLocalStorage ? languageStoredInLocalStorage : 'English'
    )

    let content = {
        English: {
            title: 'Welcome to Satumaan Dynamo',
            description: 'Yhteisöllinen pyöräpaja Roihuvuoressa vuodesta 2014',
        },
        Suomi: {
            title: 'Tervetuloa Dynamoon!',
            description: 'Yhteisöllinen pyöräpaja Roihuvuoressa vuodesta 2014',
        },
    }

    props.language === 'Suomi'
        ? (content = content.Suomi)
        : (content = content.English)

    return (
        <div style={{}}>
            <Container>
                <div>
                    <h1
                        style={{
                            justifyContent: 'center',
                        }}
                    >
                        {content.title}
                    </h1>
                    <em
                        style={{
                            fontSize: 20,
                            justifyContent: 'center',
                            textAlign: 'center',
                        }}
                    >
                        {content.description}
                    </em>
                    <img
                        src={Cover}
                        style={{
                            position: 'relative',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            marginTop: 20,
                        }}
                    ></img>
                </div>
            </Container>
        </div>
    )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

export default Home
