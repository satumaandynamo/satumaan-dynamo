import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../headings'
import { Paragraph } from '../texts'
import { useTranslation } from 'react-i18next'

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
