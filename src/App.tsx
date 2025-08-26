import './App.css'
import Navbar from './navbar'

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: '90px', padding: '20px' }}>
        <h1>Welcome to Company</h1>
        <p>This is the main content area. The navbar is now fixed at the top.</p>
      </div>
    </div>
  )
}

export default App
