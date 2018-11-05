<template>
  <div id="example">
    <editable :content="text" @update="text = $event"></editable>
    <div>
      <pre>{{$data |json }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  template:'<div contenteditable="true" @input="update"></div>',
  props:['content'],
  mounted:function(){
    this.$el.innerText = this.content;
  },
  methods:{
    update:function(event){
      this.$emit('update',event.target.innerText);
    }
  }
}
var example = new Vue({
  el: '#example',
  data: {
    text:"This text is editable!"
  }
});
</script>
