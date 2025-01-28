// [ ] double check logout functionality (might not be working right)
// [ ] ensure all /api files are using try/catch
// [ ] FIGURE OUT WHY USERS AREN'T ADDED TO GROUP WITH TEST SSO
// [ ] Make sure EVERYTHING works without localhost
// [ ] fill out readme
// [ ] figure out how to log into the app if user clicks the tile in Okta
// [ ] choose semi colons or no semi colons
import styles from '../styles/index.module.css';

export default function Home() {
  const handleSignInOktaButtonClick = () => {
    window.location.href = "/api/useSSO?okta"
  }

  const handleSignInTestButtonClick = () => {
    window.location.href = "/api/useSSO?test"
  }

  return (
    <div className={styles.welcomePage}>
      <h1>Welcome! Please sign in!</h1>
      <button onClick={handleSignInOktaButtonClick}>SIGN IN WITH OKTA</button>
      <button onClick={handleSignInTestButtonClick}>SIGN IN WITH TEST SSO</button>
    </div>
  );
}
