import { Checkbox } from 'pretty-checkbox-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../ui/button/Button'
import { Field } from '../../ui/input/Input'
import logo from './../../assets/logo.webp'
import style from './MainSearch.module.sass'

export const MainSearch = () => {
    const [secondInput, setSecondInput] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleSecondInput = () => {
        setSecondInput((prevState) => !prevState)
    }
    return (
        <div className={style.container}>
            <img src={logo} alt="logo" className={style.container_image} />
            <Field
                placeholder="What you want to see"
                className={style.container_field}
            />
            {secondInput && (
                <Field
                    placeholder="What you don't want to see"
                    className={`${style.container_field} ${style.container_field__second}`}
                />
            )}
            <Checkbox
                style={{ marginTop: '5%' }}
                shape="round"
                color="danger"
                checked={secondInput}
                onChange={handleSecondInput}
            >
                Negative Prompt
            </Checkbox>
            <div className={style.container_btns}>
                <Button className={style.container_btns__generate}>
                    Generate
                </Button>
                <Button
                    onClick={() => navigate('/make')}
                    className={style.container_btns__tags}
                >
                    Tags
                </Button>
            </div>
        </div>
    )
}
