import Header from './components/Header'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
      </main>
    </div>
  )
}

export default App

