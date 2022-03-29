import { styled } from '@material-ui/core'
import React from 'react'

export const Emphasis = styled('em')(
    ({ theme }) => `
  font-size: 20;
  justify-content: 'center';
  text-align: 'center';
  `
)

export const Paragraph = styled('p')(
    ({ theme }) => `
    color: 'black';
  `
)
