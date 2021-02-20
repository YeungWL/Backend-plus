/**
 * @description: 公共的工具类
 */
export class Tool {
  /**
   * @description: 列表转树形结构分组
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
  /**
   * @description: 复制文本
   * @param {*} text 传入复制的内容
   * @param {*} callback 复制完成后的回调函数
   */
  copyText(text, callback) {
    let value = text.replace(/\s+/g, "");
    let element = document.createElement("span");
    element.textContent = value;
    document.body.appendChild(element);
    if (document.selection) {
      let range = document.body.createTextRange();
      range.moveToElementText(element);
      range.select();
    } else if (window.getSelection) {
      let range = document.createRange();
      range.selectNode(element);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    document.execCommand("Copy");
    element.remove ? element.remove() : element.removeNode(true);
    callback && callback();
  }
}
