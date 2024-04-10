import {createSlice} from '@reduxjs/toolkit'

const searchSlice=createSlice({
    name:'search',
    initialState:{
        search:[]
    },
    reducers:{
        searchItem:(state,action)=>{
            state.search=action.payload
            console.log(state.search,"hh");
        }
    }
})

export default searchSlice.reducer
export const{searchItem}=searchSlice.actions