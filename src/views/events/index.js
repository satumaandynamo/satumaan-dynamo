import React from 'react'
import { Container } from '@material-ui/core'
import { Header, Paragraph } from '../../components/styles'
import { useTranslation } from 'react-i18next'
import { Feed, FEED_TYPES } from '../../components/feed'

const Events = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('events.title')}</Header>
        <Paragraph>{t('events.description')}</Paragraph>
        <Paragraph>{t('events.paragraph')}</Paragraph>
      </div>

      <h3>{t('events.relatedContent')}</h3>
      <Feed feedType={FEED_TYPES.events} />

    </Container>
  )
}
export default Events
