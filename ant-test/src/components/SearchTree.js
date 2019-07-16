import React, {Component} from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";
import MyTreeNode from "./MyTreeNode"

const { TreeNode, DirectoryTree } = Tree;

export default class SearchTree extends Component {
  
  state = {
    autoExpandParent: false,
    checkedKeys: [],
    selectedKeys: [],
    expandedKeys: [],
  }

  onSelect = (selectedKeys, info) => {
    console.log("Trigger Select", selectedKeys, info);
    this.setState({selectedKeys});
  };

  onExpand = expandedKeys => {
    console.log('onExpand', expandedKeys);
    // if not set autoExpandParent to false, if children expanded, parent can not collapse.
    // or, you can remove all expanded children keys.
    this.setState({
      expandedKeys,
      autoExpandParent: false,
    });
  };

  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
    this.setState({checkedKeys})
  }

  render() {
    return (
      <DirectoryTree 
        multiple //중복 선택
        checkable //선택 가능
        checkStrictly //auto parent 안하기 - false/true로 가능하게
        onSelect={this.onSelect} 
        selectedKeys={this.state.onSelect}
        onExpand={this.onExpand}
        autoExpandParent={this.state.autoExpandParent}
        onCheck={this.onCheck}
        checkedKeys={this.state.checkedKeys}
        >
          <TreeNode key='2' title = '2'/>
          <MyTreeNode key='1' title='1' isLeaf='True'/>
      </DirectoryTree>
    );
  }
}

