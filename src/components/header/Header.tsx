import logo from './../../assets/logo.webp'
import { NavList } from '../navItems/NavList'
import style from './Header.module.sass'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
    const navigate = useNavigate()
    return (
        <div className={style.container}>
            <img
                onClick={() => navigate('/')}
                src={logo}
                className={style.container_img}
                alt="logo"
            />
            <NavList />
        </div>
    )
}
