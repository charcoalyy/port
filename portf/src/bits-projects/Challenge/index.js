export default ({num, title, body}) => {
    return(
        <div className="challenge">
            <div className="challenge-num">
                {num}
            </div>
            <div>
                <h4 className="section-subtitle">{title}</h4>
                <p className="section-body">{body}</p>
            </div>
        </div>
    )
}