import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoriesServise from '../services/categoriesService';

export const getCategory = createAsyncThunk('GET_CATEGORY', async (id, thunkAPI) => {
    try {
        return await categoriesServise.getCategory(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createCategory = createAsyncThunk('CREATE_CATEGORY', async (categoryData, thunkAPI) => {
    try {
        return await categoriesServise.createCategory(categoryData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const categorySlice = createSlice({
    name: 'plane',
    initialState: {
        plane: null,
        isError: false,
        isLoading: false,
        message: '',
        errors: null
    },
    reducers: {
        resetCategoryErrors: (state) => {
            state.errors = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.plane = action.payload[0];
            })
            .addCase(getCategory.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload.message;
                state.plane = null;
            })
            .addCase(createCategory.pending, (state) => {
                state.isLoading = true;
                state.errors = null;
            })
            .addCase(createCategory.fulfilled, (state) => {
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(createCategory.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errors = action.payload;
            })
    }
});

export const { resetCategoryErrors } = categorySlice.actions;
export default categorySlice.reducer;