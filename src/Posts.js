import React from "react";
import "./Posts.css";
import Post from "./Post";

import ExcelLogo from "./excel_logo.png";
import DataStructure from "./data_structure.png";
import Algo from "./algo.png";  
import ComputerNet from "./computer_net.png";

const Posts = () => {
  const blogPosts = [
    {
      title: "EXCEL",
      body: `Microsoft Excel is a spreadsheet software from the Microsoft Office office suite developed and distributed by Microsoft. The latest version is Excel 20211.

It is intended to run on Microsoft Windows, Mac OS X, 
Android, or Linux (using Wine) platforms. The Excel software 
integrates functions for numerical calculation, graphic representation, 
data analysis (notably pivot tables) and programming, 
which use macros written in the VBA language.`,
      author: "Nishant Singh ",
      imgUrl:ExcelLogo,
    },
    {
      title: "Data Structure ",
      body: `There are many real-life examples of 
      a stack. Consider an example of plates stacked 
      over one another in the canteen. The plate 
      which is at the top is the first one to be 
      removed, i.e. the plate which has been placed 
      at the bottommost position remains in the 
      stack for the longest period of time. So, it 
      can be simply seen to follow LIFO(Last In 
      First Out)/FILO(First In Last Out) order.`,
      author: "Suresh Kr",
      imgUrl:DataStructure
        ,
    },
    {
      title: "Algorithm",
      body: `The word Algorithm means “a process 
      or set of rules to be followed in calculations 
      or other problem-solving operations”. Therefore 
      Algorithm refers to a set of rules/instructions 
      that step-by-step define how a work is to be 
      executed upon in order to get the expected 
      results. `,
      author: "Monu Kr",
      imgUrl:Algo,
    },
    {
      title: "Computer Network",
      body: `An interconnection of multiple devices, 
      also known as hosts, that are connected using 
      multiple paths for the purpose of sending/
      receiving data media. Computer networks can 
      also include multiple devices/mediums which 
      help in the communication between two different 
      devices; these are known as Network devices
      and include things such as routers, switches,
      hubs, and bridges. `, 
      author: "Sonu Kr",
      imgUrl:ComputerNet
        ,
    },
  ];
  
  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  );
};
  
export default Posts;