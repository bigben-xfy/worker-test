<template>
  <div class="home">
    <div>123</div>
  </div>
</template>

<script>
import Worker from './file.worker.js'
// import Worker from 'worker-loader!./file.worker.js'

export default {
  name: "Home",
  mounted(){
    console.log('init')

    const worker = new Worker()
    worker.postMessage({ a: 1 })
    worker.onmessage = event => {
      console.log('home', event)
    }
  },
  methods: {
    
  }
};
</script>
