import React from 'react'
import { Container } from '@material-ui/core'
import { Header } from '../headings'
import { Paragraph } from '../texts'
import { useTranslation } from 'react-i18next'

const BikeKitchen = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('bikekitchen.title')}</Header>
        <Paragraph>{t('bikekitchen.description')}</Paragraph>
        <Paragraph>{t('bikekitchen.paragraph')}</Paragraph>
      </div>
    </Container>
  )
}

export default BikeKitchen
