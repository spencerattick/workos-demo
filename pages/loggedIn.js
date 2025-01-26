export default function LoggedIn() {
    const handleLogOutClick = () => {
        console.log('LOGOUT')
        window.location.href = "/api/handleLogout";
    }

    return (
        <>
            <h1>Welcome! Glad you could log in!</h1>
            <button onClick={handleLogOutClick}>
                LOG OUT
            </button>
        </>
    )
}