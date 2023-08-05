import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios as axios } from "../../Services/MyAxios";

const initialState = {
    products: [],
    status: 'idle',
    error: null
}



export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {
        const data = await axios.get("/products");
        console.log(data.data.data);
        return await data.data.data
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
})



const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers(builder) {
        builder.addCase(fetchProducts.pending, (state, { payload }) => {
            state.status = 'loading';
        })
            .addCase(fetchProducts.fulfilled, (state, { payload }) => {
                state.status = 'succeeded'
                state.products = payload;
            })
            .addCase(fetchProducts.rejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error;
            })

    }
})



export const selectAllProducts = (state, categories, search) => {
    // console.log(categories);
    let products = [];
    if (categories.length !== 0) {
        // filter the posts by category id
        state.products.products.forEach(prod => {
            categories.forEach(cat => {
                if (cat === prod.category._id) {
                    products.push(prod);
                }
            })
        })
    }
    else {
        products = state.products.products;
    }

    //extract products with match with search condition
    if (search !== '') {
        products = products.filter(product => {
            console.log(typeof (product.name));
            const productName = product.name.toLowerCase();
            search = search.toLowerCase();
            return productName.includes(search)
        })
    }


    const response = state.products
    return { response, products };
};



export const getPostsStatus = state => state.products.status;
export const getPostsError = state => state.products.error;

export default productSlice.reducer;