import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );
  
  return (
    <>
        <h3>{ category }</h3>
        {
          isLoading && ( <h2>Cargando...</h2> )
        }
        <div className="card-grid">
          {
            images.map( ( image ) => (
              <GifItem
                key={ images.id }
                { ...image } //Con este código el componente recibe las props del objeto
              />
            ))
          }
        </div>
    </>
  )
}
