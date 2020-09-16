<template>
    <div>
        <div class="sidebar-container">
            <div class="sidebar-manue-list">
                <div class="sidebar-menu-item" v-for="item in menu" :key="item.title">
                    <router-link :to="{name:item.href}">
                        <img class="sidebar-item-icon" :src="item.icon" alt/>
                        <span class="sidebar-item-title">{{item.title}}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="redered-body">
            redered-body
            <router-view></router-view>
        </div>
    </div>
</template>

<script>


export default {
    name: 'SideBar',
    data:function()
    {
        return{
           menu:
           [
               {
                   href:'records',
                   title:'紀錄',
                   icon:"./static/sidebarIcon/logo.png"
               },
               {
                   href:'friends',
                   title:'好友',
                   icon:"./static/sidebarIcon/logo.png"
               },
               {
                   href:'chat',
                   title:'對話',
                   icon:"./static/sidebarIcon/logo.png"
               },
               {
                   href:'store',
                   title:'商城',
                   icon:"./static/sidebarIcon/logo.png"
               },
               {
                   href:'customerservice',
                   title:'客服',
                   icon:"./static/sidebarIcon/logo.png"
               },
               {
                   href:'favourite',
                   title:'收藏',
                   icon:"./static/sidebarIcon/logo.png"
               }
           ]
        }
    },

}
</script>
<style scoped>
.sidebar-container{
    max-width: 350px;
    background-color: #2a2a2e;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    z-index: 999;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    text-align: left;
    -webkit-transition: 0.3s max-width ease;
    transition: 0.3s max-width ease;  
}
.sidebar-manue-list{
    display: block;
}
.sidebar-menu-item{
    position: relative;
    color: WHITE;
    display: block;
    padding: 10px;
    /* width: 100%; */
    white-space: nowrap;
}
.sidebar-menu-item:hover{
    background-color: #151414;
}
.sidebar-menu-item a{
    display: contents;
}
.sidebar-item-icon{
    max-width: 40px;
    max-height: 40px;
    vertical-align:middle;	
}
.sidevar-item-title
{
    padding: 5px;
}
</style>