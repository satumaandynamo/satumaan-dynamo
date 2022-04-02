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
  Item,
} from '@material-ui/core'
import Cover from '../../assets/dynamo_frontpage.jpeg'
import { Emphasis, Header } from '../../components/styles'
import { useTranslation } from 'react-i18next'

const Hero = () => (
  <div>
    <Box
      variant="outlined"
      mt={2}
      mb={2}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      height="300px"
      style={{
        backgroundColor: '#e0e0e0',
      }}
    >
      Placeholder for hero right here
    </Box>
  </div>
)

const Content1 = () => (
  <div>
    <Card square variant="outlined">
      <CardMedia
        component="img"
        height="240"
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
  </div>
)

const Content2 = () => (
  <Card square variant="outlined">
    <CardMedia
      component="img"
      height="240"
      image="https://picsum.photos/200"
      alt="dynamo"
    />
    <CardContent>
      <Typography gutterBottom>Bike Kitchen</Typography>
      <Typography variant="body2" color="text.secondary">
        Pyöräpajan ovet ovat avoinna torstaisin. Tervetuloa!
      </Typography>
      <Link>Learn More</Link>
    </CardContent>
  </Card>
)

const Socials = () => (
  <div>
    <Box
      variant="outlined"
      mt={2}
      mb={2}
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      height="300px"
      style={{
        backgroundColor: '#e0e0e0',
      }}
    >
      Socials
    </Box>
  </div>
)

const Home = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Container>
        <Header>{t('home.title')}</Header>
        <Emphasis>{t('home.description')}</Emphasis>
        <Hero></Hero>
        <Box sx={{ width: '100%' }}>
          <Grid container spacing={1} justify="center">
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="flex-start"
              display="flex"
              columns={12}
              xs={12}
              spacing={1}
            >
              <Grid item xs={12} sm={7}>
                <Content1 />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Content2 />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Content1 />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Socials />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Home
