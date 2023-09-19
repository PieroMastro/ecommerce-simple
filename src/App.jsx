import Button from './components/Button'
import Navbar from './components/navbar/Navbar'
import Shop from './components/shop/Shop'
// import ViteCounter from './components/ViteCounter'

function App() {

  return (
    <>

      <div>
        <Navbar />
        {/* <Button flag={false} data='Click Me' /> */}
      </div>
      <Shop />
      {/* <ViteCounter /> */}
    </>
  )
}

export default App
