<template>
    <div class="d-app-wrap">
        <mt-header fixed title="你们快一点"></mt-header>
        <h1>Vue使用成功没有--{{title}}</h1>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"> </span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
                
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </div>
</template>

<script>
export default {
    data(){
        return{
            title:'你们好好工作'
        }
    }
}
</script>