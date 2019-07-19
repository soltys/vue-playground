<template>
    <div>
        <CardView/>
        <div class="gap-horizontal"></div>
        <div class="frame">
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application, built with:</p>
            <p>
                Vestibulum ornare nisl tortor, vitae fringilla metus tristique ut. Donec vitae erat aliquet mi facilisis venenatis. Aliquam at elit faucibus, mattis ipsum eu, posuere velit. Suspendisse fermentum ullamcorper auctor. Ut sit amet metus eu sem efficitur pellentesque. Mauris interdum viverra rhoncus. Fusce efficitur elementum mi, eu placerat ligula sagittis quis. Fusce tempor et nunc non lobortis. Nulla facilisi. Fusce massa urna, eleifend ultrices vulputate sit amet, hendrerit ac risus. Aliquam faucibus mi a felis lobortis, eget ultrices nibh egestas. Nulla a nisl enim.
            </p>
            <p>
                Suspendisse pharetra, neque id blandit consequat, urna felis iaculis urna, id sagittis leo dui in lacus. Sed feugiat viverra ante vitae congue. Nullam ac eros euismod, varius neque sit amet, vehicula lorem. Suspendisse non massa viverra, mollis nibh nec, venenatis augue. Donec viverra neque et varius ullamcorper. Etiam blandit lorem luctus rutrum mollis. Praesent laoreet, nisi vel tristique commodo, nulla arcu luctus velit, in ultrices magna sem in massa. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet massa nibh. Aenean porttitor orci sapien, quis hendrerit nisi varius id. Vivamus egestas ullamcorper justo in sagittis. Pellentesque egestas elit ac sem gravida, malesuada iaculis arcu mattis. Praesent vel enim elit. Quisque sit amet commodo quam, a pellentesque elit. Cras dictum justo at arcu viverra aliquet.
            </p>
        </div>
    </div>
</template>

<script language="typescript">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    
    @Component({
        components: {
            CardView: require('./card-view.vue')
        }
    })
    export default class Home extends Vue {
        
    }
</script>