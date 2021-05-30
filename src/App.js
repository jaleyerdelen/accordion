import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import data from "./data";
import Toggle from "./Toggle";

function App() {
  const [datas, setDatas] = useState(data);

  useEffect(() => {
    const item = localStorage.getItem("item");
    setDatas(JSON.parse(item))
  },[] )

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(datas));
  });

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const removeItem = (ID) => {
    showAlert(true, "danger", "item removed");
    setDatas(datas.filter(item => item.ID !== ID))
  };

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={datas} />}
      <h2 className="text-center">Collapse</h2>
      <div className="grocery-container"></div>
      <Toggle items={datas} removeItem={removeItem} />
    </section>
  );
}

export default App;
