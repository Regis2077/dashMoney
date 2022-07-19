import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: number
}

// interface TransactionInput{
//   title: string,
//   type: string,
//   category: string,
//   amount: number,
// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface transactionContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void;
}

interface TransactionProviderPros{
  children: ReactNode;
}

export const TransactionsContext = createContext<transactionContextData>(
  {} as transactionContextData
);

const TransactionProvider = ({children}: TransactionProviderPros) =>{
  const [transactions, setTransactions] = useState<Transaction[]>([])
    
  useEffect(()=> {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions))
  }, [])

  function createTransaction(transaction: TransactionInput){
      api.post("/transactions", transaction)  
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionProvider