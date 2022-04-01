import React from 'react'
import { Container } from '@material-ui/core'
import Cover from '../../Assets/dynamo_frontpage.jpeg'
import { Emphasis } from '../texts'
import { Header } from '../headings'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()

  return (
    <div style={{}}>
      <Container>
        <div>
          <Header>{t('home.title')}</Header>
          <Emphasis>{t('home.description')}</Emphasis>

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

export default Home
