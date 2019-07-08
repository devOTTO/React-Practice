import React, {Component} from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";

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
        <TreeNode title="parent 0" key="0-0">
          <TreeNode title="leaf 0-0" key="0-0-0" isLeaf /> 
          <TreeNode title="leaf 0-1" key="0-0-1" isLeaf />
        </TreeNode>
        <TreeNode title="parent 1" key="0-1">
          <TreeNode title="parent 2" key="0-">
            <TreeNode title="leaf 1-0" key="0-1-0" isLeaf />
            <TreeNode title="leaf 1-1" key="0-1-1" isLeaf />
          </TreeNode>
        </TreeNode>
      </DirectoryTree>
    );
  }
}

