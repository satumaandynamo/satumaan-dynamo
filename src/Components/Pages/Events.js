import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../styles/headings'
import { Paragraph } from '../styles/texts'
import i18n from '../../lib/i18n'

const Events = () => (
  <Container>
    <div>
      <Header>{i18n.t('events.title')}</Header>
      <Paragraph>{i18n.t('events.description')}</Paragraph>
      <Paragraph>{i18n.t('events.paragraph')}</Paragraph>
    </div>
  </Container>
)

export default Events
