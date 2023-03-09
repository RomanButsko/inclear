import { InputHTMLAttributes } from 'react'

export interface IFieldProps {
    error?: string | null
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}
