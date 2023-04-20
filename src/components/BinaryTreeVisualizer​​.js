import React, { useContext, useEffect, useState } from "react";
import "../styles/BinaryTree.css";
import GlobalStore from "../context/context";
import SingleLevelTree from "./SingleLevelTree";
import { generateTreeData } from "../utils/helper";
import { findPath } from "../utils/findPath";

const BinaryTreeVisualizer = () => {
  const { state } = useContext(GlobalStore);
  const [original, setOriginal] = useState([]);
  const [treeData, setTreeData] = useState([]);

  useEffect(() => {
    if (state?.inputArray?.length > 0) {
      let data = generateTreeData(state?.inputArray);
      setTreeData(data);
      setOriginal(data);
    }
  }, [state]);

  const findPathHandler = (item) => {
    let res = findPath(item, original);
    setTreeData(res);
  }

  return (
    <div className="tree">
      <SingleLevelTree treeData={treeData} findPathHandler={findPathHandler} />
    </div>
  );
};

export default BinaryTreeVisualizer;
