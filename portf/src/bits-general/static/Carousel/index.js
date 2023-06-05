import { useState } from "react"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs"
import Grid from '@mui/material/Unstable_Grid2'

export default ({ images }) => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    current + 1 < images.length ? setCurrent(prev => prev + 1) : setCurrent(0)
  }

  const handleBack = () => {
    current - 1 >= 0 ? setCurrent(prev => prev - 1) : setCurrent(images.length - 1)
  }

  return (
    <>
      <img src={require('@figures/' + images[current] + '.png')} style={{ width: '100%' }}></img>
      {images.length > 1 &&
        <Grid container xs={12} sx={{ mt: 1 }} justifyContent="flex-end" alignItems="flex-end">
          <BsArrowLeftCircle onClick={() => handleBack()} className="carousel-nav left" />
          <BsArrowRightCircle onClick={() => handleNext()} className="carousel-nav" />
        </Grid>}
    </>
  )
}