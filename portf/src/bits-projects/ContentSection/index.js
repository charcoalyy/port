export default ({heading, body, figures}) => {
    return(
        <section className="content-section">
            <h3 className="section-title">{heading}</h3>
            {figures.map(figure => {
                {console.log(figure)}
                <img className="section-figure" src={'https://drive.google.com/uc?export=view&id=$' + figure}></img>
            })}
            <p className="section-body">{body}</p>
        </section>
    )
}
