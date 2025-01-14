<template>
    <div>
      <button @click="playTrack">Play</button>
      <div id="player"></div>
      <WebPlaybackSdkScript>
      <div>Any children</div>
      </WebPlaybackSdkScript>
    </div>
  </template>
  
  <script>
  import { inject, onMounted, ref } from 'vue';
  import useSpotifyWebPlaybackSdk from "use-spotify-web-playback-sdk";
import { SPOTIFY_TOKEN } from '../env';

  export default {
    name: 'SpotifyPlayer',
    setup() {
      const player = ref(null);
      const token = SPOTIFY_TOKEN;
      onMounted(() => {
        useSpotifyWebPlaybackSdk({
            name : "My Spotify Player",
            getOAuthToken : (cb) => { cb(token); },
            onPlayerStateChanged: (playerState) => {
                console.log(playerState);
            }
        })
      });
  
      // 반환 값
      return {
        player,
        token,
        playTrack
      };
    }
  };
  </script>
  
  <style scoped>
  #player {
    width: 100%;
    height: 300px;
    background-color: #000;
    margin-top: 20px;
  }
  </style>
  