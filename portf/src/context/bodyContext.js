import { createContext, useContext, useState } from 'react'

const BodyContext = createContext()

export const BodyContextProvider = ({ children }) => {
  const [goDown, setGoDown] = useState()
  const [tab, setTab] = useState("dev")

  return (
    <BodyContext.Provider value={{ goDown, setGoDown, tab, setTab }}>
      {children}
    </BodyContext.Provider>
  )
}

const useBody = () => {
  return useContext(BodyContext)
}

export default useBody;