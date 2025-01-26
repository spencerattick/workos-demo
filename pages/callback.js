export default function Redirect() {
    const handleLogOutClick = () => {
        console.log('LOGOUT')
        window.location.href = "/api/handleLogout";
    }

    return (
        <>
            <h1>CALLBACK REDIRECT</h1>
            <button onClick={handleLogOutClick}>
                LOG OUT
            </button>
        </>
    )
}