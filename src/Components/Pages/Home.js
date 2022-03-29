import React, { useState } from 'react'
import { Container } from '@material-ui/core'
import Cover from '../../Assets/dynamo_frontpage.jpeg'
import i18n from '../../lib/i18n'
import { Emphasis } from '../texts'
import { Header } from '../headings'

const Home = () => (
  <div style={{}}>
    <Container>
      <div>
        <Header>{i18n.t('home.title')}</Header>
        <Emphasis>{i18n.t('home.description')}</Emphasis>

        <img
          src={Cover}
          style={{
            position: 'relative',
            maxWidth: '100%',
            maxHeight: '100%',
            marginTop: 20,
          }}
        ></img>
      </div>
    </Container>
  </div>
)

export default Home
