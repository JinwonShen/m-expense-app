import React, { createContext, useContext, useState, ReactNode} from "react"

export type Expense = {
  id: string
  date: string
  amount: number
  memo: string
}

interface ExpenseContextType {
  expenses: Expense[];
  addExpense: (expense: Expense) => void
}

const ExpenseContext = createContext<ExpenseContextType | undefined >(undefined)

export function ExpenseProvider({ children }: { children: ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const addExpense = (expense: Expense) => {
    setExpenses((prev) => [...prev, expense])
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export function useExpenses() {
  const context = useContext(ExpenseContext);
  if(!context) throw new Error("useExpenses must be used within an ExpenseProvider");
  return context
}