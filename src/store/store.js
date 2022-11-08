import { configureStore} from '@reduxjs/toolkit'
import data from '../actions/dataSlice'
import detail from '../actions/dataDetailSlice'


export const store = configureStore({
    reducer:{
        data,
        detail
    }
})