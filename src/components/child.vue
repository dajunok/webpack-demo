<template>
  <div class="hello">
    <div class="ipt">
      <input type="text" v-model="str">
    </div>
    word是父元素传过来的
    <h2>{{ word }}</h2>

  </div>
</template>

<script>
export default {
  name: 'box',
  data() {
    return {
      str: '',
    }
  },
  props: {
    word: ''
  },
  watch: {
    str: function(newValue, oldValue) {
      //每当str的值改变则发送事件update:word , 并且把值传过去
      this.$emit('update:word', newValue)
    }
  }
}

</script>