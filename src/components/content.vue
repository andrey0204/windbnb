<template>
  <div class="main">
    <div class="header">
        <span class="header-title">Stays in Finland</span>
        <span class="header-count-stays">{{ renderData.length }} stays</span>
    </div>
    <div class="content">
        <div class="card" v-for="(item, index) of renderData" :key="index">
            <div class="img">
                <img :src="item.photo" alt="">
            </div>
            <div class="info">
                <span v-if="item.superHost" class="super-host">Super Host</span>
                <span class="type">{{ item.type }} . {{ item.beds }} beds</span>
                <span class="rating"> <font-awesome-icon icon="star" />{{ item.rating }}</span>
            </div>
            <div class="title">{{ item.title }}</div>

        </div>
    </div>
    <div class="footer">Created by: <strong>Andrey Macias</strong> - devchallenges.io</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['renderData'])
    }
}
</script>

<style>
.main {
    height: calc(100% - var(--nav-h));
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px;
}

.main .header {
    display: flex;
    justify-content: space-between;
}

.main .header-title {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    color: #333333;
}

.main .header-count-stays {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #4F4F4F;
}

.main .content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 32px;
}

.main .img {
    width: 100%;
    height: 255px;
    border-radius: 15px;
    overflow: hidden;
}

.main img {
    width: 100%;
    object-fit: cover;
}

.main .card {
    width: 400px;
    max-width: 100%;
    height: 300px;
}

.main .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
}

.main .super-host {
    color: #4f4f4f;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    padding: 6px;
    border-radius: 5px;
    border: solid 1px #4f4f4f;
}

.main .type {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #828282;
}

.main .rating {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #4f4f4f;
}

.main .rating .fa-star {
    color: #EB5757;
    margin-right: 5px;
}

.main .title {
    margin-top: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #333;
}

.main .footer {
    width: 100%;
    text-align: center;
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #828282;
    padding-bottom: 20px;
}

</style>