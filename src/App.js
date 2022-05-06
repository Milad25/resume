import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Objective from './components/Objective';
import Skillset from './components/Skillset';

function App() {
  return (
    <div className='pb-10'>
      <Header />
      <div
        className='container mx-auto grid grid-cols-1 gap-4 
      px-5 sm:px-0
      sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      >
        <Contact />
        <Objective />
        <Education />
        <Experience />
        <Skillset />
      </div>
    </div>
  );
}

export default App;
