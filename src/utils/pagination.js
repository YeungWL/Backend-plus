/*
 * @Description: 列表分页混入mixin
 * @Author: Yeung
 * @Date: 2021-02-21 00:50:06
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-21 01:02:43
 */
let pagination = {
  data() {
    return {
      pageParams: {
        pageSize: 10,
        pageNum: 1
      },
    }
  },
  methods: {
    getListMixin() {
      console.error('请在页面中实现getListMixin方法');
    },
    handleSizeChangeMixin(size) {
      this.pageParams.pageNum = 1;
      this.pageParams.pageSize = size;
      this.getListMixin();
    },
    handleCurrentChangeMixin() {
      this.getListMixin()
    }
  },
}

export default pagination
