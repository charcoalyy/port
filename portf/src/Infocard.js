const Infocard = ({cardInfo}) => {
    return(
        <div className="info-cards">
            {cardInfo.map(info => {
                return(
                    <div className="info-card" key={info}>
                        <img className="info-card-icon" src={info[0]}></img>
                        <div className="info-card-text-cont">
                            <p className="info-card-text">{info[1]}</p>
                        </div>
                    </div>
                )
            })}
        </div>

       
    )
}

export default Infocard;
