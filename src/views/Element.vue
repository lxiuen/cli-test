<template>
  <div class="element">
    <h1>element-ui example - components</h1>
    <div class="item-">
      <h2>基础组件</h2>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <h4>layout布局</h4>
      <!-- 基础布局 -->
      <el-row>
        <el-col :span="24"
          ><div class="grid-content bg-purple-dark">span基础布局</div></el-col
        >
      </el-row>
      <!-- 分栏间隔 -->
      <el-row :gutter="10">
        <el-col :span="4"><div class="grid-content bg-purple">4</div></el-col>
        <el-col :span="16"
          ><div class="grid-content bg-purple-light">
            gutter分栏间隔
          </div></el-col
        >
        <el-col :span="4"
          ><div class="grid-content bg-purple">混合布局</div></el-col
        >
      </el-row>
      <!-- 分栏偏移 -->
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6" :offset="6"
          ><div class="grid-content bg-purple">offset分栏偏移</div></el-col
        >
      </el-row>
      <!-- 对齐方式 -->
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6"
          ><div class="grid-content bg-purple">flex布局</div></el-col
        >
        <el-col :span="6"
          ><div class="grid-content bg-purple-light">center对齐</div></el-col
        >
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="end">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light">end对齐</div></el-col
        >
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="space-between">
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple-light">
            space-between对齐
          </div></el-col
        >
        <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      <!-- 响应式布局 预设五个响应尺寸：xs、sm、md、lg 和 xl-->
      <el-row :gutter="10">
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <!-- 基于断点的隐藏类 -->
      <h4>Container 布局容器</h4>
      <!-- 常见页面布局 -->
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
      <!--  -->
      <el-container>
        <el-header height="40px">Header 40px</el-header>
        <el-container>
          <el-aside width="200px">Aside width 200px</el-aside>
          <el-container>
            <el-main>Main</el-main>
            <el-footer height="60px">Footer 60px</el-footer>
          </el-container>
        </el-container>
      </el-container>
      <!--  -->
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <h4>Icon图标</h4>
      <i class="el-icon-deit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
      <el-button type="primary" icon="el-icon-search" size="default"
        >搜索</el-button
      >
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <h4>Button按钮</h4>
      <p>使用type、plain、round和circle属性来定义 Button 的样式。</p>
      <el-row>
        <el-button disabled>默认禁用</el-button>
        <el-button type="primary" plain>主要按钮 plain</el-button>
        <el-button type="success" round>成功按钮 round</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-message" circle></el-button>
      </el-row>
      <el-row>
        <el-button type="text" icon="el-icon-edit">文字按钮</el-button>
        <el-button type="text" icon="el-icon-message" disabled
          >文字按钮</el-button
        >
      </el-row>
      <el-button-group>
        <el-button type="primary" size="default" icon="el-icon-arrow-left"
          >按钮组</el-button
        >
        <el-button type="primary" size="default"
          >下一页<i class="el-icon-arrow-right el-icon--right"></i
        ></el-button>
      </el-button-group>
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <el-row>
        <el-button type="primary" size="default" :loading="true"
          >loading...</el-button
        >
      </el-row>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮medium</el-button>
        <el-button size="small">小型按钮small</el-button>
        <el-button size="mini">超小按钮mini</el-button>
      </el-row>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <h4>Link文字联结</h4>
      <div>
        <el-link type="primary" :underline="true" href="" target="_blank"
          >主要链接</el-link
        >
        <el-link type="success" :underline="false" href="" target="_blank"
          >成功链接</el-link
        >
        <el-link
          type="warning"
          :underline="false"
          href=""
          target="_blank"
          disabled
          >警告禁用链接</el-link
        >
        <el-link type="danger" :underline="false" href="" target="_blank"
          >危险链接</el-link
        >
        <el-link type="info" :underline="false" href="" target="_blank"
          >查看<i class="el-icon-view el-icon--right"></i
        ></el-link>
        <el-link type="" :underline="false" href="" target="_blank"
          >默认链接</el-link
        >
      </div>
    </div>
    <div class="item-">
      <h2>form组件</h2>
      <template>
        <el-radio v-model="radio" label="1">备选项</el-radio>
        <el-radio v-model="radio" label="2">备选项</el-radio>
      </template>
      <h4>checkbox</h4>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <p>indeterminate状态</p>
      <template>
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox
        >
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group
          v-model="checkedCities"
          @change="handleCheckedCitiesChange"
        >
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{
            city
          }}</el-checkbox>
        </el-checkbox-group>
      </template>
      <h4>input输入框</h4>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <el-input
        v-model="input"
        suffix-icon="el-icon-date"
        placeholder="请输入内容"
        size="normal"
        clearable
        show-password
      ></el-input>
      <h4>Form表单校验</h4>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <el-form
        status-icon
        class="example-ruleForm"
        :model="ruleForm"
        ref="ruleForm"
        :rules="rules"
        label-width="100px"
        size="medium"
      >
        <!--  -->
        <el-form-item label="活动名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <!--  -->
        <el-form-item label="活动区域" prop="region">
          <el-select
            v-model="ruleForm.region"
            placeholder="请选择活动区域"
            class="w100"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <!--  -->
        <el-form-item label="活动时间" required>
          <el-col :span="11">
            <el-form-item prop="date1">
              <el-date-picker
                v-model="ruleForm.date1"
                type="date"
                placeholder="选择日期"
                class="w100"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="2" class="line">-</el-col>
          <el-col :span="11">
            <el-form-item prop="date2">
              <el-date-picker
                v-model="ruleForm.date2"
                type="date"
                placeholder="选择日期"
                class="w100"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <!--  -->
        <el-form-item label="即时配送" prop="delivery">
          <el-switch v-model="ruleForm.delivery"> </el-switch>
        </el-form-item>
        <!--  -->
        <el-form-item label="活动性质" prop="type">
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
            <el-checkbox label="地推活动" name="type"></el-checkbox>
            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="特殊资源" prop="resource">
          <el-radio-group v-model="ruleForm.resource">
            <el-radio label="线上品牌商赞助"></el-radio>
            <el-radio label="线下场地免费"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="活动形式" prop="desc">
          <el-input type="textarea" v-model.number="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即创建</el-button
          >
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
      <h4>Table表格</h4>
      <el-divider direction="horizontal" content-position="left"></el-divider>
      <template>
        <el-table
          ref="exampleTable"
          :data="tableData"
          :row-class-name="tableRowClassName"
          highlight-current-row
          @current-change="handleCurrentChange"
          height="250"
          border
          stripe
        >
          <el-table-column type="selection" width="50" fixed></el-table-column>
          <el-table-column type="index" width="50" fixed></el-table-column>
          <el-table-column prop="date" label="日期" width="180" fixed sortable>
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="180">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="setCurrent(tableData[1])"
            >单选选中第二行</el-button
          >
          <el-button @click="setCurrent()">取消单选</el-button>
        </div>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])"
            >切换第二、第三行的选中状态</el-button
          >
          <el-button @click="toggleSelection()">取消多选</el-button>
        </div>
      </template>
      <h4>自定义列模版</h4>
      <template>
        <el-table
          :data="
            searchData.filter(
              data =>
                !search ||
                data.name.toLowerCase().includes(search.toLowerCase())
            )
          "
          style="padding: 20px"
        >
          <el-table-column label="日期" width="180">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{ scope.row.date }}</span>
            </template>
          </el-table-column>
          <el-table-column label="姓名">
            <template slot-scope="scope">
              <el-popover placement="top" trigger="hover">
                <p>姓名: {{ scope.row.name }}</p>
                <p>住址: {{ scope.row.address }}</p>
                <div slot="reference">
                  <el-tag size="medium">{{ scope.row.name }}</el-tag>
                </div>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot="header">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"
              />
            </template>
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)"
                >Edit</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
  </div>
</template>

<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  name: "Element",
  data() {
    let chekDesc = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("自定义验证：不能为空哦"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "张三",
          address:
            "上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "里斯",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "小狗",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "Nora",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      searchData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "张三",
          address:
            "上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "里斯",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "小狗",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "Nora",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ validator: chekDesc, trigger: "blur" }]
      },
      search: "",
      input: "",
      radio: 1,
      checkAll: false,
      checkedCities: ["上海", "深圳"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.exampleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.exampleTable.clearSelection();
      }
    },
    setCurrent(row) {
      this.$refs.exampleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      console.log(val);
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
      this.$message({
        message: "删除成功",
        type: "success"
      });
    },
    handleClick(row) {
      console.log(row);
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex === 0) {
        return "warning-row";
      } else if (rowIndex === 2) {
        return "success-row";
      }
      return "";
    },
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      console.log(value);
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="scss">
@import "../styles/element.scss";
</style>
