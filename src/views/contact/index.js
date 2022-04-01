import React from 'react'
import { Container } from '@material-ui/core'
import i18n from '../../lib/i18n'
import { Header, Paragraph } from '../../components/styles'

const Contact = () => (
  <Container>
    <div>
      <Header>{i18n.t('contact.title')}</Header>
      <Paragraph>{i18n.t('contact.description')}</Paragraph>
      <Paragraph>{i18n.t('contact.paragraph')}</Paragraph>
    </div>
  </Container>
)

export default Contact
