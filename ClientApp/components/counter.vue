<template>
    <div class="frame">
        <h1>Counter</h1>

        <p>This is a simple example of a Vue.js component.</p>

        <p>
            Current count:
            <strong>{{ count }}</strong>
        </p>

        <button @click="increment">Increment</button>
        <button @click="decrement">Decrement</button>
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class Counter extends Vue {
        count = 0;

        increment() {
            this.count++;
        }
        decrement() {
            this.count--;
        }
    }
</script>
