<template>
    <table>
        <tr>
            <th>Plafon Cash Loan</th>
            <th>IDR Juta</th>
            <th>% Bunga</th>
            <th>Jangka Waktu</th>
            <th>Pokok</th>
            <th>Bunga</th>
            <th>Total</th>
        </tr>
        <tr>
            <td class="cols">Kredit Lokal</td>
            <td class="cols">
                <input type="text" v-model.number="plafonKL" placeholder="masukkan plafon">
            </td>
            <td class="cols">11.75%</td>
            <td class="cols">12</td>
            <td class="cols">-</td>
            <td class="cols">
                {{ bunga1fix }}
            </td>
            <td class="cols">
                {{ total1fix }}
            </td>
        </tr>
        <tr>
            <td>Time Loan 1</td>
            <td>
                <input type="text" v-model.number="plafonTL1" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>12</td>
            <td>-</td>
            <td>
                {{ bunga2fix }}
            </td>
            <td>
                {{ total2fix }}
            </td>
        </tr>
        <tr>
            <td>Time Loan 2</td>
            <td>
                <input type="text" v-model.number="plafonTL2" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>12</td>
            <td>-</td>
            <td>
                {{ bunga3fix }}
            </td>
            <td>
                {{ total3fix }}
            </td>
        </tr>
        <tr>
            <td>Installment Loan 1</td>
            <td>
                <input type="text" v-model.number="plafonIL1" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>36</td>
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
            <td>Installment Loan 2</td>
            <td>
                <input type="text" v-model.number="plafonIL2" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>36</td>
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
            <td>Installment Loan 3</td>
            <td>
                <input type="text" v-model.number="plafonIL3" placeholder="masukkan plafon">
            </td>
            <td>11.50%</td>
            <td>36</td>
            <td>
                {{ pokok6fix }}
            </td>
            <td>
                {{ bunga6fix }}
            </td>
            <td>
                {{ total6fix }}
            </td>
        </tr>
        <tr>
            <td>Total</td>
            <td>{{ totalplafonCL }}</td>
            <td>11.50%</td>
            <td>36</td>
            <td>
                {{ totalpokokCL }}
            </td>
            <td>
                {{ totalbungaCL }}
            </td>
            <td>
                {{ totalCL }}
            </td>
        </tr>
    </table>
</template>

<script>
export default {
  data: function () {
    return {
      plafonKL: '',
      bunga1: 0,
      total1: 0,
      plafonTL1: '',
      bunga2: 0,
      total2: 0,
      plafonTL2: '',
      bunga3: 0,
      total3: 0,
      plafonIL1: '',
      pokok4: 0,
      bunga4: 0,
      total4: 0,
      plafonIL2: '',
      pokok5: 0,
      bunga5: 0,
      total5: 0,
      plafonIL3: '',
      pokok6: 0,
      bunga6: 0,
      total6: 0
    }
  },
  watch: {
    plafonKL: function (oldPlafonKL, newPlafonKL) {
      this.bunga1 = parseInt(this.plafonKL) * ((11.75 / 100) / 12)
      this.total1 = this.bunga1
      this.bunga1fix = this.bunga1.toFixed(2)
      this.total1fix = this.bunga1.toFixed(2)
    },
    plafonTL1: function (oldPlafonTL1, newPlafonTL1) {
      this.bunga2 = parseInt(this.plafonTL1) * ((11.50 / 100) / 12)
      this.total2 = this.bunga2
      this.bunga2fix = this.bunga2.toFixed(2)
      this.total2fix = this.total2.toFixed(2)
    },
    plafonTL2: function (oldPlafonTL2, newPlafonTL2) {
      this.bunga3 = parseInt(this.plafonTL2) * ((11.50 / 100) / 12)
      this.total3 = this.bunga3
      this.bunga3fix = this.bunga3.toFixed(2)
      this.total3fix = this.total3.toFixed(2)
    },
    plafonIL1: function (oldPlafonIL1, newPlafonIL1) {
      this.plafonIL1int = parseInt(this.plafonIL1)
      this.pokok4 = this.plafonIL1int / 36
      this.bunga4 = this.plafonIL1int * ((11.50 / 100) / 36)
      this.total4 = this.bunga4 + this.pokok4
      this.bunga4fix = this.bunga4.toFixed(2)
      this.total4fix = this.total4.toFixed(2)
      this.pokok4fix = this.pokok4.toFixed(2)
    },
    plafonIL2: function (oldPlafonIL2, newPlafonIL2) {
      this.plafonIL2int = parseInt(this.plafonIL2)
      this.pokok5 = this.plafonIL2int / 36
      this.bunga5 = this.plafonIL2int * ((11.50 / 100) / 36)
      this.total5 = this.bunga5 + this.pokok5
      this.bunga5fix = this.bunga5.toFixed(2)
      this.total5fix = this.total5.toFixed(2)
      this.pokok5fix = this.pokok5.toFixed(2)
    },
    plafonIL3: function (oldPlafonIL3, newPlafonIL3) {
      this.plafonIL3int = parseInt(this.plafonIL3)
      this.pokok6 = this.plafonIL3int / 36
      this.bunga6 = this.plafonIL3int * ((11.50 / 100) / 36)
      this.total6 = this.bunga6 + this.pokok6
      this.bunga6fix = this.bunga6.toFixed(2)
      this.total6fix = this.total6.toFixed(2)
      this.pokok6fix = this.pokok6.toFixed(2)
    }
  }
}
</script>

<style>
table{
  width: 100%;
  border-collapse: collapse;
}

.cols{
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
