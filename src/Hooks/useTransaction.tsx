import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: number
}
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps{
  children: ReactNode;
}

interface TransactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

const TransactionProvider = ({children}: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
    
  useEffect(()=> {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
  }, [])

 async function createTransaction(transactionInput:TransactionInput ){
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    })
    const {transaction} = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransaction(){
  const context = useContext(TransactionsContext)

  return context
}


export default TransactionProvider