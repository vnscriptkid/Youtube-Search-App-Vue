<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"/>
        <div class="row">
            <VideoDetail :video="selectedVideo"/>
            <VideoList @itemSelected="onItemSelect" :videoList="videos"></VideoList>
        </div>
    </div>
</template>
 
<script>
    import SearchBar from './components/SearchBar';
    import VideoList from './components/VideoList';
    import VideoDetail from './components/VideoDetail';
    import axios from 'axios';
    const API_KEY = 'AIzaSyC06pp-xtgrVgNBPqU4JY8OiZ3fzgyTFjI';
    
    export default {
        name: 'App',
        components: {
            SearchBar,
            VideoList,
            VideoDetail
        },
        data() {
            return {
                videos: [],
                selectedVideo: null
            }
        }, 
        methods: {
            onTermChange(term) {
                console.log('app: ', term);
                axios.get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: term
                    }
                }).then(res => {
                    // console.log(res);
                    this.videos = res.data.items;
                    console.log(this.videos);
                })
            },
            onItemSelect(item) {
                console.log('item selected from app', item);
                this.selectedVideo = item;
            }
        }
    };
</script>

