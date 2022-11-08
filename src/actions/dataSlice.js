import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data :[],
    loading : false,
    newData :[]
}

export const fetchData = createAsyncThunk('data/fetchData', async (offset) => {
    try{
        const res = await axios.get(`${process.env.REACT_APP_API}?limit=10&offset=${offset}&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
        return [...res.data.data.results]
    }catch(err){
        console.log(err)
    }
})

const data = createSlice({
    name:'data',
    initialState,
    reducers :{
       
    },
    extraReducers(builder){
        builder
        .addCase(fetchData.pending, (state, action) => {
            console.log('pending')
            state.loading = true
        })
        .addCase(fetchData.fulfilled, (state, action) => {
           state.data = action.payload
           state.newData = [...state.newData, ...state.data]
           state.loading = false          
        })
        .addCase(fetchData.rejected, (state, action) => {
            state.loading = false
            console.log('rejected')
        })
    }
})


export default data.reducer