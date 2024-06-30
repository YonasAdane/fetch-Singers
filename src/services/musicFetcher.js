import axios from "axios";
export function fetchMusicData(){
    return axios.get("http://localhost:3000/musics");
}