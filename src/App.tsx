import { Route, NavLink, Routes } from 'react-router-dom';
import { About } from './About';
import './App.scss';
import { ExchangeCenter } from './component/Rates';

export function App() {
  return (
    <div className="App">
      <header className="nav-header">
        <div className="nav-container">
          <NavLink to="/" className="nav-link">
            Exchange Center
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </div>
      </header>
      <div className="app-body">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<ExchangeCenter />} />
        </Routes>
      </div>
    </div>
  );
}
