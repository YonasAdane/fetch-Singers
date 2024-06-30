import { createSlice } from "@reduxjs/toolkit";

const initialState={
    musicData:null,
    loading: false,
    error: null,
};
/**
 * {
        "artist": "Ariana Grande",
        "songTitle": "7 Rings",
        "profilePicture": "arianaGrande.jpg",
        "albumArt": "https://example.com/7_rings_album_art.jpg",
        "audioSource": "https://example.com/7_rings_audio.mp3"
        },
 */
const musics=createSlice({
    name:"musics",
    initialState,
    reducers:{
        getMusicsRequest:(state)=>{
            state.loading=true;
        },
        getMusicsSuccess:(state,action)=>{
            state.loading=false;
            state.musicData=action.payload;
        },
        getMusicsFailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
    }
});
export default musics.reducer;
export const {getMusicsFailure,getMusicsRequest,getMusicsSuccess}=musics.actions;
/**
 * fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
 */