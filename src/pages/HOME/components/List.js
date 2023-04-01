import Item from "./Item";

// const arr = ['1', '2', '3']

const List = ({ listData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            id={id}
            key={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;

// const List = ({ listData, deleteData }) => {
//   return (
//     <div className="list">
//       {listData.map((item) => {
//         const { note, date, time, id } = item; // 解構賦值
//         return (
//             <Item
//                 key={id}
//                 id={id}
//                 note={note}
//                 date={date}
//                 time={time}
//                 deleteData={deleteData}
//             />
//         )
//       })}
//     </div>
//   );
//   // arr.map((item) => {
//   //
//   // })
//   // // <Item />
// };

// export default List;
