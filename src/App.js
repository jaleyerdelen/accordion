import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import data from "./data";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
const [datas, setDatas] = useState([])


const setDatatoStorage = () => {
  const d = data;
  localStorage.setItem("item" ,JSON.stringify(d))

}

const getDataFromStorage = () => {
  const arrayOfData = localStorage.getItem("item")
  const d = arrayOfData !== null ? JSON.parse(arrayOfData) : []
  setDatas(d);
  
}

  const [list, setList] = useState(getLocalStorage());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };


const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList([]);
  };
  const removeItem = (ID) => {
    console.log(ID);
    showAlert(true, "danger", "item removed");
    setDatas(datas.filter((item) => item.ID !== ID));
    localStorage.setItem("item", JSON.stringify(datas));
    
  };

  useEffect(() => {
   setDatatoStorage();
   getDataFromStorage();
  }, []);

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
