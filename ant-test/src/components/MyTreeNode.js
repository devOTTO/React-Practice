import React, {Component} from "react";
import "antd/dist/antd.css";
import { Tree } from "antd";

const { TreeNode, DirectoryTree } = Tree;

const MyTreeNode = (props) => {
    return (
      <TreeNode title = {props.title} key={props.key} isLeaf={props.isLeaf} />
    )
}

export default MyTreeNode