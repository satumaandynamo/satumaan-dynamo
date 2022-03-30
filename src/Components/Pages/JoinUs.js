import React from 'react'
import { Container } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const JoinUs = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <h1>{t('joinus.title')}</h1>
        <p>{t('joinus.description')}</p>
        <p>{t('joinus.paragraph')}</p>
      </div>
    </Container>
  )
}

export default JoinUs
