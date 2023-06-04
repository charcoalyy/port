import { Typography } from '@mui/material'
import { FiChevronDown } from "react-icons/fi"

export default ({ setGoDown }) => {
  return (
    <div className="header">
      <div className="introduction">
        <Typography variant="h1" sx={{ color: 'white', textTransform: 'lowercase' }}>alina</Typography>
        <Typography variant="h3" sx={{ color: 'white' }}>i like pretty things that work.</Typography>
        <div className="nav-link" onClick={() => setGoDown(true)}>
          <FiChevronDown />
        </div>
      </div>
    </div>
  )
}
