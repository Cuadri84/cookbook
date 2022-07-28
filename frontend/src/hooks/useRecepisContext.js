import { RecepisContext } from "../context/RecepisContext"
import { useContext } from "react"

export const useRecepisContext = () => {
    const context = useContext(RecepisContext)

    if(!context) {
    throw Error('useRecepisContext must be used inside a RecepisContextProvider')
    }

    return context
}