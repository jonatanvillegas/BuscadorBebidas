import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriaProvider } from "./context/CategoriaProvider"
import { BebidasProvider } from "./context/BebidasProvider"
import Bebidas from "./components/Bebidas"
import ModalC from "./components/Modal"
function App() {
  
  return (
    <CategoriaProvider>
      <BebidasProvider>

        <header className='py-4 '>
          <h1>Buscador Bebidas</h1>
        </header>
        <Container className="mt-4">
          <Formulario />
          <Bebidas/>
          <ModalC/>
        </Container>
      </BebidasProvider>
    </CategoriaProvider>

  )
}

export default App
