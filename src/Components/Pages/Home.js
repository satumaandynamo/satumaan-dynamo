import React, { useState } from 'react'
import {
    Container,
    Typography,
    CardContent,
    CardActionArea,
    CardActions,
    CardMedia,
    Grid,
    Box,
    Link,
    Paper,
    Button,
    Card,
} from '@material-ui/core'
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

    const card = (
        <React.Fragment>
            <Card sx={{ maxWidth: 200, display: 'inline-block' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/300"
                    alt="dynamo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lahjoita pyörä!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lojuuko nurkissasi tai varastossa hylätty, käyttämätön
                        pyörä? Tuo se meille niin fiksaamme sen!
                    </Typography>
                    <Link>Learn More</Link>
                </CardContent>
            </Card>
        </React.Fragment>
    )

    const anothercard = (
        <React.Fragment>
            <Card sx={{ maxWidth: 200, display: 'inline-block' }}>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://picsum.photos/200"
                    alt="dynamo"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Bike Kitchen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Pyöräpajan ovet ovat avoinna torstaisin. Tervetuloa!
                    </Typography>
                    <Link>Learn More</Link>
                </CardContent>
            </Card>
        </React.Fragment>
    )

    return (
        <div style={{}}>
            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid item xs={12}>
                        <Paper
                            container
                            elevation={1}
                            variant="outlined"
                            style={{ padding: '2%' }}
                        >
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
                        </Paper>
                        <Grid item xs xs={6}>
                            <Card variant="outlined" sx={{ maxWidth: 345 }}>
                                {card}
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card variant="outlined">{anothercard}</Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

function storeLanguageInLocalStorage(language) {
    localStorage.setItem('language', language)
}

export default Home
