
import {memo} from 'react'
import {  Link } from 'react-router-dom';


const List = ({newData, loading}) => {

  return (
    <main>          
        <div className='cards-list'>                 
            {                
                newData && newData.map((item, index) => {
                 const characterID = {
                    name: item.name,
                    des : item.description,
                    img : `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    date : item.modified
                 }
                    return(
                        <Link to={`/detail/${item.id}`} key={index} state={characterID}>
                            <div className='card' key={item.id}>
                                <div className='card-img'>
                                    <img
                                        src={item.thumbnail.path + "." + item.thumbnail.extension}  
                                    />
                                </div>
                                <div className='card-title'>{item.name}</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
        {
            loading && <div className='row loading'>
            <h4>Yükleniyor</h4><div className="square"></div>                
        </div>
            
        }
    
</main>
  )
}

export default memo(List)