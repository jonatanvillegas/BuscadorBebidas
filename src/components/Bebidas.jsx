import useBebidas from "../Hooks/useBebida"
import { Row ,Card} from "react-bootstrap"
import Bebida from "./Bebida"

export default function Bebidas() {
    const {bebidas} = useBebidas()
  return (
    <Row className="mt-3">
        {bebidas?.map(bebida => (
            <Bebida
            key={bebida.idDrink}
            bebida={bebida}
            />
        ))}
    </Row>
  )
}
