import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGit = createAsyncThunk(
    'app/fetchGit',
    async (param, thunkAPI) => {
      const response = await axios.get(`https://api.github.com/${param}`)
      return [response.data, 0]
    }
  )

const initialState = {
  data: {},
  status: ''
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    cleanData: state => {
        state.data = {}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGit.fulfilled, (state, action) => {
        if (action.payload[1] === 0) {
            state.data = action.payload[0]
            state.status = 'success'
        } else {
            state.status = 'error'
        }
    })
  },
})

// Action creators are generated for each case reducer function
export const { setData, cleanData } = appSlice.actions

export default appSlice.reducer