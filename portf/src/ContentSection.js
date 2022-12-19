const ContentSection = ({heading, body, figures}) => {
    return(
        <section className="content-section">
            <h3 className="section-title">{heading}</h3>
            {figures.map(figure => {
                <img className="section-figure" src={require(figure)}></img>
            })}
            <p className="section-body">{body}</p>
        </section>
    )
}

export default ContentSection;