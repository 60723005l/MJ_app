<template>
    <div class="user-info">
        <div class="user-photo">
            <img :src="userPhotoUrl" alt/>
        </div>
        <span class="user-name">{{userName}}</span>
        <span class="user-mail" >{{userMail}}</span>
        
    </div>
</template>

<script>


export default {
    name: 'SidebarUserInfo',
    data:function()
    {
        return{
            userPhotoUrl:"./static/userPhoto.png",
            userName:"彥儒",
            userMail:"andy10030015@gmail.com"
        }
    },

}
</script>
<style scoped>
.user-photo{
    text-align: center;
}
.user-photo img{
    width: 80px;
    border-radius: 100px;

}
.user-info{
 text-align: center;
 margin: 50px 0px;
 font-family: monospace;
}
.user-info .user-name
{
    color: White;
    display: block;
}
.user-info .user-mail{
    color: #8a8a8a;
    display: block;
}
.mailClose{
    display: none
}
</style>