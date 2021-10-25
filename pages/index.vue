<template>
  <v-container>
    <h1>Demo</h1>
    <AppCounter :count="count" @countUp="countUp" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapGetters('count', ['count']),
  },
  methods: {
    ...mapActions('count', ['countUp']),
  },
})
</script>
