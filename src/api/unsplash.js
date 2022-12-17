import axios from "axios";

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID FGqGJLmZZfSTiaDEHL6b3EUtE1EEccmh6Eb238_q854'
    }
});