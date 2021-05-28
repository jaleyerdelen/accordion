import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import data from "./data";

function App() {
  const [datas, setDatas] = useState([]);

  const setDatatoStorage = (data) => {
    data = data;
    console.log("dattt", data);
    localStorage.setItem("item", JSON.stringify(data));
  };

  const getDataFromStorage = () => {
    const arrayOfData = localStorage.getItem("item");
    const d = arrayOfData !== null ? JSON.parse(arrayOfData) : [];
    setDatas(d);
  };

  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };


  const removeItem = (ID) => {
    showAlert(true, "danger", "item removed");

    setDatas(datas.filter((item) => item.ID !== ID));
    setDatatoStorage(datas);
  };

  useEffect(() => {
    //setDatatoStorage();
    getDataFromStorage();
  }, []);

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={datas} />}
      <h3>grocery bud</h3>
      <div className="grocery-container">
        <List items={datas} removeItem={removeItem} />

      </div>
    </section>
  );
}

export default App;
