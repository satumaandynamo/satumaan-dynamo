import React from 'react'
import { Container } from '@material-ui/core'
import { Header, Paragraph } from '../../components/styles'
import { useTranslation } from 'react-i18next'
import { Feed, FEED_TYPES } from '../../components/feed'

const BikeKitchen = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('bikekitchen.title')}</Header>
        <Paragraph>{t('bikekitchen.description')}</Paragraph>
        <Paragraph>{t('bikekitchen.paragraph')}</Paragraph>
      </div>

      <h3>{t('bikekitchen.relatedContent')}</h3>
      <Feed feedType={FEED_TYPES.bike_kitchen} />
    </Container>
  )
}

export default BikeKitchen
