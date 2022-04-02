import React, { Link } from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Header, SubHeader, Paragraph } from '../../components'

const About = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('about.title')}</Header>
        <Paragraph>{t('about.description')}</Paragraph>
        <Paragraph>{t('about.paragraph')}</Paragraph>
        <SubHeader>{t('about.links')}</SubHeader>
        <Link to="#">{t('about.links')}</Link>
      </div>
    </Container>
  )
}

export default About
