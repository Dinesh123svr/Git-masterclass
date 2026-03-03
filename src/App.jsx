import Header from './components/Header'
import Hero from './components/Hero'
import GitCommands from './components/GitCommands'
import Visualizer from './components/Visualizer'
import Quiz from './components/Quiz'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <GitCommands />
        <Visualizer />
        <Quiz />
      </main>
      <Footer />
    </div>
  )
}

export default App
