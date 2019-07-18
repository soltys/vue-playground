<template>
    <div id='app-root'>
        <div class="frame">
            top
        </div>
        <div class="gap-horizontal"></div>
        <div class="main-layout">
            <div class="column container-menu">
                <menu-component />
            </div>
            <div class="gap-vertical"></div>
            <div class="column container-view">
                <router-view />
            </div>
        </div>
        <div class="gap-horizontal"></div>
        <div class="frame">
            footer
        </div>
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({
        components: {
            MenuComponent: require('./navmenu.vue')
        }
    })
    export default class AppComponent extends Vue {
    }

</script>

<style scoped>

    .main-layout {
        display: flex;
    }

    .container-menu {
        flex-shrink: 0;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .container-view {
        width: 100%;
        align-items: stretch;
    }
</style>