import React from 'react'
import { Container } from '@material-ui/core'
import i18n from '../../lib/i18n'
import { Header, Paragraph } from '../../components/styles'

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
