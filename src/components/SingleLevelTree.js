import React, {useState } from "react";
import "../styles/BinaryTree.css";

const SingleLevelTree = ({ treeData , findPathHandler}) => {
  const [current, setCurrentData] = useState('1');

  const path = (item) => {
    findPathHandler(item);
    setCurrentData(item);
  }
  return (
    <>
     {
      current &&  <ul>
      {treeData.map((item) => (
        <li key={item.id}>
          <div
            onClick={() => path(item)}
            className={item.showLevel ? "show-level" : "show"}
          >
            {item.data}
          </div>
          {item.children && item.children.length ? (
            <SingleLevelTree treeData={item.children} findPathHandler={findPathHandler} />
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
     }
    </>
  );
};

export default SingleLevelTree;
