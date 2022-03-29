import React from 'react'
import { styled } from '@material-ui/styles'

export const Header = styled('h1')(
    ({ theme }) => `
  justify-content: 'center';
`
)

export const SubHeader = styled('h2')(
    ({ theme }) => `
    color: 'red;
  `
)
// const PageHeading = ({ title }) => <Heading>{title}</Heading>

// export default PageHeading
