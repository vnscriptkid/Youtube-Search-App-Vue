<template>
    <div v-if="video" class="col-md-8">        
            <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" width="560" height="315" :src="videoUrl" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
            <div class="details">
                <h5 class="card-title">{{ video.snippet.title }}</h5>
                <p class="card-text">{{ video.snippet.description }}</p>
            </div>
    </div>
    
</template>

<script>
export default {
    name: 'VideoDetail',
    computed: {
        imgUrl() {
            return this.video.snippet.thumbnails.high.url
        },
        videoUrl() {
            return `https://www.youtube.com/embed/${this.video.id.videoId}`;
        }
    },
    props: {
        video: Object
    }
}
</script>

<style>
    .details {
        padding: 10px;
    }
</style>


