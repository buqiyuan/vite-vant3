<template>
  <div class="cate-container">
    <van-sidebar v-model="active" class="sidebar">
      <template v-for="item in cateList" :key="item">
        <van-sidebar-item :title="item.cate_title"/>
      </template>
    </van-sidebar>
    <div class="shop-content">
      <template v-for="cateItem in cateList[active].cate_data" :key="cateItem.title">
        <h4 class="cate-title">{{ cateItem.title }}</h4>
        <van-grid :column-num="3" :gutter="10" :border="false">
          <template v-for="shopItem in cateItem.list" :key="shopItem.title">
            <van-grid-item @click="nav2shop(shopItem.title)" :icon="shopItem.imgUrl" :text="shopItem.title"/>
          </template>
        </van-grid>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, watch} from 'vue';
import {Notify} from 'vant'
import cateList from './cateList.json'

console.log(cateList, '分类数据')

export default {
  name: 'category',
  setup() {
    const active = ref(0);

    watch(() => active.value, () => document.querySelector('.shop-content').scrollTop = 0)

    const nav2shop = (title) => {
      Notify({ type: 'success', message: title })
    }

    fetch("/api/reply/list", {
      "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site"
      },
      "body": "{\"comment_id\":\"6896808874284744711\",\"item_id\":\"6896748218076364814\",\"item_type\":2,\"cursor\":\"0\",\"limit\":20,\"client_type\":2608}",
      "method": "POST",
      "mode": "cors",
      "credentials": "include"
    });

    return {
      active,
      cateList,
      nav2shop
    };
  },
};
</script>

<style lang="scss" scoped>
.cate-container {
  display: flex;

  .sidebar {
    height: var(--container-height);
    overflow-y: auto;
  }

  ::v-deep(.shop-content) {
    flex: 1;
    height: var(--container-height);
    overflow-y: auto;

    .cate-title {
      padding-left: px2rem(20);
      font-size: px2rem(32);
    }
    .van-grid-item__icon {
      .van-icon__image {
        font-size: px2rem(120);
      }
    }
  }
}
</style>
