<template>
  <div>
    <a-card :bordered="false">
      <div class="table-top-title-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="角色名称">
                <a-input placeholder="请输入"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="角色代码">
                <a-input placeholder="请输入"></a-input>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item>
                <a-button type="primary">查询</a-button>
                <a-button style="margin-left:10px;">新增</a-button>
              </a-form-item>
            </a-col>
          </a-row>
        </a-form>
      </div>
      <div class="table-rolemanage-body-wrapper">
        <a-table bordered :dataSource="dataSource" :columns="columns">
          <!-- <template slot="name" slot-scope="text, record">
                    <editable-cell :text="text" @change="onCellChange(record.key, 'name', $event)"/>
          </template>-->
          <template slot="operation" slot-scope="text, record">
            <a-popconfirm
              v-if="dataSource.length"
              title="Sure to delete?"
              @confirm="() => onDelete(record.key)"
            >
              <span class="operation-item">
                <a href="javascript:;">删除</a>
              </span>
            </a-popconfirm>
            <span class="operation-item" @click="handleEditRole(record.key)">
              <a href="javascript:;">编辑</a>
            </span>
          </template>
        </a-table>
      </div>
    </a-card>
    <role-modal
      :visible="showModal"
      :itemData.sync="editData"
      @sendRole="receiveRole"
      @hiddenModal="hiddenRoleModal"
    ></role-modal>
  </div>
</template>

<script>

import CollpaseTree from "@/components/tools/CollpaseTree";
import RoleModal from "@/components/tools/modal/RoleModal";
export default {
  name: "role-manage",
  data() {
    return {
      showModal: false,
      dataSource: [
        {
          key: "0",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        },
        {
          key: "1",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        },
        {
          key: "2",
          name: "Edward King 0",
          namecode: "32",
          remark: "London, Park Lane no. 0",
          creater: "admin",
          createtime: "2019-07-10",
          modifier: "admin",
          modifitime: "2019-07-19"
        }
      ],
      count: 2,
      columns: [
        {
          title: "序号",
          dataIndex: "key"
        },
        {
          title: "姓名",
          dataIndex: "name",
          scopedSlots: { customRender: "name" }
        },
        {
          title: "角色代码",
          dataIndex: "namecode"
        },
        {
          title: "备注",
          dataIndex: "remark"
        },
        {
          title: "创建人",
          dataIndex: "creater"
        },
        {
          title: "创建时间",
          dataIndex: "createtime"
        },
        {
          title: "修改人",
          dataIndex: "modifier"
        },
        {
          title: "修改时间",
          dataIndex: "modifitime"
        },
        {
          title: "操作",
          dataIndex: "operation",
          scopedSlots: { customRender: "operation" }
        }
      ],
      editData: {}
    };
  },
  components: {
    CollpaseTree,
    RoleModal
  },
  methods: {
    /* onCellChange(key, dataIndex, value) {
      const dataSource = [...this.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.dataSource = dataSource;
      }
    }, */
    onDelete(key) {
      //删除数据  删选出不等于key值
      const dataSource = [...this.dataSource];
      this.dataSource = dataSource.filter(item => item.key !== key);
    },
    handleAdd() {
      //向table中添加数据
      const { count, dataSource } = this;
      const newData = {
        key: count,
        name: `Edward King ${count}`,
        age: 32,
        address: `London, Park Lane no. ${count}`
      };
      this.dataSource = [...dataSource, newData];
      this.count = count + 1;
    },
    handleEditRole(key) {
      //向子组件发送数据
      const dataSource = [...this.dataSource];
      //筛选key === index
      let obj = dataSource.filter(item => item.key === key);
      this.editData = obj[0];
      this.showModal = true;
    },
    hiddenRoleModal(val) {
      //接收子组件关闭按钮
      this.showModal = val;
    },
    receiveRole(val) {
      //接收子组件传递的数据 修改table
      let role = val.role;
      this.dataSource.filter(item => {
        if (item.key === role.key) {
          item.name = role.roleName;
          item.namecode = role.roleCode;
          item.remark = role.roleRemark;
        }
      });
      this.showModal = role.hiddenModal;
    }
  }
};
</script>

<style lang="less">
.table-rolemanage-body-wrapper {
  min-width: 800px;
  .operation-item {
    display: inline-block;
    width: 40px;
    margin: 0 6px;
  }
}

</style>
