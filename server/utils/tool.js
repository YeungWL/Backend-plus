/*
 * @Description: 工具类
 * @Author: ywl
 * @Date: 2021-03-10 16:21:50
 * @LastEditors: ywl
 * @LastEditTime: 2021-03-10 16:37:37
 */
let fs = require('fs');
class Tool {
  /**
   * @description: 通过传回来的页数，进行分页模拟
   * @param {*} p
   * @param {*} s
   * @param {*} src
   * @return {*} 分页数据
   */
  pagination(p, s, src) {
    //p为页数，比如第一页传0，第二页传1,s为每页多少条数据
    let res = fs.readFileSync(src)
    let person = res.toString();
    person = JSON.parse(person);
    //把数据读出来
    let total = person.data.length;
    let pagePerson = person.data.slice(s * p, (p + 1) * s);
    console.log('------------------------查询成功pagePerson', p, s);
    let data = { list: pagePerson, total, pageSize: s, pageNum: p + 1 };
    return data
  }
}

module.exports = Tool
