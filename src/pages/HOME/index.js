import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";
import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants"
// const [edit, setEdit] = useState(100) react hook 要寫在 React function component、custom React hook function 中

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({ data })
  })
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingStatus = useRef(false);

  useEffect(() => {
    if (!submittingStatus.current) {
      return;
    }
    fetchSetData(data)
      .then(data => submittingStatus.current = false)
  }, [data]) // data 變動後，post 進資料庫

  useEffect(() => {
    fetchData(setData)    
  }, [])
  
  return (
    <div className="app">
      <Edit add={setData} submittingStatus={submittingStatus}/>
      <List listData={data} deleteData={setData} submittingStatus={submittingStatus} />
    </div>
  );
};

export default Home;

// const Home = () => {
//   const [data, setData] = useState([]);
//   console.log(data);
//   return (
//     <div className="app">
//       <Edit add={setData} />
//       <List listData={data} deleteData={setData} />
//     </div>
//   );
// };

// export default Home;
