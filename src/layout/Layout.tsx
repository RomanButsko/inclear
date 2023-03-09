import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/Header'
import style from './Layout.module.sass'

export const Layout = () => {
    return (
        <div className={style.container}>
            <Header />
            <Outlet />
        </div>
    )
}
