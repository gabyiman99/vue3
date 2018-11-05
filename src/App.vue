<template>
  <div id="app">
    <Navigation/>
    <!--<PlafonCashLoan/>
    <PlafonKreditInvestasi/>
    <PlafonLCBG/>
    <PerhitunganKMK/>
    <PerhitunganDSC/>
    <PerhitunganAgunan/>
    <Editable/>
    <Main/>-->
    <ContactUsForm/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
/*import Main from './components/Main.vue' 
import PlafonCashLoan from './components/PlafonCashLoan.vue'
import PlafonKreditInvestasi from './components/PlafonKreditInvestasi.vue'
import PlafonLCBG from './components/PlafonLCBG.vue'
import PerhitunganKMK from './components/PerhitunganKMK.vue'
import PerhitunganDSC from './components/PerhitunganDSC.vue'
import PerhitunganAgunan from './components/PerhitunganAgunan.vue'
import ApplyForm from './components/ApplyForm.vue' 
import Editable from './components/Editable.vue'*/
import ContactUsForm from './components/ContactUsForm.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    /*Main , 
    PlafonCashLoan,
    PlafonKreditInvestasi,
    PlafonLCBG,
    PerhitunganKMK,
    PerhitunganDSC,
    PerhitunganAgunan,
    ApplyForm, 
    Editable,*/
    ContactUsForm
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

table
  margin: 0 150px;
  width: 835px;
</style>
