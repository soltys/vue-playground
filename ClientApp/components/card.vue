<template>
    <div class="card">
        <router-link :to="{name:'card', params:{id:123}}" class="menu__menu-link">
            <div class="card__image-container">
                <img src="https://via.placeholder.com/360x480.jpg" />

                <p
                    class="card__description"
                >Vestibulum ornare nisl tortor, vitae fringilla metus tristique ut. Donec vitae erat aliquet mi</p>
            </div>
        </router-link>

        <CardBio :showPosition="false" />
        <CardActionList/>      
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

     @Component({
        components: {
            CardActionList: require('./card-action-list.vue'),
            CardBio: require('./card-bio.vue')
        }
    })
    export default class Card extends Vue {

    }
</script>

<style scoped>
    .card {
        width: auto;
        padding: 20px;
        border: 1px solid black;
        display: inline-flex;
        flex-direction: column;
    }

    .card__image-container {
        position: relative;
    }

    .card__description {
        margin: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        background: rgba(255, 255, 255, 0.6);
        padding: 24px 12px;
    }

    

  
</style>
