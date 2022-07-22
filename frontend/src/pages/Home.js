import { useEffect, useState } from "react";

//components
import RecepiDetails from "../components/RecepiDetails";

const Home = ()  => {

    const [recepis, setRecepis] =useState(null)

    useEffect(() => {
        const fetchRecepis = async () => {
            const response = await fetch('/api/recepis')
            const json =await response.json()

            if (response.ok){
                setRecepis(json)
            }
        }
        fetchRecepis()
    }, [])

    return (
        <div className="home">
            <div className="recepis">
                {recepis && recepis.map((recepi) => (
                    <RecepiDetails key={recepi._id} recepi={recepi}/>
                ))}
            </div>
        </div>
    )
}

export default Home