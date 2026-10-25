import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: 'white' }}>
      <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Home</Link>
      <Link to="/dashboard" style={{ color: 'white' }}>Dashboard</Link>
    </nav>
  )
}