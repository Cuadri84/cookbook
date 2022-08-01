import { useRecepisContext } from "../hooks/useRecepisContext";

const RecepiDetails = ({ recepi }) => {
    const { dispatch } = useRecepisContext()

    const handleClick = async () => {
        const response = await fetch('/api/recepis/' + recepi._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_RECEPI', payload: json})
        }
    }

    return(
        <div className="recepi-details">
            <h4>{recepi.title}</h4>
            <p><strong>Ingredients: </strong>{recepi.ingredients}</p>
            <p><strong>Recepi:</strong>{recepi.rece}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default RecepiDetails