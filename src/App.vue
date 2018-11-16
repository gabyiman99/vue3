<template>
  <div id="app">
    <Navigation/>
    <!--<Editable :content="text" @update="text = $event"/>
    <PlafonCashLoan/>
    <PerhitunganKMK/>
    <PerhitunganDSC/>
    <PerhitunganAgunan/>
    <Main/>
    <ContactUsForm/>
    <PlafonCLtable/>-->
    <PlafonCLtablecontent/>
    <PlafonKreditInvestasi/>
    <PlafonLCBG/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'
/* import PlafonCLtableVue from './components/PlafonCLtable.vue'
import PlafonCashLoan from './components/PlafonCashLoan.vue'
import PerhitunganKMK from './components/PerhitunganKMK.vue'
import PerhitunganDSC from './components/PerhitunganDSC.vue'
import PerhitunganAgunan from './components/PerhitunganAgunan.vue'
import ApplyForm from './components/ApplyForm.vue'
import Editable from './components/Editable.vue'
import Main from './components/Main.vue'
import ContactUsForm from './components/ContactUsForm.vue'
import PlafonCLtable from './components/PlafonCLtable' */
import PlafonCLtablecontent from './components/TableContents/PlafonCLtablecontent.vue'
import PlafonKreditInvestasi from './components/PlafonKreditInvestasi.vue'
import PlafonLCBG from './components/PlafonLCBG.vue'

export default {
  name: 'app',
  components: {
    Navigation,
    /* Main,
    PlafonCashLoan,
    PerhitunganKMK,
    PerhitunganDSC,
    PerhitunganAgunan,
    ApplyForm,
    Editable,
    ContactUsForm,
    PlafonCLtable, */
    PlafonCLtablecontent,
    PlafonKreditInvestasi,
    PlafonLCBG
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
  margin-top 40px
</style>
