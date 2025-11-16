import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    // Here you would typically clear authentication tokens/session
    console.log('Signing out...');
    navigate('/signin');
  };

  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Your Dashboard</h1>
        <button onClick={handleSignOut} className="signout-button">
          Sign Out
        </button>
      </div>

      <div className="home-content">
        <div className="welcome-card">
          <h2>Hello! 👋</h2>
          <p>You have successfully signed in to your account.</p>
          <p>
            This is your home page where you can manage your profile and
            settings.
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Dashboard</h3>
            <p>View your analytics and statistics</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h3>Settings</h3>
            <p>Manage your account preferences</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👤</div>
            <h3>Profile</h3>
            <p>Update your personal information</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Security</h3>
            <p>Change password and security settings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
