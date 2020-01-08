<template>
    <div class="webpack">
        <h1>webpack-demo!</h1>
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        <About />
    </div>
</template>


<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    import About from '@/views/About.vue'
    export default {
      name: 'home',
      components: {
        HelloWorld,
        About,
      }
    }

</script>