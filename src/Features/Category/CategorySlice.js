import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { myAxios as axios } from "../../Services/MyAxios";



const initialState = {
    categories: [],
    status: 'idle',
    error: null
}


export const fetchCategories = createAsyncThunk("categories/fetchCategories", async (_, { rejectWithValue }) => {
    try {
        const data = await axios.get("/categories");
        return data.data.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue(error.message)
    }
})


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state, { payload }) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, { payload }) => {
                state.status = 'succeeded';
                console.log(payload.categories);
                state.categories = payload.categories.map(cat => {
                    return (
                        {
                            key: cat._id,
                            text: cat.name,
                            value: cat._id
                        }
                    )
                })
            })
            .addCase(fetchCategories.rejected, (state, { error }) => {
                state.status = 'failed';
                state.error = error;
            })
    }

})


export const getAllCategories = state => state.categories.categories;

export default categorySlice.reducer