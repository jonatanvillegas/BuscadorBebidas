import { Col,Card,Button } from "react-bootstrap"
import useBebida from '../Hooks/useBebida'

export default function Bebida({bebida}) {

    const {handleModalClick,handleObtenerId} = useBebida()
    const {strDrink, strDrinkThumb,idDrink} = bebida

  return (
    <Col md={6} lg={3}>
      <Card className="my-4">
        <Card.Img 
            variant="top"
            src={strDrinkThumb}
            alt={`bebida ${strDrink}`}
        />
        <Card.Body>
            <Card.Title>
                {strDrink}
            </Card.Title>
            <Button
            variant="danger"
            className="w-100 mt-2" 
            onClick={() => {
                handleModalClick()
                handleObtenerId(idDrink)
            }}  
            >
                Ver Receta
            </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}
