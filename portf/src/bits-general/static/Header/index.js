import { Typography } from '@mui/material'

export default ({ setGoDown }) => {
  return (
    <div className="header">
      <div className="introduction">
        <img src={require('figures/scrimbbly.gif')} alt="scribbly head" />
        <Typography variant="h1" sx={{ color: 'white', textTransform: 'lowercase' }}>alina</Typography>
        <Typography variant="h3" sx={{ color: 'white', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setGoDown(true)}>i like pretty things that work.</Typography>
      </div>
    </div>
  )
}
