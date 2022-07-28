const RecepiDetails = ({ recepi }) => {
    return(
        <div className="recepi-details">
            <h4>{recepi.title}</h4>
            <p><strong>Ingredients: </strong>{recepi.ingredients}</p>
            <p><strong>Recepi:</strong>{recepi.rece}</p>
        </div>
    )
}

export default RecepiDetails