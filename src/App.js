import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import data from "./data";
import Toggle from "./Toggle"

function App() {
  const [datas, setDatas] = useState(data);

  const setDatatoStorage = (data) => {
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

  // It will be deleted
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setDatas(data);
    setDatatoStorage(data);
  };

  useEffect(() => {
    getDataFromStorage();
  }, []);

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={datas} />}
      <h3>grocery bud</h3>
      <div className="grocery-container">

        <button className="clear-btn" onClick={clearList}>
          clear items
        </button>
      </div>
      <Toggle items={datas} removeItem={removeItem} />
    </section>
  );
}

export default App;
