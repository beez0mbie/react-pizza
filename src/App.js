import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="header">
          <div className="header__logo">
            <img
              className="header__logo-image"
              src="img/logo_pizza.svg"
              alt="Logo"
            />
            <div className="header__logo-descriprion">
              <h1 className="header__logo-title">React pizza</h1>
              <p className="header__logo-desc">
                самая вкусная пицца во вселенной
              </p>
            </div>
          </div>
          <ul>
            <li>1999 руб</li>
            <li>Cart</li>
          </ul>
        </header>
      </div>
    </div>
  );
}

export default App;
