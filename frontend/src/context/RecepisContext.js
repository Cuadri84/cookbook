import { createContext, useReducer } from 'react'

export const RecepisContext = createContext()

export const recepisReducer = (state, action) => {
    switch (action.type) {
      case 'SET_RECEPIS':
        return {
          recepis: action.payload
        }
      case 'CREATE_RECEPI':
        return {
          recepis: [action.payload, ...state.recepis]
        }
      default:
        return state
    }
  }

export const RecepisContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(recepisReducer, {
        recepis: null
      })

    return(
        <RecepisContext.Provider  value={{ ...state, dispatch }}>
        { children }
        </RecepisContext.Provider>
    )
}