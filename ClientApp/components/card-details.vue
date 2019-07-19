<template>
    <div class="frame">
        <div class="card-details">
            <img src="https://via.placeholder.com/360x120.jpg" />
            <CardBio :showPosition="true"></CardBio>
            <CardDescription />
            <CardActionList />
        </div>
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({
        components: {
            CardActionList: require('./card-action-list.vue'),
            CardBio: require('./card-bio.vue'),
            CardDescription: require('./card-description.vue')
        }
    })
    export default class CardDetails extends Vue {
        mounted() {
            console.log(this.$route.params.id)
        }
    }
</script>
<style scoped>
    .card-details {
        width: auto;
        padding: 20px;
        border: 1px solid black;
        display: inline-flex;
        flex-direction: column;
    }
</style>
