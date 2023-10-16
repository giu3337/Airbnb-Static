import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import data from "./data"
import { CardSection } from "./components/CardSection";




function App() {
 
  return (
    <div>
      <Nav />
      <Hero />
      <CardSection data={data}/>
    </div>
  )
}

export default App
