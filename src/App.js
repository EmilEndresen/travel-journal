import "./App.css"
import Nav from "./components/Nav.js"
import Card from "./components/Card.js"
import Data from "./data.js"

function App() {
  const cards = Data.map((item) => {
    return <Card key={item.id} item={item} />
  })

  return (
    <div className="App">
      <Nav />
      <section className="cards">{cards}</section>
    </div>
  )
}

export default App
