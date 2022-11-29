import data from "./Data/Data";
import Hero from "./components/Hero"
import Header from "./components/Header";
import Routess from "./Routes/Routes";

const App = () => {
  const { items } = data;
  
  
  return (
    <div>
    <Header />
    <Hero />
    {/* We then pass the productitems as the props to the routes component */}
    <Routess items={items} />
  </div>
  );
}

export default App;