import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import paintersServise from '../services/paintersService'

export const getPainters = createAsyncThunk('GET_PAINTERS', async (_, thunkAPI) => {
    try {
        return await paintersServise.getPainters();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const paintersSlice = createSlice({
    name: 'painters',
    initialState: {
        painters: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers: (builder) => {
        builder.addCase(getPainters.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getPainters.fulfilled, (state, action) => {
            state.isLoading = false;
            state.painters = action.payload
        });
        builder.addCase(getPainters.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload.message;
            state.painters = null;
        });
    }
})

export default paintersSlice.reducer;
