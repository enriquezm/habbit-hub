import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <div className="challenges-header">
      <h1>HabbitRabbit</h1>
      <p>Start small. Finish big. Build those habits with habbitRabbit!</p>
    </div>
    <nav>
      <ul>
        <li><Link to='/dashboard'>My Dashboard</Link></li>
        <li><Link to='/'>Login</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;