import { BackToHome, Subheader } from "@bits-general"
import { useEffect } from "react"

export default ({ children, title, thumbnail, tagline }) => {
  useEffect(() => {
    document.title = title
  }, [])

  return (
    <section>
      <Subheader img={thumbnail} />
      <BackToHome />

      <div className="page-intro">
        <h1 className="page-title">{title}</h1>
        <h3 className="page-desc">{tagline}</h3>
      </div>

      {children}
    </section>
  )
}