import { createContext, ReactNode, useContext } from 'react'

type CheckoutContextData = {}
type CheckoutContextProviderProps = {
	children: ReactNode
}

export const CheckoutContext = createContext({} as CheckoutContextData)

function CheckoutProvider({ children }: CheckoutContextProviderProps) {
	return (
		<CheckoutContext.Provider value={{}}>{children}</CheckoutContext.Provider>
	)
}

function useCheckout() {
	const context = useContext(CheckoutContext)
	return context
}

export { CheckoutProvider, useCheckout }
