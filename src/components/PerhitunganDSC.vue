<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'keterangan',
        },
        {
          key: 'satuan',
        },
        {
          key: 'nominal',
        }
      ],
      items: [
        { keterangan: 'Net Profit / Bulan', satuan: '%', nominal: 'input'},
        { keterangan: 'Net Profit / Bulan', satuan: 'IDR Juta', nominal: '-'}
      ]
    }
  }
}
</script>
<style>
.table{
  margin-top: 40px;
}
</style>