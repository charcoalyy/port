const Subheader = ({img}) => {
    return(
        <section className="subheader">
            <div className="subheader-bg">
                <img src={img} className="subheader-img" />
            </div>
        </section>
    )
}

export default Subheader;