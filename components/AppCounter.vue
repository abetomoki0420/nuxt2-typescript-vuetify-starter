<template>
  <div>
    <div>Count {{ count }}</div>
    <button @click="countUp">CountUp</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    count: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  methods: {
    countUp() {
      this.$emit('countUp')
    },
  },
})
</script>
