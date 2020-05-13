<template>
  <div>
    <h1>Cats for Adoption</h1>
    <b-table striped hover :items="items"></b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'
export default {
  data () {
    return {
      items: cats
    }
  }
}
</script>
