<template>
  <div>
    <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import dogs from '@/data/dogs'
export default {
  data () {
    return {
      items: dogs
    }
  }
}
</script>
