<template>
  <div>
    <div>Count {{ count }}</div>
    <v-btn class="mt-2" @click="countUp">CountUp</v-btn>
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
