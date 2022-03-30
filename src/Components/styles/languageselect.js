import * as React from 'react'
import { Select, MenuItem } from '@material-ui/core'
import { styled } from '@mui/system'
import { NoEncryption } from '@material-ui/icons'

export const LanguageDropdown = styled(Select)({
  flexGrow: '1',
  textDecoration: 'none',
  backgroundColor: 'none',
  fontSize: '16px',
  textAlign: 'right',
  border: 'none',
  borderRadius: '20px',
  padding: '10px',
  '&:hover': {
    background: 'none',
    transition: '.3s ease-in-out',
  },
  '&:focus': {
    backgroundColor: 'none',
    boxShadow: 'none',
    transition: 'none',
  },
  '&.MuiInput-underline:before': {
    display: 'none',
  },
  '&.MuiInput-underline:after': {
    display: 'none',
  },
  '&.Mui-focused': {
    backgroundColor: 'transparent',
  },
  '&.MuiInput-formControl': {
    backgroundColor: 'transparent',
  },
  '&.MuiInputBase': {
    borderRadius: 50,
    backgroundColor: 'transparent',
    boxShadow: 'none',
    border: 'white',
    textAlign: 'right',
    fontSize: 25,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: 50,
      boxShadow: '0 0 0 1px inset #fff',
    },
  },
})

export const DropdownListItem = styled(MenuItem)({
  '&:hover': {
    background: 'transparent',
    transition: '.3s ease-in-out',
  },
  '&:focus': {
    backgroundColor: 'transparent',
  },
})

// export const languageSelector = styled() {
//     width: '100px',
//     borderRadius: 4,
//     position: 'relative',
//   },
// }))

// export const CustomSelect = styled(InputBase)(({ theme }) => ({
//   '& .MuiInputBase-input': {
//     borderRadius: 50,
//     backgroundColor: 'transparent',
//     border: 'white',
//     fontSize: 16,
//     padding: '10px 26px 10px 12px',
//     transition: theme.transitions.create(['border-color', 'box-shadow']),
//     '&:focus': {
//       borderRadius: 50,
//       boxShadow: '0 0 0 1px inset #fff',
//     },
//     textAlign: 'right',
//   },
// }))
