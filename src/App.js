import './App.css';
import AboutSection from './sections/About';
import Header from './sections/Header';
import SessionsSection from './sections/Sessions';

function App() {
  return (
    <div className="App">
      <div>Hello from App</div>
      <Header />
      <AboutSection />
      <SessionsSection />
    </div>
  );
}

export default App;
