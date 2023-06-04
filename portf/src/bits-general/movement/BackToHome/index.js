import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import useBody from 'context/bodyContext'

export default ({ about }) => {
  const { setGoDown } = useBody()

  return (
    <div className="back-home-container">
      {!about && <Link to={'/'} className="nav-button back-home" onClick={() => setGoDown(true)}>
        <BsArrowLeft />
      </Link>}
      {about && <Link to={'/'} className="nav-button back-home" id="back-home-about">
        <BsArrowLeft />
      </Link>}
    </div>
  )
}
