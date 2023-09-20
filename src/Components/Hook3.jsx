import {useState, useEffect} from 'react'
import Info from './Info';

const Hook3 = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(<Info/>);
                }, 2000)
            })
        }

        fetchData().then((result) => {
            setData(result);
        })
    }, []);

  return (
    <div>
        <h3>Usando el useEffect</h3>
        {data ? <p>{data}</p> : <p>cargando datos...</p> }
    </div>
  )
}


export default Hook3