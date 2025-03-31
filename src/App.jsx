import "./App.css";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";

function App() {
  return (
    <div className="App">
      <Hero />
      <Education />
      <Skills />
      <Experience />
      {/* <Banner />
      <Skills />
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;
