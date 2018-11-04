<template>
  <div class="form">
    <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Jenis Usaha:"
                  label-for="jenis_usaha"
                  label-text-align="left">
      <b-form-select v-model="selected1" :options="options_usaha" id="jenis_usaha" />
      <div class="selected">Selected: <strong>{{ selected1 }}</strong></div>
    </b-form-group>

    <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Omset (IDR Juta):"
                  label-for="omset"
                  label-text-align="left">
      <b-form-select v-model="selected2" :options="options_omset" id="omset" />
      <div class="selected">Selected: <strong>{{ selected2 }}</strong></div>
    </b-form-group>

    <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Kredit yang Diajukan (IDR Juta):"
                  label-for="kredit"
                  label-text-align="left">
      <b-form-select v-model="selected2" :options="options_kredit" id="kredit"/>
      <div class="selected">Selected: <strong>{{ selected2 }}</strong></div>
    </b-form-group>
    
    <b-button variant="primary">Submit</b-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected1: null,
      options_usaha: [
        { value: null, text: 'Please select an option' },
        { value: 'Pertanian', text: 'Pertanian' },
        { value: 'Industri', text: 'Industri' },
        { value: 'Makanan', text: 'Makanan' },
        { value: 'Lainnya', text: 'Lainnya'}
      ],
      selected2: null,
      options_omset: [
        { value: null, text: 'Please select an option' },
        { value: '0 - 50', text: '0 - 50' },
        { value: '50 - 100', text: '50 - 100' },
        { value: '100 - 500', text: '100 - 500' },
        { value: '>500', text: '>500'}
      ],
      selected3: null,
      options_kredit: [
        { value: null, text: 'Please select an option' },
        { value: '0 - 50', text: '0 - 50' },
        { value: '50 - 100', text: '50 - 100' },
        { value: '100 - 500', text: '100 - 500' },
        { value: '>500', text: '>500'}
      ]
    }
  }
}
</script>
<style>
.form{
  margin: 40px 150px;
}
.id{
  margin-top: 40px;
  float: left;
}
.selected{
  float: left;
}
button{
  float: right;
}
</style>
