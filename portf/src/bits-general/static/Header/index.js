import { Typography } from '@mui/material'

export default ({ setGoDown }) => {
  return (
    <div className="header">
      <div className="introduction" onClick={() => setGoDown(true)}>
        <img src={require('figures/scwibbly.gif')} alt="scribbly head" className='header-image' />
        <Typography variant="h1" sx={{ color: 'white', textTransform: 'lowercase' }}>alina</Typography>
        <a href="https://alinazeng.onrender.com/" style={{color: 'white'}}> this website is out of date! click here to go to my latest one</a>
      </div>
    </div>
  )
}
