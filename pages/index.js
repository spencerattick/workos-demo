// [ ] consider making another page that shows the whole user profile
// [ ]  clean up Directory UI and consider pulling in more fields
// [ ] ensure all /api files are using try/catch
// [ ] add gifs to README
// [ ] remove all console.logs
// [ ] choose semi colons or no semi colons

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
