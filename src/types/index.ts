// Type definitions for the application

export interface User {
  id: number
  name: string
  email: string
}

export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export interface CardProps {
  title: string
  description: string
  children?: React.ReactNode
  className?: string
}
