<template>
  <table>
        <tr>
            <th>Plafon Kredit Investasi</th>
            <th>IDR Juta</th>
            <th>% Bunga</th>
            <th>Jangka Waktu</th>
            <th>Pokok</th>
            <th>Bunga</th>
            <th>Total</th>
        </tr>
        <tr>
            <td>Kredit Investasi 1</td>
            <td>
                <input type="text" v-model.number="plafonKI1" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>60</td>
            <td>{{ pokok1fix }}</td>
            <td>
                {{ bunga1fix }}
            </td>
            <td>
                {{ total1fix }}
            </td>
        </tr>
        <tr>
            <td>Kredit Investasi 2</td>
            <td>
                <input type="text" v-model.number="plafonKI2" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>60</td>
            <td>{{ pokok2fix }}</td>
            <td>
                {{ bunga2fix }}
            </td>
            <td>
                {{ total2fix }}
            </td>
        </tr>
        <tr>
            <td>Kredit Investasi 3</td>
            <td>
                <input type="text" v-model.number="plafonKI3" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>60</td>
            <td>{{ pokok3fix }}</td>
            <td>
                {{ bunga3fix }}
            </td>
            <td>
                {{ total3fix }}
            </td>
        </tr>
        <tr>
            <td>Kredit Investasi 4</td>
            <td>
                <input type="text" v-model.number="plafonKI4" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>60</td>
            <td>
                {{ pokok4fix }}
            </td>
            <td>
                {{ bunga4fix }}
            </td>
            <td>
                {{ total4fix }}
            </td>
        </tr>
        <tr>
            <td>Kredit Investasi 5</td>
            <td>
                <input type="text" v-model.number="plafonKI5" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>60</td>
            <td>
                {{ pokok5fix }}
            </td>
            <td>
                {{ bunga5fix }}
            </td>
            <td>
                {{ total5fix }}
            </td>
        </tr>
        <tr>
            <td>Total</td>
            <td>
                {{ totalplafonKI }}
            </td>
            <td></td>
            <td></td>
            <td>
                {{ totalpokokKI }}
            </td>
            <td>
                {{ totalbungaKI }}
            </td>
            <td>
                {{ totalKI }}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
  data: function () {
    return {
      plafonKI1: '',
      plafonKI2: '',
      plafonKI3: '',
      plafonKI4: '',
      plafonKI5: '',
      bunga1fix: '',
      bunga2fix: '',
      bunga3fix: '',
      bunga4fix: '',
      bunga5fix: '',
      total1fix: '',
      total2fix: '',
      total3fix: '',
      total4fix: '',
      total5fix: '',
      pokok1fix: '',
      pokok2fix: '',
      pokok3fix: '',
      pokok4fix: '',
      pokok5fix: ''
    }
  },
  watch: {
    plafonKI1: function (oldPlafonKI1, newPlafonKI1) {
      this.plafonKI1int = parseInt(this.plafonKI1)
      this.pokok1 = this.plafonKI1int / 60
      this.bunga1 = this.plafonKI1int * ((11.50 / 100) / 12)
      this.total1 = this.bunga1 + this.pokok1
      this.bunga1fix = this.bunga1.toFixed(2)
      this.total1fix = this.total1.toFixed(2)
      this.pokok1fix = this.pokok1.toFixed(2)
    },
    plafonKI2: function (oldPlafonKI2, newPlafonKI2) {
      this.plafonKI2int = parseInt(this.plafonKI2)
      this.pokok2 = this.plafonKI2int / 60
      this.bunga2 = this.plafonKI2int * ((11.50 / 100) / 12)
      this.total2 = this.bunga2 + this.pokok2
      this.bunga2fix = this.bunga2.toFixed(2)
      this.total2fix = this.total2.toFixed(2)
      this.pokok2fix = this.pokok2.toFixed(2)
    },
    plafonKI3: function (oldPlafonKI3, newPlafonKI3) {
      this.plafonKI3int = parseInt(this.plafonKI3)
      this.pokok3 = this.plafonKI3int / 60
      this.bunga3 = this.plafonKI3int * ((11.50 / 100) / 12)
      this.total3 = this.bunga3 + this.pokok3
      this.bunga3fix = this.bunga3.toFixed(2)
      this.total3fix = this.total3.toFixed(2)
      this.pokok3fix = this.pokok3.toFixed(2)
    },
    plafonKI4: function (oldPlafonKI4, newPlafonKI4) {
      this.plafonKI4int = parseInt(this.plafonKI4)
      this.pokok4 = this.plafonKI4int / 60
      this.bunga4 = this.plafonKI4int * ((11.50 / 100) / 12)
      this.total4 = this.bunga4 + this.pokok4
      this.bunga4fix = this.bunga4.toFixed(2)
      this.total4fix = this.total4.toFixed(2)
      this.pokok4fix = this.pokok4.toFixed(2)
    },
    plafonKI5: function (oldPlafonKI5, newPlafonKI5) {
      this.plafonKI5int = parseInt(this.plafonKI5)
      this.pokok5 = this.plafonKI5int / 60
      this.bunga5 = this.plafonKI5int * ((11.50 / 100) / 12)
      this.total5 = this.bunga5 + this.pokok5
      this.bunga5fix = this.bunga5.toFixed(2)
      this.total5fix = this.total5.toFixed(2)
      this.pokok5fix = this.pokok5.toFixed(2)
    }
  },
  computed: {
    totalplafonKI: function () {
      var sumplafonKI = this.plafonKI1 + this.plafonKI2 + this.plafonKI3 + this.plafonKI4 + this.plafonKI5
      return sumplafonKI
    },
    totalpokokKI: function () {
      var sumpokokKI = parseFloat(this.pokok1fix) + parseFloat(this.pokok2fix) + parseFloat(this.pokok3fix) + parseFloat(this.pokok4fix) + parseFloat(this.pokok5fix)
      return sumpokokKI.toFixed(2)
    },
    totalbungaKI: function () {
      var sumbungaKI = parseFloat(this.bunga1fix) + parseFloat(this.bunga2fix) + parseFloat(this.bunga3fix) + parseFloat(this.bunga4fix) + parseFloat(this.bunga5fix)
      return sumbungaKI.toFixed(2)
    },
    totalKI: function () {
      var sumtotalKI = parseFloat(this.total1fix) + parseFloat(this.total2fix) + parseFloat(this.total3fix) + parseFloat(this.total4fix) + parseFloat(this.total5fix)
      return sumtotalKI.toFixed(2)
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
    width: 150px;
}

tr, td, th{
    border: 1px solid black;
}

input{
    border: none;
    padding: 0;
}
</style>
