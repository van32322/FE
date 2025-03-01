import { createSlice } from "@reduxjs/toolkit";
import {getNewProducts} from './asynsAction'
export const productSlice = createSlice({
    name: 'products',
    initialState: {
        newProducts:null,
        errorMessage:''
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getNewProducts.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getNewProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.newProducts = action.payload;
        });

        builder.addCase(getNewProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.errorMessage = action.payload.message;
        });
    },
})
// export const {} = appSlice.actions
export default productSlice.reducer
