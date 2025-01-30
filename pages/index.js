export default function Home() {
  const handleSignInOktaButtonClick = () => {
    window.location.href = "/api/useSSO?okta"
  }

  return (
    <div>
      <h1>Welcome! Please sign in!</h1>
      <div className='button-container'>
        <button onClick={handleSignInOktaButtonClick}>SIGN IN WITH OKTA</button>
      </div>      
    </div>
  );
}
