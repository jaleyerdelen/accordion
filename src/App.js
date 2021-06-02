import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import data from "./data";
import Toggle from "./Toggle";

function App() {
  const [datas, setDatas] = useState(data, () => {
    const item = localStorage.getItem("item");
    console.log(item);
    return item ? JSON.parse(item) : [];
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(datas));
  }, [datas]);

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (ID) => {
    showAlert(true, "danger", "item removed");
    setDatas(datas.filter((item) => item.ID !== ID));
  };

  

    let arr = [];
    const nest = (items, ID, link = "parentID") =>
      arr = items
        .filter((item) => item[link] === ID)
        .map((item) => ({ ...item, children: nest(items, item.ID) }));
        
    nest(data)

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={datas} />}
      <h2 className="text-center">Collapse</h2>
      <div className="grocery-container"></div>
      <Toggle  items={arr} removeItem={removeItem} /> 
    </section> 
   
  );
} 

export default App;
