import {createSlice} from '@reduxjs/toolkit'
import  {products,deleteUser,users,addUser, deleteProduct, addproduct, cartProduct, userBlock, deleteCart, addToCart}  from '../Thunk/thunk';

const initialState={
    product:[],
    user:[],
    cart:[]
}

export const slice=createSlice({
    name:'all',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(products.fulfilled, (state, action) => {
          state.product = action.payload
        })
        builder.addCase(users.fulfilled,(state,action)=>{
            state.user=action.payload
        })
        builder.addCase(deleteUser.fulfilled,()=>
           window.alert("deleted")
        )
        builder.addCase(deleteProduct.fulfilled,()=>
           window.location.reload().alert("deleted")
        )
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.user=[...state.user,action.payload]
        })
        builder.addCase(addproduct.fulfilled,(state,action)=>{
            state.product=[...state.product,action.payload]
        })
        builder.addCase(cartProduct.fulfilled,(state,action)=>{
            state.cart=action.payload
        })
        builder.addCase(userBlock.fulfilled,()=>{
            window.alert("user blocked")
        })
        builder.addCase(deleteCart.fulfilled,()=>{
            window.alert("Item Deleted successfully")
            window.location.reload()
        })
        builder.addCase(addToCart.fulfilled,(state,action)=>{
            state.cart=[...state.cart,action.payload]
            alert("addedd  to cart successfully")
        })
      },
})

export default slice.reducer
