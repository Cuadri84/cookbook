import { useEffect } from "react";
import { useRecepisContext } from "../hooks/useRecepisContext";
//components
import RecepiDetails from "../components/RecepiDetails";
import RecepiForm from "../components/RecepiForm";


const Home = ()  => {

    const { recepis, dispatch } = useRecepisContext()

    useEffect(() => {
        const fetchRecepis = async () => {
            const response = await fetch('/api/recepis')
            const json =await response.json()

            if (response.ok){
                dispatch({type: 'SET_RECEPIS', payload: json})
            }
        }
        fetchRecepis()
    }, [dispatch])

    return (
        <div className="home">
            <div className="recepis">
                {recepis && recepis.map((recepi) => (
                    <RecepiDetails key={recepi._id} recepi={recepi}/>
                ))}
            </div>
            <RecepiForm/>
        </div>
    )
}

export default Home