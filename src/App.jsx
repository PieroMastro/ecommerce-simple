// import './App.css'
import Button from './components/Button'
import Navbar from './components/Navbar'
// import ViteCounter from './components/ViteCounter'

function App() {

  return (
    <>

      <div>
        <Navbar />
        <Button flag={true} data='Click Me' />
      </div>
      {/* <ViteCounter /> */}
    </>
  )
}

export default App
