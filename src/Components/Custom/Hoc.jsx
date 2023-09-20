import {useState} from 'react'
// Hight Order Companent  --> Cuando tenes cosas que se repiten como pro ejemplo el ejemplo de las subastas con los mismo elementos que dio la profesora de los archivos Persona1 y Persona2 se usan este Hoc para simplificarnos mas la vida.
// 
const Hoc = (OriginalComponent) => {

    function NewComponent(props){
        const [oferta, setOferta] = useState(0);
        const incremetarOferta = () => {
            setOferta(oferta + 100);
        }

        return <OriginalComponent incremetarOferta={incremetarOferta} oferta={oferta} {...props} /> 
    } 
    return NewComponent
}

export default Hoc;