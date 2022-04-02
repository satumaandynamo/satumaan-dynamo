import { styled } from '@material-ui/core'

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
export const Link = styled('a')({
  'a:': {
    boxShadow: 'inset 0px -3px 0px 0px #FFA500',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: '.4s ease-in-out',
  },
  '&:hover': {
    boxShadow: 'inset 0px -8px 0px 0px #FFA500',
    transition: '.4s ease-in-out',
  },
})
