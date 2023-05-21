export default ({items}) => {
    return(
        <div className="numbered-list">
            {items.map((item, index) => {
                    return(
                        <div className="numbered-item" key={item}>
                            <div className="number">
                                <p>{index + 1}</p>
                            </div>
                            <p className="numbered-text">{item}</p>
                        </div>
                    )
                })}
        </div>
    )
}
