<template>
    <div class="frame">
        <Card />
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import Card from './card';

     @Component({
        components: {
            Card: require('./card.vue')
        }
    })
    export default class CardView extends Vue {        
    }
</script>
