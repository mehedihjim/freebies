import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
    </div>
  );
};

export default App;
