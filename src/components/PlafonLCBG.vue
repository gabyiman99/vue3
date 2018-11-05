<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'plafon_LC_BG'
        },
        {
          key: 'IDR_juta'
        },
        {
          key: 'persen_komisi'
        },
        {
          key: 'total'
        }
      ],
      items: [
        { plafon_LC_BG: 'Letter of Credit 1', IDR_juta: 'input', persen_bunga: 1.00, total: '-' },
        { plafon_LC_BG: 'Letter of Credit 2', IDR_juta: 'input', persen_bunga: 1.00, total: '-' },
        { plafon_LC_BG: 'Letter of Credit 3', IDR_juta: 'input', persen_bunga: 1.00, total: '-' },
        { plafon_LC_BG: 'Bank Garansi 1', IDR_juta: 'input', persen_bunga: 1.00, total: '-' },
        { plafon_LC_BG: 'Bank Garansi 2', IDR_juta: 'input', persen_bunga: 1.00, total: '-' }
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
