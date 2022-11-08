import React from 'react'
import { useSelector } from 'react-redux'

const DetailList = ({comics}) => {

    const loading = useSelector( state => state.detail.loading)

  return (

    loading ? <p>Yükleniyor...</p>
    :
        <div className='card detail-card' key={comics.id}>
            <div className='card-img'>
                <img
                    src={comics.thumbnail.path + "." + comics.thumbnail.extension}  
                />
                </div>
            <div className='card-title'>{new Date(comics.dates[0].date).getFullYear()} - {comics.title}</div>
        </div>
        
  )
}

export default DetailList