<template>
    <li class="list-group-item media" @click="onItemSelect">
        <img class="mr-3" :src="thumbnailUrl" alt="Generic placeholder image">
        <div class="media-body title">
            <!-- <h5 class="mt-0 mb-1">{{ video.snippet.title }}</h5> -->
            {{ video.snippet.title }}
        </div>        
    </li>
</template>

<script>
export default {
    name: 'VideoListItem',
    computed: {
        thumbnailUrl() {
            return this.video.snippet.thumbnails.default.url;
        }
    },
    props: {
        video: Object
    },
    methods: {
        onItemSelect() {
            this.$emit('itemSelected', this.video);
        }
    }
}
</script>

<style scoped>
    li {
        display: flex;
        cursor: pointer;
    }

    li:hover {
        background-color: #eee;
    }

    .title {
        padding: 5px;
    }
</style>


