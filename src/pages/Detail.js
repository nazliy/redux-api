import React, { useEffect } from 'react'
import {fetchDataDetail} from '../actions/dataDetailSlice'
import { useDispatch, useSelector } from 'react-redux'
import {  useLocation, useParams } from 'react-router-dom'
import DetailList from '../components/DetailList'

const Detail = () => {
    const {id} = useParams()
    const location = useLocation()
    const dispatch = useDispatch()
    const detailData = useSelector( state => state.detail.dataDetail)
    const character = location.state

    useEffect(() => {
        dispatch(fetchDataDetail(id))
    },[dispatch,id])

  return (
    <main>
        <div className='row detail-top'>
            <div className='img-left'>
                <img src={character.img} alt={character.name}/>
            </div>
            <div className='detail-right'>
                <h2>{character.name}</h2>
                <pre>Düzenleme Tarihi : {new Date(character.date).getFullYear()}</pre>
                <p>{character.des}</p>
            </div>
        </div>
        <div className='row'>
            <h3 className='comics-title'>Çizgi Romanları:</h3>
            <div className='cards-list'>             
                {  
                    detailData && detailData.map( detail => {
                        return(
                        detail.length == 0 ? 
                        <p>Çizgi Romanı yoktur.</p>
                        :
                        detail.map( (item, index) => {
                            return(                                    
                                <DetailList key={index} comics={item}/>
                            )
                        }) 
                           
                        )
                    }) 
                }
            </div>
        </div>
    </main>
  )
}

export default Detail