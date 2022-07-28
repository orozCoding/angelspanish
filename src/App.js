import { useRef } from 'react';
import './App.css';
import AboutSection from './sections/About';
import BookSection from './sections/Book';
import ContactSection from './sections/Contact';
import FooterSection from './sections/Footer';
import Header from './sections/Header';
import SessionsSection from './sections/Sessions';
import { animated, useSpring, easings } from 'react-spring'

function App() {
  const sessionsRef = useRef(null);
  const bookRef = useRef(null);
  const contactRef = useRef(null);
  const springStyle = useSpring({ to: { opacity: 1, y: 0 }, from: { opacity: 0, y: -100 },
  config: { duration: 1500,
    easing: easings.easeInOutQuart } });

  return (
    <animated.div style={springStyle}>
      <div className="App">
        <Header refes={{ sessionsRef, bookRef, contactRef }} />
        <AboutSection />
        <SessionsSection refe={sessionsRef} />
        <BookSection refe={bookRef} />
        <ContactSection refe={contactRef} />
        <FooterSection />
      </div>
    </animated.div>
  );
}

export default App;
