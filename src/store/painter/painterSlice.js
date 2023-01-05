import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import painterServise from '../services/paintersService'

export const getPainter = createAsyncThunk('GET_PAINTER', async (id, thunkAPI) => {
    try {
        return await painterServise.getPainter(id);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

export const createPainter = createAsyncThunk('CREATE_PAINTER', async (painterData, thunkAPI) => {
    try {
        return await painterServise.createPainter(painterData);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data)
    }
})

const painterSlice = createSlice({
    name: 'plane',
    initialState: {
        plane: null,
        isError: false,
        isLoading: false,
        message: '',
        errors: null
    },
    reducers: {
        resetPainterErrors: (state) => {
            state.errors = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPainter.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getPainter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.plane = action.payload[0];
            })
            .addCase(getPainter.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload.message;
                state.plane = null;
            })
            .addCase(createPainter.pending, (state) => {
                state.isLoading = true;
                state.errors = null;
            })
            .addCase(createPainter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.errors = null;
            })
            .addCase(createPainter.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.errors = action.payload;
            })
    }
});

export const { resetPainterErrors } = painterSlice.actions;
export default painterSlice.reducer;
