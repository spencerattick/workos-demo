// [ ] ADD ABILITY TO LOG IN WITH TEST SSO OR OKTA
// [ ] double check logout functionality (might not be working right)
// [ ] maintain firstname/lastname when switching from directory page back to the loggedIn page
// [ ] ensure all /api files are using try/catch
// [ ] FIGURE OUT WHY USERS AREN'T ADDED TO GROUP WITH TEST SSO
// [ ] Deploy to Vercel

export default function Home() {
  const handleSignInOktaButtonClick = () => {
    window.location.href = "/api/useSSO?okta";
  }

  const handleSignInTestButtonClick = () => {
    window.location.href = "/api/useSSO?test";
  }

  return (
    <div>
      <h1>Welcome! Please sign in!</h1>
      <button onClick={handleSignInOktaButtonClick}>SIGN IN WITH OKTA</button>
      <button onClick={handleSignInTestButtonClick}>SIGN IN WITH TEST SSO</button>
    </div>
  );
}
