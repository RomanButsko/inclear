import logo from './../../assets/404.jpeg'

export const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 60px)',
            }}
        >
            <img
                src={logo}
                alt="404"
                width="40%"
                height="40%"
                style={{ margin: '0 auto' }}
            />
        </div>
    )
}
