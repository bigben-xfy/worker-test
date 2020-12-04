<template>
  <div class="home">
    <div>{{ count }}</div>
    <button @click="exportClick">export</button>
    <button @click="closeWorker">close</button>
  </div>
</template>

<script>
import Worker from "./file.worker.js";
// import Worker from 'worker-loader!./file.worker.js'

export default {
  name: "Home",
  data() {
    return {
      count: 100,
      worker: null
    };
  },
  mounted() {
    // console.log("init");

    const worker = new Worker();
    // worker.postMessage({
    //   msg: "export",
    //   data: { a: 1 }
    // });
    worker.onmessage = event => {
      console.log("home", event);
    };
    worker.onerror = error => {
      console.log(error);
    };

    this.worker = worker;
  },
  methods: {
    exportClick() {
      this.worker.postMessage({
        msg: "export",
        data: { a: 1 }
      });
    },
    closeWorker() {
      this.worker.terminate();
    }
  }
};
</script>
