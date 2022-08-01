import { useState } from "react"
import { useRecepisContext } from "../hooks/useRecepisContext";

const RecepiForm = () => {
    const {dispatch} = useRecepisContext()

    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [rece, setRece] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const recepi = {title, ingredients, rece}

        const response = await fetch('/api/recepis', {
            method: 'POST',
            body: JSON.stringify(recepi),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if(response.ok) {
            setEmptyFields([])
            setError(null)
            setTitle('')
            setIngredients('')
            setRece('')
            dispatch({type: 'CREATE_RECEPI', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>New Recepi</h3>

            <label>Recepi Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Ingredients: </label>
            <input
                type="text"
                onChange={(e) => setIngredients(e.target.value)}
                value={ingredients}
                className={emptyFields.includes('ingredients') ? 'error' : ''}
            />

            <label>Recepi: </label>
            <input
                type="text"
                onChange={(e) => setRece(e.target.value)}
                value={rece}
                className={emptyFields.includes('rece') ? 'error' : ''}
            />

            <button>Add recepi</button>
            {error && <div className="error">{error}</div>}
        </form>
    )

}

export default RecepiForm