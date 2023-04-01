const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function removeItem() {
    submittingStatus.current = true;
    deleteData(function (prev) {
      return prev.filter((item) => item.id !== id);
    });
  }
  return (
    <div className="item">
      <p>{note}</p>
      <p>
        {date} {time}
      </p>
      <button onClick={removeItem} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;

// const Item = ({ id, note, date, time, deleteData }) => {
//     console.log(deleteData);
//     function deleteItem() {
//         deleteData(function(prev) {
//             return prev.filter(item => item.id !== id) // 利用 filter 篩選出不同本身 id 的回傳
//         })
//     }
//     return (
//         <div className="item">
//         <div>
//             <p>{note}</p>
//             <p>
//                 {date} {time}
//             </p>
//         </div>
//         <button onClick={deleteItem} className="remove">刪除</button>
//         </div>
//     );
// };

// export default Item;
