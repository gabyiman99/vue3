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
        { keterangan: 'Omset / bulan LKA', satuan: 'IDR Juta', nominal: 'input'},
        { keterangan: 'Persen HPP', satuan: '%', nominal: 'input'},
        { keterangan: 'AR', satuan: 'Bulan', nominal: 'input'},
        { keterangan: 'Inv', satuan: 'Bulan', nominal: 'input'},
        { keterangan: 'AP', satuan: 'Bulan', nominal: 'input'},
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