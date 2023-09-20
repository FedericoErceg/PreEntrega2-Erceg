import {useState} from 'react'
import Personaje from './Personaje'

const PersonajesContainer = () => {

    const[persona, setPersona] = useState([
        {
            id: 1,
            name: 'John',
            job: 'Inspector de seguridad',
            img: 'https://previews.123rf.com/images/ximagination/ximagination1202/ximagination120200305/12150257-un-inspector-de-seguridad-en-la-construcci%C3%B3n-que-marca-su-lista.jpg'
        },
        {
            id: 2,
            name: 'Carla',
            job: 'Dentista',
            img: 'https://odontologiaespecializadasevilla.com/wp-content/uploads/2018/07/dentista-sevilla.jpg'
        },{
            id: 3,
            name: 'Noel',
            job: 'Comisario de Policia',
            img: 'https://www.laopinionsemanario.com.ar/wp-content/uploads/2022/04/German-Pahuasi-comisario-jefe-estacion-policia-comunal.png'
        },{
            id: 4,
            name: 'Matias',
            job: 'Mecanico Dental',
            img: 'https://www.essc.edu.co/wp-content/uploads/2014/05/m19.png'
        },
    ])

  return (
    <div className='row'>
        {persona.map((p) => {
            return(
                <div>
                    <Personaje
                    id={p.id}
                    name={p.name}
                    job={p.job}
                    img={p.img}
                    />
                </div>
            )
        })}

    </div>
  )
}

export default PersonajesContainer