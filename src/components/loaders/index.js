import { CircularProgress } from '@material-ui/core'
import { useTranslation } from 'react-i18next'

const Loading = () => {
  const { t } = useTranslation()

  return (
    <CircularProgress>
      return{' '}
      <span className="visually-hidden">{t('generic.loader.loading')}</span>;
    </CircularProgress>
  )
}

export default Loading
