import React from 'react'
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
import Cover from '../../assets/dynamo_frontpage.jpeg'
import { Emphasis, Header } from '../../components/styles'
import { useTranslation } from 'react-i18next'

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
          Lojuuko nurkissasi tai varastossa hylätty, käyttämätön pyörä? Tuo se
          meille niin fiksaamme sen!
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

const Home = () => {
  const { t } = useTranslation()

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
              <Header>{t('home.title')}</Header>
              <Emphasis>{t('home.description')}</Emphasis>
            </Paper>
            <Grid item xs={6}>
              <Card variant="outlined" sx={{ maxWidth: 345 }}></Card>
            </Grid>
            <Grid item xs={6}>
              <Card variant="outlined"></Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Home
