import {useState, useEffect} from 'react'
import MainProducts from './MainProducts';

const DataMainProducts = () => {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../data.json');
                const json = await response.json();
                const filterData = json.filter(product => product.condition === 'new');
                setProducts(filterData);
            } catch (error) {
                console.log('Error: ' + error);
            }
        };
        fetchData();
    }, []);
    


  return (
    <div className='row'>
        {products.map((p) => {
            return(
                <div key={p.id}>
                    <MainProducts img={p.img} nombre={p.nombre} descripcion={p.descripcion} precio={p.precio} />
                </div>
            )
        })}


    </div>
  )
}

export default DataMainProducts