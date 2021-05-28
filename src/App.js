import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import data from "./data";

function App() {
  const [datas, setDatas] = useState([]);

  const setDatatoStorage = (data) => {
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
    let item = localStorage.getItem("item");
    const arrayOfData = JSON.parse(item);
    arrayOfData.forEach((item, index) => {
      if (ID === item.ID) {
        arrayOfData.splice(index, 1);
      }
    });
    setDatatoStorage(arrayOfData);
    setDatas(arrayOfData);
  };

  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setDatas(data);
    setDatatoStorage(data);
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
        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>
    </section>
  );
}

export default App;
