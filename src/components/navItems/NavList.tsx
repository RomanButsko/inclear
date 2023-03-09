import { Link, useLocation } from 'react-router-dom'
import { navItemsRoutes } from './navitemsData'
import style from './NavItems.module.sass'

export const NavList = () => {
    const location = useLocation()
    return (
        <div className={style.container}>
            {navItemsRoutes.map((item) => (
                <Link
                    className={style.container_link}
                    to={item.link}
                    key={item.id}
                    style={{
                        color: location.pathname === item.link ? 'red' : '',
                    }}
                >
                    {item.name}
                </Link>
            ))}
            <div className={style.container_link__dot}></div>
        </div>
    )
}
