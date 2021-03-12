/*
 * @Description: 列表分页混入mixin
 * @Author: Yeung
 * @Date: 2021-02-21 00:50:06
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-12 17:22:35
 */
let pagination = {
  data() {
    return {
      pageParams: {
        pageSize: 10,
        pageNum: 1
      },
      pageInfo: {
        total: null,
        list: [],
      },
      pageSizes: [10, 20, 50, 100],
      pageLayout: 'total, sizes, prev, pager, next, jumper'
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
    },
    removeMixin() {
      if (this.pageInfo.list.length === 1) {
        this.pageParams.pageNum === 1
          ? (this.pageParams.pageNum = 1)
          : this.pageParams.pageNum--;
      }
      this.getListMixin()
    }
  },
}

export default pagination
