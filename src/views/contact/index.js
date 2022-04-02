import React from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'
import { Header, Paragraph } from '../../components'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('contact.title')}</Header>
        <Paragraph>{t('contact.description')}</Paragraph>
        <Paragraph>{t('contact.paragraph')}</Paragraph>
      </div>
    </Container>
  )
}

export default Contact
