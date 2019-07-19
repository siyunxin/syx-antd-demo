<template>
    <div class="mine-container">
        <a-row :gutter="24">
            <a-col :md="24" :lg="7">
                <a-card>
                    <div class="userinfo-card">
                        <div class="user-header-image">
                            <img :src="userHead" alt="">
                        </div>
                        <div class="userinfo-name">
                            <span>司云昕</span>
                        </div>
                        <div class="userinfo-job">
                            <p>
                                <a-icon type="idcard"/><span>WEB前端开发</span>
                            </p>
                            <p>
                                <a-icon type="idcard"/><span>山东济南</span>
                            </p>
                        </div>
                    </div>
                    <div class="userinfo-intro">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae autem quos esse qui impedit perspiciatis, corporis odio at eos. Saepe sed qui illo incidunt! Dolorum excepturi impedit quasi molestiae.
                    </div>
                </a-card>
            </a-col>
            <a-col :md="24" :lg="17">
                <a-card
                    style="width:100%"
                    :tabList="tabListNoTitle"
                    :activeTabKey="noTitleKey"
                    @tabChange="key => onTabChange(key, 'noTitleKey')"
                >
                    <p v-if="noTitleKey === 'article'">article content</p>
                    <p v-else-if="noTitleKey === 'app'">app content</p>
                    <p v-else-if="noTitleKey === 'project'">project content</p>
                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
export default {
  data() {
    return {
      noTitleKey: "article",
      tabListNoTitle: [
        {
          key: "article",
          tab: "文章(8)"
        },
        {
          key: "app",
          tab: "应用(8)"
        },
        {
          key: "project",
          tab: "项目(8)"
        }
      ],
      userHead: require('@/assets/images/headerImg.jpg')
    };
  },
  methods: {
    onTabChange(key, type) {
      console.log(key, type);
      this[type] = key;
    }
  },
  created() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.mine-container {
  width: 100%;
  height: 100%;
}
.userinfo-card {
  width: 100%;

  .user-header-image {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .userinfo-name {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
  }
}
.userinfo-intro {
  text-indent: 36px;
}
.userinfo-job {
    span {
        padding: 0 10px;
    }
}
</style>
