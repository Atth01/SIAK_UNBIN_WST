import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Dosen from '../Tampil/Dosen';
import Mahasiswa from '../Tampil/Mahasiswa';
import Jadwal from '../Tampil/Jadwal';
import Matkul from '../Tampil/Matkul';
import Ruangan from '../Tampil/Ruangan';

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('dosen');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus token autentikasi dari localStorage atau state global
    localStorage.removeItem('authToken');
    // Arahkan pengguna ke halaman login
    navigate('/login');
  };

  const renderPage = () => {
    switch(activeMenu) {
      case 'dosen':
        return <Dosen />;
      case 'mahasiswa':
        return <Mahasiswa />;
      case 'jadwal':
        return <Jadwal />;
      case 'matkul':
        return <Matkul />;
      case 'ruangan':
        return <Ruangan />;
      default:
        return <Dosen />;
    }
  };

  return (
    <div className="dashboard">
      <header className="header">
        <h1>SIAK Binaniaga Indonesia</h1>
        <div className="user-info">
          <span>Welcome, Admin</span>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <nav className="menu">
        <ul>
          <li className={activeMenu === 'dosen' ? 'active' : ''}>
            <a href="#dosen" onClick={() => setActiveMenu('dosen')}>
              <i className="fas fa-chalkboard-teacher"></i>
              <span>Dosen</span>
            </a>
          </li>
          <li className={activeMenu === 'mahasiswa' ? 'active' : ''}>
            <a href="#mahasiswa" onClick={() => setActiveMenu('mahasiswa')}>
              <i className="fas fa-user-graduate"></i>
              <span>Mahasiswa</span>
            </a>
          </li>
          <li className={activeMenu === 'jadwal' ? 'active' : ''}>
            <a href="#jadwal" onClick={() => setActiveMenu('jadwal')}>
              <i className="fas fa-calendar-alt"></i>
              <span>Jadwal</span>
            </a>
          </li>
          <li className={activeMenu === 'matkul' ? 'active' : ''}>
            <a href="#matkul" onClick={() => setActiveMenu('matkul')}>
              <i className="fas fa-book"></i>
              <span>Mata Kuliah</span>
            </a>
          </li>
          <li className={activeMenu === 'ruangan' ? 'active' : ''}>
            <a href="#ruangan" onClick={() => setActiveMenu('ruangan')}>
              <i className="fas fa-door-open"></i>
              <span>Ruangan</span>
            </a>
          </li>
        </ul>
      </nav>

      <main className="content">
        {renderPage()}
      </main>

      <footer className="footer">
        <p>&copy; 2024 Binaniaga Indonesia University X HPA Software. Copyright</p>
      </footer>
    </div>
  );
}

export default Dashboard;
