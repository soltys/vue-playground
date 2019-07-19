<template>
    <div>
        <div class="card__bio-entry">
            <span class="card__bio-header">
                Julie Brown
                <span class="card__bio-description">(JUBR)</span>
            </span>
            <div class="card__bio-age-container" title="Age">
                <i class="card__bio-age-icon far fa-calendar"></i>
                <p class="card__bio-age">30</p>
            </div>
        </div>
        <div v-show="showPosition">
        <div  class="card__bio-entry">
            <span class="card__bio-header">Position</span>
            <div class="card__bio-age-container">
                <span class="card__bio-description">Software Architect</span>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component({
        props: {
            showPosition: Boolean
        }
    })
    export default class CardBio extends Vue {
    }

</script>

<style scoped>
    .card__bio-entry {
        display: flex;
        justify-content: space-between;

        padding: 6px 0px;
    }

    .card__bio-header {
        font-size: 18px;
        font-weight: bold;
    }
    .card__bio-description {
        font-weight: normal;
    }

    .card__bio-age-container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card__bio-age {
        margin: 0px 0px 0px 10px;
        font-size: 18px;
    }
    .card__bio-age-icon {
        font-size: 12px;
    }
</style>
