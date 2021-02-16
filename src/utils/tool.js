/*
 * @Description: 公共的工具类
 * @Author: Yeung
 * @Date: 2021-02-15 23:40:49
 * @LastEditors: Yeung
 * @LastEditTime: 2021-02-15 23:46:03
 */
export class Tool {
  /**
   * @description: 列表转分组
   * @param {*} list
   * @param {*} config
   * @return {*} tree
   */
  listToGroup(list, config) {
    const defaultConfig = {
      id: 'id',
      children: 'children',
      parentId: 'parentId',
      rootId: null
    }
    Object.assign(defaultConfig, config)
    let tree = [];
    let temp;
    for (let i = 0; i < list.length; i++) {
      if (list[i][defaultConfig.parentId] == defaultConfig.rootId) {
        let obj = list[i];
        temp = this.listToGroup(list, {
          id: defaultConfig.id,
          children: defaultConfig.children,
          parentId: defaultConfig.parentId,
          rootId: obj[defaultConfig.id],
        });
        if (temp.length > 0) {
          obj[defaultConfig.children] = temp;
        }
        tree.push(obj);
      }
    }
    return tree;
  }
}
