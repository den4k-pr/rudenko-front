import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesServise from '../services/categoriesService';

export const getCategories = createAsyncThunk('GET_CATEGORIES', async (_, thunkAPI) => {
    try {
        return await categoriesServise.getCategories();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        categories: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.isLoading = false;
            state.categories = action.payload
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.categories = null;
        });
    }
})

export default categoriesSlice.reducer;