import React from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Feed } from '../../components/feed'

const About = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <h1>{t('about.title')}</h1>
        <p>{t('about.description')}</p>
        <p>{t('about.paragraph')}</p>
        <h2>{t('about.links')}</h2>
        <a href="">{t('about.links')}</a>
      </div>

      <Feed />
    </Container>
  )
}

export default About
