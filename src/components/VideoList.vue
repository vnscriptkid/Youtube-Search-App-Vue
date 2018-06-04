<template>
    <ul class="list-group list-unstyled col-md-4">
        <VideoListItem             
            v-for="video in videoList"
            :video="video"
            :key="video.id.videoId"
            @itemSelected="onItemSelect"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    props: {
        'videoList': Array
    },
    components: {
        VideoListItem
    },
    methods: {
        onItemSelect(item) {
            this.$emit('itemSelected', item);
        }
    }
}
</script>

<style>

</style>


