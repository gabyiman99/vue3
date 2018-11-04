<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'plafon_kredit_investasi',
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
      ],
      items: [
        { plafon_kredit_investasi: 'Kredit Investasi 1', IDR_juta: 'input', persen_bunga: 11.50, jangka_waktu: 60, pokok: '-', bunga: '-', total: '-'},
        { plafon_kredit_investasi: 'Kredit Investasi 2', IDR_juta: 'input', persen_bunga: 11.50, jangka_waktu: 60, pokok: '-', bunga: '-', total: '-'},
        { plafon_kredit_investasi: 'Kredit Investasi 3', IDR_juta: 'input', persen_bunga: 11.50, jangka_waktu: 60, pokok: '-', bunga: '-', total: '-'},
        { plafon_kredit_investasi: 'Kredit Investasi 4', IDR_juta: 'input', persen_bunga: 11.50, jangka_waktu: 60, pokok: '-', bunga: '-', total: '-'},
        { plafon_kredit_investasi: 'Kredit Investasi 5', IDR_juta: 'input', persen_bunga: 11.50, jangka_waktu: 60, pokok: '-', bunga: '-', total: '-'}
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
