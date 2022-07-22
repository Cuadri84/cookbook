const RecepiDetails = ({ recepi }) => {
    return(
        <div className="recepi-details">
            <h4>{recepi.title}</h4>
            <p><strong>Ingridients:</strong>{recepi.ingredients}</p>
            <p><strong>Recepi:</strong>{recepi.rece}</p>
        </div>
    )
}

export default RecepiDetails