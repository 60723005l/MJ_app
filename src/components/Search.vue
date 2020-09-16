<template>
    <div>
        <div class="search-form">
            <div class="search-city">
                <input placeholder="選擇縣市"  list="cities" name="city" id="city">
                <datalist id="cities">
                    <option v-for="city in area.cities" :key="city.name" :value="city.name" />
                </datalist>

                <input placeholder="選擇區域"  list="districts" name="district" id="district">
                <datalist id="districts">
                    <option v-for="district in area.districts" :key="district.name" :value="district.name" />
                </datalist>

                <input placeholder="選擇道路"  list="roads" name="road" id="road">
                <datalist id="roads">
                    <option v-for="road in area.roads" :key="road.name" :value="road.name" />
                </datalist>
            </div>
        </div>
        <div class="room-container">
            <SearchRoom v-for="room in rooms" :key="room.index"
                :roomTitle="room.roomTitle"
                :photos="room.photos"
                :address="room.address"
                :payment="room.payment"
                :speed="room.speed"
                :limit="room.limit"
                :status="room.status"
                :ranking="room.ranking"
            />
        </div>
    </div>
</template>

<script>
import SearchRoom from '@/components/SearchRoom'

export default {
    name: 'Search',
    data:function()
    {
        return{
           area:
           {
               cities:[{name:'新北市'},{name:'台北市'},{name:'基隆市'},{name:'桃園市'},{name:'新竹市'}],
               districts:[{name:'中山區'},{name:'中正區'},{name:'文山區'},{name:'大安區'},{name:'萬華區'}],
               roads:[{name:'羅斯福路一段'},{name:'中正路'},{name:'中山北路一段'},{name:'金山南路'}]
           },
           rooms:
           [
                {
                    roomTitle:'群來協會',
                    photos:["./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png"],
                    address:'信義區基隆路一段',
                    payment:'200/50, 300/50',
                    speed:'中等',
                    limit:'無',
                    status:'1/4',
                    ranking:'4.7'
                },
                {
                    roomTitle:'吳興街小任家庭場',
                    photos:["./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png"],
                    address:'信義區基隆路一段',
                    payment:'100/20, 100/30',
                    speed:'中快',
                    limit:'4星以上認證，最少3將',
                    status:'進行中',
                    ranking:'4.9'
                },
                {
                    roomTitle:'群來協會',
                    photos:["./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png","./static/sidebarIcon/logo.png"],
                    address:'信義區基隆路一段',
                    payment:'200/50, 300/50',
                    speed:'中等',
                    limit:'無',
                    status:'1/4',
                    ranking:'4.7'
                },
           ]

        }
    },
    components:
    {
        SearchRoom
    }

}
</script>
<style scoped>
.room-container{
    position: absolute;
    left: 50%;
    width: 70%;
    transform: translateX(-50%);
    background-color: #2b2b2b;
    padding: 10px;
    color: white;
    border-radius: 5px;

}
</style>