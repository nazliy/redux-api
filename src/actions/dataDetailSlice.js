import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    dataDetail : [],
    loading : false,
}

export const fetchDataDetail = createAsyncThunk('detail/fetchDataDetail', async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API}/${id}/comics?limit=10?&ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH}`)
    return [res.data.data.results]
})

export const detail = createSlice({
    name : 'detail',
    initialState,
    reducers : {

    },
    extraReducers(builder){
        builder
        .addCase(fetchDataDetail.pending, (state,action) => {
            console.log('pending')
            state.loading = true
        })
        .addCase(fetchDataDetail.fulfilled, (state,action) => {
            state.dataDetail = action.payload
            state.loading = false
        })
        .addCase(fetchDataDetail.rejected, (state) => {
            console.log('rejected')
            state.loading = false
        })
    }
})

export default detail.reducer