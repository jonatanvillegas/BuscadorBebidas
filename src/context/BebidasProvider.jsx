import { createContext , useState, useEffect} from "react";
import axios from "axios";

const BebidasContext = createContext()

const BebidasProvider = ({ children }) => {

    const [bebidas, setBebidas] = useState([])
    const [modal , SetModal]= useState(false)
    const [ bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando]= useState(false)

    useEffect(()=>{
        const ObtenerReceta = async id => {
            setCargando(true)
          if (!bebidaId)return //si esta como null no retornara nada 

          try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

            const {data} = await axios(url)
            setReceta(data.drinks[0])

          } catch (error) {
            console.log(error)
          }finally{
            setCargando(false)
          }
    
        }
        
        ObtenerReceta()

    },[bebidaId])

    const BuscarBebidas = async datos => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const { data } = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }

    }
    const handleModalClick = () => {
      SetModal(!modal)
    }
    const handleObtenerId = (id) => {
      setBebidaId(id)
    }

    return (
        <BebidasContext.Provider
            value={{
                BuscarBebidas,
                bebidas,
                handleModalClick,
                modal,
                handleObtenerId,
                receta,
                cargando
            }}
        >
            {children}
        </BebidasContext.Provider>
    )
}
export {
    BebidasProvider
}
export default BebidasContext