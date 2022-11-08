import React from 'react'
import List from '../components/List';
import {useSelector,useDispatch}  from 'react-redux'
import { fetchData} from '../actions/dataSlice'
import {useEffect} from 'react'

const Home = () => {
    let offset = 0
    const dispatch = useDispatch()
    const loading = useSelector(state => state.data.loading)
    const newData = useSelector(state => state.data.newData)
    
    const loadMoreData = () => {
      offset += 10; 
      dispatch(fetchData(offset))     
    }
  
    const handleScroll = (e) => {
        if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight){
          loadMoreData()     
      }
    }
  
    useEffect(() => {    
      dispatch(fetchData(offset=0))   
      window.addEventListener('scroll', handleScroll)  
   },[])
    
  return (
    <List newData={newData} loading={loading}/>
  )
}

export default Home