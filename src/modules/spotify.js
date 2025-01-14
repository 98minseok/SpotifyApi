import { SPOTIFY_CLEINT_ID, SPOTIFY_CLEINT_SECRET } from "../env";
import axios from "axios";

const useSpotify = () => {
    const data = {
        grant_type: 'client_credentials',
        client_id: SPOTIFY_CLEINT_ID,
        client_secret: SPOTIFY_CLEINT_SECRET
    };

    const getVerify = async() => await axios.post('https://accounts.spotify.com/api/token', data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => {
        console.log(response.data);  // 응답 데이터 출력
        return response.data;  // 응답 데이터 반환
    })
    .catch(error => {
        console.error(error);
        return null;  // 오류 발생 시 null 반환
    });
    
    const getAlbum = async(album_id, verify) => await axios.get(`https://api.spotify.com/v1/albums/${album_id}`, {
            headers: {
                'Authorization': `Bearer ${verify}`
            }
        })
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            console.error("Error fetching album:", error.response ? error.response.data : error);
        });
    ;

    const getTest = async(testURL,verify) => await axios.get(testURL, {
        headers: {
            'Authorization': `Bearer ${verify}`
        }
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching album:", error.response ? error.response.data : error);
    });

    const getSearchGenre = async(genre,verify) => await axios.get(`https://api.spotify.com/v1/search?q=remaster%2520track%3ADoxy%2520artist%3AMiles%2520Davis&type=`, {
        headers: {
            'Authorization': `Bearer ${verify}`
        }
    })
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error fetching album:", error.response ? error.response.data : error);
    });
    return { getVerify , getAlbum ,getTest , getSearchGenre};  // verify 값 반환
}

export default useSpotify;
