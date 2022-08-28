import SubList from "./SubList";

const exampleProp = [
  {
    title: "Test",
    items: [
      {
        prefix: (
          <div style={{ width: 12, height: 12, backgroundColor: "brown" }} />
        ),
        text: "hej",
        sufix: (
          <div style={{ width: 12, height: 12, border: "1px solid brown" }} />
        ),
      },
      {
        prefix: (
          <div style={{ width: 12, height: 12, backgroundColor: "brown" }} />
        ),
        text: "hej2",
        sufix: (
          <div style={{ width: 12, height: 12, border: "1px solid brown" }} />
        ),
      },
    ],
  },
  {
    title: "Test2",
    items: [
      {
        prefix: (
          <div style={{ width: 12, height: 12, backgroundColor: "brown" }} />
        ),
        text: "hej3",
        sufix: (
          <div style={{ width: 12, height: 12, border: "1px solid brown" }} />
        ),
      },
      {
        prefix: (
          <div style={{ width: 12, height: 12, backgroundColor: "brown" }} />
        ),
        text: "hej4",
        sufix: (
          <div style={{ width: 12, height: 12, border: "1px solid brown" }} />
        ),
      },
    ],
  },
];

const List = ({ list = exampleProp }) => {
  return (
    <table
      style={{
        borderCollapse: "separate",
        borderSpacing: "0 2px",
      }}
    >
      <tbody>
        {list.map((sublist) => (
          <SubList sublist={sublist} />
        ))}
      </tbody>
    </table>
  );
};

export default List;
