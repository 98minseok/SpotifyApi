<template>
    <p>장르검색</p>
    <input type ="text" v-model="genre">
    <button @click="onClickSearch">찾기</button>
    <hr/>
    <p>URL 테스트</p>
    <input type ="text" v-model="test_url">
    <button @click="onClickTest">찾기</button>
    <hr/>
    <p>앨범ID 로 데이터 가져오기</p>
    <input type ="text" v-model="album_id">
    <button @click="onClickButton">찾기</button>
    <div v-if ="album.value">
        <img :src="album.value.images[1].url">
        <p>{{ album.value.label }}</p>
        <p>{{ album.value.name }}</p>
        <ul style ="list-style: none;">
            <li v-for = "track in album.value.tracks.items">
                <p>{{track.track_number + " : " +  track.name }}</p>
                <p v-if="track.preview_url"><a :href="track.preview_url">링크</a></p>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted, watch, reactive, provide } from 'vue';
import useSpotify from '../modules/spotify';
import axios from 'axios';
export default {
    setup() {
        const verify = ref(null);
        const album_id = ref("");
        const album = reactive({})
        const test_url = ref("")
        const genre = ref("")
        const {getVerify , getAlbum , getTest , getSearchGenre} = useSpotify();
        // onMounted 훅을 사용하여 비동기 함수 실행
        provide('verify',verify);
        onMounted(async () => {
            verify.value = await getVerify();
            console.log(verify.value);
        });

        const onClickButton = async() => {
            album.value = await getAlbum(album_id.value,verify.value.access_token)
            console.log(album.value);
        }

        const onClickTest = async() => {
            const data = await getTest(test_url.value,verify.value.access_token)
            console.log(data);
        }

        const onClickSearch = async() => {
            const data = await getSearchGenre(genre.value,verify.value.access_token)
            console.log(data);
        }
        
        return { verify , onClickButton , album_id,album , test_url , onClickTest , onClickSearch,genre};
    },
    components :{
    }
};

</script>