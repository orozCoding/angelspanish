import './App.css';
import AboutSection from './sections/About';
import BookSection from './sections/Book';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import Header from './sections/Header';
import SessionsSection from './sections/Sessions';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection />
      <SessionsSection />
      <BookSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}

export default App;
