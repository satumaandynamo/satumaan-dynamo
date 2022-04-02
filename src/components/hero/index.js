import { Container, styled } from '@material-ui/core'
import React from 'react'
import Image from 'material-ui-image'
import { useTranslation } from 'react-i18next'

const Days = {
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
  Sunday: 0,
}

export const HeroFrame = styled('section')(({ theme }) => ({
  height: '325px',
  width: '100%',
  overflow: 'hidden',
  position: 'relative',
}))

export const HeroText = styled('p')(({ theme }) => ({
  position: 'absolute',
  bottom: '10px',
  fontSize: '30px',
}))

export const EventHero = () => {
  // TO-BE-DEFINED
  return <></>
}

export const BikeKitchenHero = () => {
  const { t } = useTranslation()

  return (
    <HeroFrame>
      <Image
        src="https://lochaberenviro.org.uk/wp-content/uploads/2017/08/Bike-Repair-Ardgour-3-1600x325.jpg"
        imageStyle={{ height: '325px', width: '1400px' }}
        style={{ filter: 'opacity(0.5)' }}
      />
      <HeroText>{t('home.bikekitchen')}</HeroText>
    </HeroFrame>
  )
}
export const DefaultHero = () => {
  const { t } = useTranslation()

  return (
    <HeroFrame>
      <Image
        src="https://random.imagecdn.app/1400/400"
        imageStyle={{ height: '400px', width: '1400px' }}
      />
      <HeroText>{t('home.title')}</HeroText>
    </HeroFrame>
  )
}
export const Hero = () => {
  const bikeKitchenDays = [Days.Tuesday, Days.Wednesday, Days.Thursday]

  return (
    <Container>
      {bikeKitchenDays.includes(new Date().getDay()) ? (
        <BikeKitchenHero />
      ) : (
        <DefaultHero />
      )}
    </Container>
  )
}
