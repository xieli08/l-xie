<template>
  <div class="salary">
    <div class="loading" v-if="loading">
      <!-- <img src="../../assets/loading3.gif" alt=""> -->
      <img src="../assets/loading3.gif" alt="">
    </div>
    <div v-else>
      <div class="salary-header">
        <i @click="preMonth()" class="cubeic-back"></i>
        <span @click="showDatePicker" >{{month}}</span>
        <i @click="backMonth()" class="cubeic-arrow"></i>
      </div>
      <div  class="table_msg" v-if="flag">
        <div v-for="(item,key) in list" :key="key" class="table_a">
          <span>{{key}}:</span>
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <cube-button @click="showToastType" v-if="toast" style="background-color: #fff;"></cube-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'salarytip',
  data: function () {
    return {
    list: [],
    user_id: '',
    month: '',
    flag: true,
    user_name: '',
    loading: true,
    toast: false,
    }
  },
  created: function () {
    
  },
  mounted: function () {
    
    this.user_id = this.$route.params.user_id
    this.month = this.$route.params.month
    console.log(this.user_id)
    this.request()
  },
  methods: {
    // 请求后台数据
    request: function () {
      // axios
      // token
      // this.$http.get('https://api.chinacaring.com:20224/salary/user/1208/' + this.user_id + '/' + this.month).then( function (response) {
      //   // console.log(response.body)
      //   const {code,data} = response.body
      //   // 成功回调
      //   if (code === 0) {
      //     this.loading = false
      //     this.flag = true
      //     this.list = JSON.parse(data) 
      //     // console.log(this.list)
      //     this.user_name = this.list['姓名']
      //   } else {
      //     this.flag = false
      //     this.showAlert()
      //   }  
      setTimeout(()=>{
      const self = this
      axios({
        method: 'GET',
        url: 'https://api.chinacaring.com:20224/salary/user/1208/'+ self.user_id + '/' + self.month,
        async: true,
      }).then(function (res) {
        self.loading = false
        self.flag = true
        // console.log(res.data.data) 打印出来是对象字符串
        self.list = JSON.parse(res.data.data) 
        self.user_name = self.list['姓名']
      }).catch(function(){
         this.flag = false
        this.showAlert()
      })
      }, Math.random() * 1000)
    },
    // 日期插件
    showDatePicker: function () {  
      this.$createDatePicker({
        title: '选择年月',
        min: new Date(2008, 7),
        max: new Date(),
        columnCount: 2,
        value: new Date(),
        onSelect: this.selectHandle,
        format: {year: 'YY年', month: 'MM月'}
      }).show()
    },
    selectHandle: function (date, selectedVal, selectedText) {
      this.month = selectedVal[0] + '-' + selectedVal[1]
      this.flag = true
      this.request()
      // console.log(selectedVal)
      
    },
    /**
      * 获取上一个月
      *
      * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
      */
    getPreMonth: function (date) {
       console.log(date)
      let arr = date.split('-');
      let year = arr[0]; //获取当前日期的年份
      let month = arr[1]; //获取当前日期的月份
      let year2 = year;
      let month2 = parseInt(month) - 1;
      if (month2 == 0) {
          year2 = parseInt(year2) - 1;
          month2 = 12;
      }
    
      if (month2 < 10) {
          month2 = '0' + month2;
      }
      let t2 = year2 + '-' + month2;
      return t2;
    },
    // 前一个月
    preMonth: function () { 
      this.month = this.getPreMonth(this.month)
      this.request(this.month)
    },
    /**
     * 获取下一个月
     *
     * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
     */        
    getNextMonth: function (date) {
      let arr = date.split('-');
      let year = arr[0]; //获取当前日期的年份
      let month = arr[1]; //获取当前日期的月份

      let year2 = year;
      let month2 = parseInt(month) + 1;
      if (month2 == 13) {
          year2 = parseInt(year2) + 1;
          month2 = 1;
      }
 
      if (month2 < 10) {
          month2 = '0' + month2;
      }
      let t2 = year2 + '-' + month2;
      return t2;
    },
    // 后一个月
    backMonth: function () {
      var currentMonth = new Date()
      var currentMonth = currentMonth.getMonth() + 1
      var getmonth = this.month.split('-')[1]
      console.log(getmonth)
      if(getmonth < currentMonth){
        this.month = this.getNextMonth(this.month)
        this.request(this.month)
      }else{
        this.showToastType()
        this.toast = true
        this.request(getmonth)
      }
      
      
      
    },
    // 失败弹框
    showAlert: function () {
      let salaryTime = this.month.split('-')
      this.$createDialog({
        type: '提示',
        title: this.user_name + ',您好',
        content: salaryTime[0] + '年' + salaryTime[1] + '月' + '工资条尚未发放',
        icon: 'cubeic-alert'
      }).show()
    },
     showToastType() {
      const toast = this.$createToast({
        txt: '只能查询到本月',
        type: '只能查询到本月'
      })
      toast.show()
    }
  },
      
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.salary {
  position:absolute;
  top:0;
  left:0;
  z-index:3;
  width:100%;
  background-color: #fff;
  overflow: hidden;
  .loading{
    img{
      width:100%;
      height:100%
    }
  }
  div{
    .salary-header {
      position: relative;
      height: 50px;
      width: 100%;
      :nth-child(1) {
        position: absolute;
        font-weight: 800;
        font-size: 14px;
        top: 30%;
        left: 5px;
      }
      :nth-child(2) {
        display: block;
        font-weight: 800;
        width: 80%;
        height: 100%;
        margin-left: 10%;
        transform: translateY(30%);
        text-align: center;
      }
      :nth-child(3) {
        position: absolute;
        font-weight: 800;
        font-size: 14px;
        top: 30%;
        right: 5px;
      }
    }
    .table_msg {
      width: 100%;
      border-collapse: collapse;
      .table_a {
        width: 100%;
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #ccc;
        :nth-child(odd) {
          display:inline-block;
          width: 50%;
          text-align: center;
        }
        :nth-child(even) {
          margin-left: 15%;
          width: 50%;
          font-weight: 800;
          text-align: center;
          color: rgb(3, 58, 3);
        }
      }
    }
  } 
}
</style>