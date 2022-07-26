import { useRef } from 'react';
import './App.css';
import AboutSection from './sections/About';
import BookSection from './sections/Book';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import Header from './sections/Header';
import SessionsSection from './sections/Sessions';

function App() {
  const sessionsRef = useRef(null);
  const bookRef = useRef(null);
  const contactRef = useRef(null);

  // const refs = [sessionsRef];

  return (
    <div className="App">
      <Header refes={[sessionsRef, bookRef, contactRef]} />
      <AboutSection />
      <SessionsSection refe={sessionsRef} />
      <BookSection refe={bookRef} />
      <ContactSection refe={contactRef} />
      <FooterSection />
    </div>
  );
}

export default App;
