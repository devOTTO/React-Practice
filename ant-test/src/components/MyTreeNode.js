import React, {Component} from "react";
import "antd/dist/antd.css";
import { Tree, Button} from "antd";

const { TreeNode, DirectoryTree } = Tree;

const MyTreeNode = (props) => {

  const onClick = (v) => {
    console.log(v)
    v.stopPropagation()
  }
    return (
      <span>
        <span>{props.title}</span>
        <Button onClick = {onClick} />
      </span>
    )
}

export default MyTreeNode