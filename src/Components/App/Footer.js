import { Box } from '@material-ui/core'
import React from 'react'

const Footer = () => {
    return (
        <Box>
            <footer
                style={{
                    color: '#ffa500',
                    textAlign: 'center',
                    height: '50px',
                }}
            >
                <hr
                    style={{
                        color: '#ffa500',
                        marginBottom: 15,
                        width: 150,
                    }}
                />
                Satumaan Dynamo 🧡 {new Date().getFullYear()}
            </footer>
        </Box>
    )
}

export default Footer
