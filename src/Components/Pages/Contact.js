import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../styles/headings'
import i18n from '../../lib/i18n'
import { Paragraph } from '../styles/texts'

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
