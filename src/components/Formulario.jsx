import { Button,Col, Form,Row,Alert } from "react-bootstrap"
import { useState } from "react"
import useCategoria from '../Hooks/useCategoria'
import useBebidas from "../Hooks/useBebida"


export default function Formulario() {

    const {categorias} = useCategoria()
    const { BuscarBebidas} = useBebidas()
    
    const [busqueda, setBusqueda] = useState({
        nombre: '',
        categoria:''
    })
    const [error, setError] = useState('')

    const handleSubmit = e =>{
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setError('Todos los Campos son obligatorios')
            return
        }
        setError('')

        BuscarBebidas(busqueda)
    }
    
  return (
    <Form
        onSubmit={handleSubmit}
    >   
        {error && <Alert variant="danger" className="text-center">{error}</Alert>}
        <Row>
            <Col md={6}>
                <Form.Group className="my-3">
                    <Form.Label htmlFor="nombre" >
                        Nombre Bebida
                    </Form.Label>
                    <Form.Control 
                      id="nombre"
                      type="text"
                      placeholder="Ej: tequila, vodka etc"
                      name="nombre"
                      value={busqueda.nombre}
                      onChange={e => setBusqueda({
                        ...busqueda,
                        [e.target.name]: e.target.value
                      })}
                    />
                </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="my-3">
                      <Form.Label htmlFor="categoria">
                          Categoria Bebida
                      </Form.Label>
                      <Form.Select
                          id="categoria"
                          name="categoria"
                          value={busqueda.categoria}
                          onChange={e => setBusqueda({
                              ...busqueda,
                              [e.target.name]: e.target.value
                          })}
                      >
                          <option >-- Seleccione</option>
                          {categorias?.map(categoria => (
                              <option
                                  key={categoria.strCategory}
                                  value={categoria.strCategory}
                              >
                                  {categoria.strCategory}
                              </option>
                          ))}
                      </Form.Select>
                </Form.Group>
            </Col>
        </Row>
          <Row className="justify-content-end">
              <Col md={3}>
                  <Button
                    variant="danger"
                    className="text-uppercase w-100"
                    type="submit"
                  >
                      Buscar Bebida
                  </Button>
              </Col>
          </Row>
    </Form>
  )
}
