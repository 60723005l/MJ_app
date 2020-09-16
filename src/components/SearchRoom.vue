<template>
    <div class="search-room">
        <div class="room-photos">
            <img v-for="photo in photos" :key="photo.index"
                :src="photo"
                alt
            />
        </div>
        <div class="room-info">
            <div class="info">
                <span class="title">{{roomTitle}}</span>
                <span class="descript">{{address}}</span>
                <span class="descript">金額：{{payment}}</span>
                <span class="descript">速度：{{speed}}</span>
                <span class="descript">限制：{{limit}}</span>
            </div>
            <div class="extra-info">
                <span class="ranking">
                    <img class="ranking-star" :src="icons.star" alt/>
                    {{ranking}}
                </span>
                <span class="status"><p class="ranking-star"></p>{{status}}</span>
            </div>
        </div>
        <hr class="break-line">
    </div> 
</template>

<script>


export default {
    name: 'SearchRoom',
    data:function()
    {
        return{
            icons:
            {
                star:"./static/searchRoom/rankingStar.svg"
            }
        }
    },
    props:
    {
        roomTitle:String,
        photos:Array,
        address:String,
        payment:String,
        speed:String,
        limit:String,
        status:String,
        ranking:String
    },

}
</script>
<style scoped>
.search-room{
    padding: 20px 0px;
}
.room-photos{
    margin: 0;
    padding: 0;
    white-space: nowrap;
    overflow-x: auto;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid #35495e;
    background-color: rgb(210 210 210);
}
.room-photos img{
    display: inline-block;
}
.room-info{
    display: table;
    width: 100%;
    overflow: hidden;
    position: relative;
}
.room-info .title{
    display: table;
    font-size: x-large;
}
.room-info .info{
    float: left;
}
.room-info .extra-info{
    float: right;
    height: 100%;
    width: 50%;
    position: absolute;
    right: 0;
    top: 0;
}
.extra-info .ranking{
    display: block;
    top: 0px;
    right: 0px;
    position: absolute;
}
.extra-info .status{
    display: block;
    bottom: 0px;
    right: 0px;
    position: absolute;
}
.room-info .descript{
    display: table;
}
.room-info span{
    padding: 5px
}
.break-line{
    margin: 20px 0px 50px 0px;
    border: 1px solid #545454;
}

.ranking-star{
    width: 20px;
    height: 20px;
    vertical-align: bottom;
}
</style>