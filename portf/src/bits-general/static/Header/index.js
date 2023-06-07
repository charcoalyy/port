import { Typography } from '@mui/material'

export default ({ setGoDown }) => {
  return (
    <div className="header">
      <div className="introduction" onClick={() => setGoDown(true)}>
        <img src={require('figures/scwibbly.gif')} alt="scribbly head" className='header-image' />
        <Typography variant="h1" sx={{ color: 'white', textTransform: 'lowercase' }}>alina</Typography>
        <Typography variant="h3" sx={{ color: 'white', cursor: 'pointer', textDecoration: 'underline', mt: 0.5 }}>i like pretty things that work.</Typography>
      </div>
    </div>
  )
}
