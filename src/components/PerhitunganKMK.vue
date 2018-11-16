<template>
  <table>
    <tr>
      <th>Keterangan</th>
      <th>Satuan</th>
      <th>Nominal</th>
    </tr>
    <tr>
      <td>Omset/bulan LKA</td>
      <td>IDR Juta</td>
      <td>
        <input type="text" v-model.number="omset" placeholder="masukkan omset">
      </td>
    </tr>
    <tr>
      <td>% HPP</td>
      <td>%</td>
      <td>
        <input type="text" v-model.number="persenHPP" placeholder="masukkan persentase HPP">
      </td>
    </tr>
    <tr>
      <td>AR</td>
      <td>Bulan</td>
      <td>
        <input type="text" v-model.number="bulanAR" placeholder="masukkan jumlah bulan">
      </td>
    </tr>
    <tr>
      <td>Inv</td>
      <td>Bulan</td>
      <td>
        <input type="text" v-model.number="bulanAR" placeholder="masukkan jumlah bulan">
      </td>
    </tr>
    <tr>
      <td>AP</td>
      <td>Bulan</td>
      <td>
        <input type="text" v-model.number="bulanAR" placeholder="masukkan jumlah bulan">
      </td>
    </tr>
    <tr></tr>
  </table>
</template>

<script>
export default {
  
}
</script>
<style>
.table{
  margin-top: 40px;
}
</style>