import RestaurantsPage from './components/RestaurantsPage'
import LogoIcon from './assets/stair.svg?react'
import './styles.css'

function App() {
  return (
    <>
      <header>
        <div className="logo">
          <LogoIcon width={24} height={24} className="logo__icon" />
          <span className="logo__text">Eats</span>
        </div>
        <div className="profile">
          <img alt="Profile" src="/avatar.png" className="profile__image" />
        </div>
      </header>
      <RestaurantsPage />
      <footer>
        <p>Privacy Policy</p>
        <p className="corporation">© 2022 Eats</p>
        <p>Terms Of Service</p>
      </footer>
    </>
  )
}

export default App
