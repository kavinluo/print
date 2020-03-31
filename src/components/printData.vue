
<template>
  <div class="firstStationTable">
    <el-button size="small" type="info" @click="print">打印</el-button>

    <Modal
      :mask-closable="false"
      v-model="printModal"
      height="200"
      title="对话框标题"
      class-name="vertical-center-modal"
      :width="800"
    >
      <modal-header slot="header" :content="button.printId"></modal-header>
      <print-data v-if="printModal" @cancel="cancel" @print="subCallback">
        <el-table :data="tabledatas" class="printContent">
          <el-table-column
            class="thStyle"
            v-for="item in tableData"
            :label="item.label"
            :prop="item.prop"
            :key="item.id"
          >
            <el-table-column
              class="thStyle"
              v-if="item.children||item.children.length>0"
              v-for="item1 in item.children"
              :label="item1.label"
              :prop="item1.prop"
              :key="item1.id"
            >
              <el-table-column
                class="thStyle"
                v-if="item1.children||item1.children.length>0"
                v-for="item2 in item1.children"
                :label="item2.label"
                :prop="item2.prop"
                :key="item2.id"
              >
                <el-table-column
                  class="thStyle"
                  v-if="item2.children||item2.children.length>0"
                  v-for="item3 in item2.children"
                  :label="item3.label"
                  :prop="item3.prop"
                  :key="item3.id"
                ></el-table-column>
              </el-table-column>
            </el-table-column>
          </el-table-column>
        </el-table>
      </print-data>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>
/*当前组件必要引入*/
let Util = null;
// import api from "./api";
import printData from "./print";

export default {
  props: ["table", "type"],
  data() {
    return {
      tabledatas: [
        {
          date: 2019 - 2 - 20,
          date3: 2019 - 2 - 21,
          date: 2019 - 2 - 20
        },
        {
          date: 2019 - 2 - 20,
          date3: 2019 - 2 - 21,
          date: 2019 - 2 - 20
        },
        {
          date: 2019 - 2 - 20,
          date3: 2019 - 2 - 21,
          date: 2019 - 2 - 20
        }
      ],
      tableData: [
        {
          id: 1,
          date: "2016-05-03",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
          children: [
            {
              id: 11,
              date: "2016-05-04",
              label: "王小虎c1",
              prop: "date3",
              city: "普陀区",
              address: "上海市普陀区金沙江路 1518 弄",
              zip: 200333
            },
            {
              id: 12,
              date: "2016-05-01",
              label: "王小虎c2",
              prop: "date",
              city: "普陀区",
              address: "上海市普陀区金沙江路 1518 弄",
              zip: 200333,
              children: [
                {
                  id: 121,
                  date: "2016-05-04",
                  label: "王小虎c1",
                  prop: "date",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                },
                {
                  id: 122,
                  date: "2016-05-01",
                  label: "王小虎c2",
                  prop: "date",
                  city: "普陀区",
                  address: "上海市普陀区金沙江路 1518 弄",
                  zip: 200333
                }
              ]
            }
          ]
        },
        {
          id: 2,
          date: "2016-05-02",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 3,
          date: "2016-05-04",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 4,
          date: "2016-05-01",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 5,
          date: "2016-05-08",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 6,
          date: "2016-05-06",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          id: 7,
          date: "2016-05-07",
          label: "王小虎",
          prop: "date",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],

      printModal: false,
      formValidate: {
        time: "",
        scope: "",
        ids: ""
      },
      //获取到的数据
      BSKSList: [],
      JNKSList: [],
      JKList: [],

      startTime: "",
      selectOption: [],
      printData: [],
      button: {
        deriveId: {
          id: "deriveId",
          title: "打印"
        }
      },
      printId: {
        id: "printId",
        title: "打印二维码"
      }
    };
  },
  methods: {
    //初始化请求列表数据
    init() {
      Util = this.$util;
      console.log(this.table);
    },
    cancel() {},
    formateSceneName(name) {
      let str = "";
      name.replace(/第\d*场/, item => {
        console.log(item);
        str = item;
      });

      return str;
    },
    print() {
      this.printModal = true;
    }
  },
  created() {
    this.init();
  },
  mounted() {},
  components: {
    printData
  }
};
</script>
<style lang="scss">
.firstStationTable {
  padding: 20px 0;
  .el-radio-group .el-radio {
    margin-left: 15px;
    margin-top: 4px;
  }

  .printDataList {
    p {
      line-height: 50px;
    }
    .el-table__expand-icon {
      display: none;
    }
  }

  .singleTable_tableHead {
    th {
      padding: 0 2px;
      border: 1px solid #000;
      text-align: center;
      font-size: 14px;
      line-height: 21px;
    }
  }

  table.tableList {
    table-layout: fixed;
    width: 98%;
    margin: 0 auto 5px auto;
  }

  table.tableList td {
    font-size: 16px;
    border: 1px solid #000;
    text-align: center;
    padding: 0;
    font-family: FangSong;
  }
  table.tableList .font-black {
    font-size: 16px;
    border: 1px solid #000;
    text-align: center;
    padding: 5px;
    font-family: SimHei;
  }

  table.tableList td .el-radio {
    margin-left: 15px;
  }

  .singleTable_addBorder {
    margin-top: -1px;
    border-top: 1px solid #dfe6ec;
  }

  /* .Stylee{
   !*   .el-table{
        tr {
          th {
            border: 1px solid #000;
          }
          td{
            border: 1px solid #000;
          }
        }
      }*!
    !*  .el-table td, .el-table th.is-leaf,.el-table--border, .el-table--group{
        border-color: black;
      }
      .el-table--border::after, .el-table--group::after, .el-table::before{
        background-color: black;
      }*!


      .el-table--border:after,
      .el-table--group:after,
      .el-table:before {
        background-color: #000;
      }

      .el-table--border,
      .el-table--group {
        border-color: #000;
      }

      .el-table td,
      .el-table th.is-leaf {
        border-bottom: 1px solid #000;
      }

      .el-table--border th,
      .el-table--border th.gutter:last-of-type {
        border-bottom: 1px solid #000;
      }

      .el-table--border td,
      .el-table--border th {
        border-right: 1px solid #000;
      }
    }*/
  .el-table {
    position: initial !important;
  }
  table {
    width: 99% !important;
    display: block;
    border-collapse: collapse;
    tbody {
      border-top: none !important;
    }
    th {
      border: solid 1px #000;
    }
    td {
      border: solid 1px #000;
    }
  }
}
</style>
