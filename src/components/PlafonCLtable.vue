<template>
    <b-table class="table-header" striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'plafon_cash_loan',
        },
        {
          key: 'IDR_juta',
        },
        {
          key: 'persen_bunga',
        },
        {
          key: 'jangka_waktu',
        },
        {
          key: 'pokok',
        },
        {
          key: 'bunga',
        },
        {
          key: 'total',
        }
      ]
    }
  }
}
</script>

<style>
.table-header{
    margin-top: 40px;
}
</style>
