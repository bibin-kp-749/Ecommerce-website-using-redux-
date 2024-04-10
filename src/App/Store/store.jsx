import {configureStore} from '@reduxjs/toolkit'
import getProductreducer from '../Slice/slice'
import search from '../Slice/searchSlice'

export const store=configureStore({
    reducer:{
      products:getProductreducer,
      search
    }
})