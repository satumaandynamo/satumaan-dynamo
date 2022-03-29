import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../headings'
import i18n from '../../lib/i18n'
import { Paragraph } from '../texts'

const BikeKitchen = () => (
  <Container>
    <div>
      <Header>{i18n.t('bikekitchen.title')}</Header>
      <Paragraph>{i18n.t('bikekitchen.description')}</Paragraph>
      <Paragraph>{i18n.t('bikekitchen.paragraph')}</Paragraph>
    </div>
  </Container>
)

export default BikeKitchen
