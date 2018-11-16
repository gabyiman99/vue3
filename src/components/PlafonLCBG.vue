<template>
  <table>
    <tr>
        <th>Plafon Letter of Credit / Bank Garansi</th>
        <th>IDR Juta</th>
        <th>% Komisi</th>
        <th></th>
        <th></th>
        <th></th>
        <th>Total</th>
    </tr>
    <tr>
        <td>Letter of Credit 1</td>
        <td>
            <input type="text" v-model.number="plafonLC1" placeholder="masukkan plafon">
        </td>
        <td>1.00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ total1fix }}
        </td>
    </tr>
    <tr>
        <td>Letter of Credit 2</td>
        <td>
            <input type="text" v-model.number="plafonLC2" placeholder="masukkan plafon">
        </td>
        <td>1.00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ total2fix }}
        </td>
    </tr>
    <tr>
        <td>Letter of Credit 3</td>
        <td>
            <input type="text" v-model.number="plafonLC3" placeholder="masukkan plafon">
        </td>
        <td>1.00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ total3fix }}
        </td>
    </tr>
    <tr>
        <td>Bank Garansi 1</td>
        <td>
            <input type="text" v-model.number="plafonBG1" placeholder="masukkan plafon">
        </td>
        <td>1.00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ total4fix }}
        </td>
    </tr>
    <tr>
        <td>Bank Garansi 2</td>
        <td>
            <input type="text" v-model.number="plafonBG2" placeholder="masukkan plafon">
        </td>
        <td>1.00</td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ total5fix }}
        </td>
    </tr>
    <tr>
        <td>Total</td>
        <td>
            {{totalplafonLCBG}}
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
            {{ totalLCBG }}
        </td>
    </tr>
  </table>
</template>

<script>
export default {
  data: function () {
    return {
      plafonLC1: '',
      plafonLC2: '',
      plafonLC3: '',
      plafonBG1: '',
      plafonBG2: '',
      total1fix: '',
      total2fix: '',
      total3fix: '',
      total4fix: '',
      total5fix: ''
    }
  },
  watch: {
    plafonLC1: function (oldPlafonLC1, newPlafonLC1) {
      this.total1 = parseInt(this.plafonLC1) * 1.00 / 100
      this.total1fix = this.total1.toFixed(2)
    },
    plafonLC2: function (oldPlafonLC2, newPlafonLC2) {
      this.total2 = parseInt(this.plafonLC2) * 1.00 / 100
      this.total2fix = this.total2.toFixed(2)
    },
    plafonLC3: function (oldPlafonLC3, newPlafonLC3) {
      this.total3 = parseInt(this.plafonLC3) * 1.00 / 100
      this.total3fix = this.total3.toFixed(2)
    },
    plafonBG1: function (oldPlafonBG1, newPlafonBG1) {
      this.total4 = parseInt(this.plafonBG1) * 1.00 / 100
      this.total4fix = this.total4.toFixed(2)
    },
    plafonBG2: function (oldPlafonBG2, newPlafonBG2) {
      this.total5 = parseInt(this.plafonBG2) * 1.00 / 100
      this.total5fix = this.total5.toFixed(2)
    },
  },
  computed: {
    totalplafonLCBG: function () {
        var sumplafonLCBG = this.plafonLC1 + this.plafonLC2 + this.plafonLC3 + this.plafonBG1 + this.plafonBG2
        return sumplafonLCBG
    },
    totalLCBG : function () {
        var sumtotalLCBG = parseFloat(this.total1fix) + parseFloat(this.total2fix) + parseFloat(this.total3fix) + parseFloat(this.total4fix) + parseFloat(this.total5fix)
        return sumtotalLCBG.toFixed(2)
    }
  }
}
</script>
<style>
table{
  width: 100%;
  border-collapse: collapse;
}

td{
    width: 1500px;
}

tr, td, th{
    border: 1px solid black;
}

input{
    border: none;
    padding: 0;
}
</style>
