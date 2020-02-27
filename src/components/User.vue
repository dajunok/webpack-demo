<template>
    <div class="user">
        <h1># 嵌套路由</h1>
        <h3>User {{ $route.params.id }}</h3>
        <router-view class="view default"></router-view>  <!-- 子路由默认视图-->
        <router-view class="view helper" name="helper"></router-view>  <!-- 子路由命名视图helper -->
    </div>
  
</template>

