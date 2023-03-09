import { forwardRef } from 'react'
import { IField } from './input.interface'
import styles from './Input.module.sass'

export const Field = forwardRef<HTMLInputElement, IField>(
    ({ error, type = 'text', className, ...rest }, ref) => {
        return (
            <>
                <input
                    ref={ref}
                    type={type}
                    {...rest}
                    className={`${styles.create_input} ${className}`}
                />
                {error && <span className={styles.required}>{error}</span>}
            </>
        )
    }
)
