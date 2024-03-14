import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postService} from "../services/postService";
import axios from "axios";

let initialState = {
    episodesInt: [],
    charactersInt: [],
    loading: null,
    error: null,


}

const getAllEpisodes = createAsyncThunk(
    'RickAndMortySlice/getAllEpisodes',
    async (_, thunkAPI) => {
        try {
            const {data} = await postService.episodes.getAllEpisode();
            return data.results
        } catch (e) {
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const getEpisode = createAsyncThunk(
    'RickAndMortySlice/getEpisode',
    async (oneEpisode, thunkAPI) => {
        try {
            const response = await axios.get(oneEpisode);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const getCharByEpisode = createAsyncThunk(
    'RickAndMortySlice/getCharByEpisode',
    async (id, thunkAPI) => {
        try {
            const {data} = await postService.episodes.getEpisodebyId(id);
            return data
        } catch (e) {
            const error = e.response.data
            return thunkAPI.rejectWithValue(error)
        }
    }
)


const RickAndMortySlice = createSlice({
    name: 'RickAndMortySlice',
    initialState,
    reducers: {
        setEpisodes: (state, action) => {
            state.episodesInt = action.payload.map(episode => ({...episode}))
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getAllEpisodes.fulfilled, (state, action) => {
                state.episodesInt = action.payload;
                state.loading = false
            })
            .addCase(getAllEpisodes.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllEpisodes.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(getCharByEpisode.fulfilled, (state, action) => {
                state.charactersInt = action.payload
                state.loading = false
            })
            .addCase(getCharByEpisode.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getCharByEpisode.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getEpisode.fulfilled, (state, action) => {
                state.characterOne = action.payload
                state.loading = false
            })
})

const {reducer: RickAndMortyReducer, actions} = RickAndMortySlice;

const RickAndMortyActions = {
    ...actions,
    getAllEpisodes,
    getCharByEpisode,
    getEpisode
}

export {
    RickAndMortyReducer,
    RickAndMortyActions,
    getCharByEpisode,
    getEpisode
}