<template>
  <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'nilai_pasar_solid',
        },
        {
          key: 'versi_nasabah',
        },
        {
          key: 'prediksi_NP',
        },
        { 
          key: 'prediksi_NT', 
        }
      ],
      items: [
        { nilai_pasar_solid: 'Agunan 1', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 2', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 3', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 4', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 5', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 6', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 7', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 8', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 9', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'},
        { nilai_pasar_solid: 'Agunan 10', versi_nasabah: 'input', prediksi_NP: '-', prediksi_NT: '-'}
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