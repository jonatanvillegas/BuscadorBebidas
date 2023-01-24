import { Modal,Image } from "react-bootstrap"
import useBebida from '../Hooks/useBebida'
export default function ModalC() {

    const {modal,handleModalClick, receta, cargando} = useBebida()
    
    const MostrarIngredientes = () => {
      let ingredientes = []

      for (let i = 1; i < 16; i++) {

        if(receta[`strIngredient${i}`]){
            ingredientes.push(
                <li key={i}>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
            )
        }
        
      }
      return ingredientes
    }
     
  return (

    !cargando && (<Modal show={modal} onHide={handleModalClick}>
        <Image
        src={receta.strDrinkThumb}
        alt={`recceta ${receta.strDrink}`}
        />
        <Modal.Header>
            <Modal.Title>
                {receta.strDrink}
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <div className="p-3">
                <h2>Instrucciones</h2>
                {receta.strInstructions}
                <h2>Ingredintes y Cantidades</h2>
                {MostrarIngredientes()}
            </div>
        </Modal.Body>
    </Modal>)
    
  )
}
