import { Box } from '@material-ui/core'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <footer
        style={{
          textAlign: 'center',
          height: '50px',
        }}
      >
        {t('generic.logo.text')} 🧡 {new Date().getFullYear()}
      </footer>
    </Box>
  )
}

export default Footer
