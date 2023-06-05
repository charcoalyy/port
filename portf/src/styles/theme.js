import { createTheme } from "@mui/material"

export default createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSize: '16px',
                    fontFamily: 'Inter'
                },
                h1: {
                    fontSize: '40px',
                    fontWeight: 700,
                    lineHeight: '40px'
                },
                body1: {
                    textTransform: 'lowercase',
                    fontSize: '12px',
                    lineHeight: '14px'
                },
                h2: {
                    fontSize: '22px',
                    fontWeight: 400,
                    marginBottom: '1rem'
                },
                caption: {
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '10px',
                    color: '#3C3C3C'
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontSize: '12px',
                    color: '#3C3C3C',
                    cursor: 'default',
                    marginRight: '0.25rem',
                    marginBottom: '0.25rem',
                    '&&:hover, &:focus': {
                        backgroundColor: '#E4E4E4'
                    }
                },
                outlined: {
                    letterSpacing: '0.75px',
                    fontSize: '10px',
                    fontWeight: 300,
                    width: '100%',
                    color: '#141414',
                    padding: '0 3rem',
                    cursor: 'pointer',
                    margin: 0,
                    borderColor: '#141414',
                    border: '0.75px solid',
                    '&&:hover, &:focus': {
                        backgroundColor: '#FFEDED'
                    },
                }
            }
        }
    }
})
