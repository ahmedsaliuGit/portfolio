import {
  Hero,
  Projects,
  Skills,
  Experiences,
  Contact,
  Footer,
} from "../components";

function App() {
  return (
    <main className="flex flex-col items-center justify-center pt-12 px-0">
      <Hero />
      <Skills />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
