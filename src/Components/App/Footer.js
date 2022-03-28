import { Box } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <footer
                style={{
                    textAlign: 'center',
                    height: '50px',
                }}
            >
                Satumaan Dynamo 🧡 {new Date().getFullYear()}
            </footer>
        </Box>
    )
}

export default Footer
