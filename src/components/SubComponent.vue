<template>
  <div id="slot" class="foo bar"  :pD.prop="propData" :dV="dataValue"> <!-- 通过 prop 修饰符绑定 DOM 属性。 通过自定义属性存储变量，避免暴露数据-->
    <p>我是张三【{{size}}；name：{{fullname}}】，年龄：{{age}}</p>
    <slot></slot>
  </div>
  
</template>


<script type="text/javascript">  
  export default {
    name:'subcomponent',
    data:function(){
        return {
          table:"桌子",
          chair:"椅子",
          bowl:"饭碗",
          chopsticks:"筷子",
          count:15,
          propData:'你好',
          dataValue:'我在外面',
        };
    },
    props:{
      size:Number,
      fullname:String,
      age:{
        type:Number,
        default:10,   
        required:true,  //定义该 prop 是否是必填项。required validator        
        validator:function(value){   //自定义验证函数会将该 prop 的值作为唯一的参数传入。在非生产环境下，如果该函数返回一个 false 的值 (也就是验证失败)，一个控制台警告将会被抛出。
          return value>=5;
        }
      }


    },
    methods:{

    },
  }
</script>