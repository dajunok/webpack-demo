<template>
  <div>
    <h5>组件C</h5>
    <h3>{{str}}---{{myData}}--{{$attrs.fullName}}</h3>
    <input v-model="myc" @input="hInput" />
  </div>
  
</template>

<script type="text/javascript">

export default{
    name:'C',
    props:{ myData: { String } },
    model: {},
    data:function(){
      return { 
        
      }; 
    },
    computed:{},
    methods:{
      hInput:function() {
        this.$emit("changeMyData", this.myc); //在组件A中传递过来的事件
      },
    },
    watch:{},
    components:{},
    created:function(){
      this.myc = this.myData;  // 在组件A中传递过来的属性
      this.str="张三";
      console.log("C组件");
      console.log("$attrs属性：",this.$attrs);
      console.info(this.$attrs, this.$listeners);
    },

}

</script>