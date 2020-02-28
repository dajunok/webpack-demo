<template>
    <div class="teacher">
        <p>我是Teacher组件，老师姓名：{{teacherName}}</p>
    </div>
  
</template>

<script type="text/javascript">

export default{
    name:'teacher',
    props:['teacherName'],

}
</script>