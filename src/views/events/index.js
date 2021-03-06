import React from 'react'
import { Container } from '@material-ui/core'
import { Header, Paragraph } from '../../components/styles'
import { useTranslation } from 'react-i18next'

const Events = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <Header>{t('events.title')}</Header>
        <Paragraph>{t('events.description')}</Paragraph>
        <Paragraph>{t('events.paragraph')}</Paragraph>
      </div>
    </Container>
  )
}
export default Events
