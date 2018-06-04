<template>
    <div>
        <input @input="onInput" type="text">
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    methods: {
        onInput: function(e) {
            this.$emit('termChange', e.target.value); 
        }
    }
}
</script>

<style scoped>
    div {
        width: 75%;
        margin: 20px auto;
    }

    input {
        display: inline-block;
        width: 100%;
        max-width: 400px;
    }
</style>


