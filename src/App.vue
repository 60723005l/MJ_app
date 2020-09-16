<template>
  <div id="app">
    <div>
        <div class="sidebar-container" :class="{'sidebar-close':sidebarStyleStatus.isClose}">
            <div class="sidebar-manue-list">
              <div class="menu-close-btn" @click="sidebarOnClose">=</div>
              <SidebarUserInfo />
                <div class="sidebar-menu-item" v-for="item in menu" :key="item.title">
                    <router-link class="sidebar-item-item" tag="label" :to="{name:item.href}">
                        <img class="sidebar-item-icon" :src="item.icon" alt/>
                        <span class="sidebar-item-title">{{item.title}}</span>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="main-space">
            <div class="header">
                <div class="menu-close-btn" @click="sidebarOnClose">=</div>
                header
              <!-- <font-awesome-icon icon="user-secret" /> -->
            </div>
            <router-view class="rendered-body"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import SidebarUserInfo from '@/components/SidebarUserInfo'

export default {
    name: 'App',
    data:function()
    {
        return{
            sidebarStyleStatus:
            {
                isClose:false,
            },
           menu:
           [
               {
                   href:'search',
                   title:'收尋',
                   icon:"./static/sidebarIcon/logo.png"
               },
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
    methods:
    {
        sidebarOnClose:function()
        {
            var isClose = this.sidebarStyleStatus.isClose
            console.log(isClose)
            isClose ? this.sidebarStyleStatus.isClose = false : this.sidebarStyleStatus.isClose = true
            console.log(isClose)
        }
    },
    components:
    {
        SidebarUserInfo
    }

}
</script>
<style scoped>
body{
  overflow-x: hidden;
}
.sidebar-container{
    max-width: 250px;
    background-color: #232323;
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
.sidebar-close{
    max-width: 0px;
    overflow: auto;
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
    transition: 0.3s max-width ease; 
}
.sidebar-menu-item:hover{
    background-color: #151414;
}
.sidebar-menu-item label{
    display: block;
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
.main-space{
    position: absolute;
    overflow: auto;
    top: 0px;
    left: 0px;
    width: 100%;
    text-align: center;
    height: 100%;
    background-color: #151515;
}
.header{
  background-color: rgb(177 177 177);
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 40px;
}
.rendered-body{
    margin: 50px auto;
}
 .sidebar-menu-item label{
    cursor: pointer;
    color: white;
    font-family: monospace;
 }
 .menu-close-btn{
     position: absolute;
    left: 0px;
    z-index: 999;
    background-color: #151414;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    padding: 5px 10px;
    margin: 5px;
 }
  .menu-close-btn:hover{
      background-color: rgb(65 184 131);
      color: black;
  }
</style>
<style>
    /* body{
        overflow-x: hidden;
    } */
    .main-space{
        font-family: monospace;
    }
    /* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>