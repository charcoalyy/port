
export default ({title, items, check}) => {
    return(
        <div className="checklist">
            {title && <h4 className="section-subtitle">{title}</h4>}
            <div className="checklist-items">
                {items.map(item => {
                    return(
                        <div className="checklist-item" key={item}>
                            <img src={require('@figures/checks/' + check + '.png')}></img>
                            <p>{item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
