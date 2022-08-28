import { Link } from "react-router-dom";

const exampleProp = {
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
      href: "test",
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
};

const SubList = ({ sublist = exampleProp }) => {
  return (
    <>
      <tr>
        <td colSpan={3}>
          <div
            style={{
              position: "relative",
              marginBottom: "3px",
              marginTop: "6px",
              right: "12px",
            }}
          >
            <h2
              style={{
                color: "#210905",
                fontSize: "15px",
              }}
            >
              {sublist.title}
            </h2>
          </div>
        </td>
      </tr>
      {sublist.items.map((item) => (
        <tr>
          <td>{item.prefix}</td>
          <td>
            <span
              style={{
                marginRight: 16,
                color: "#451209",
                textDecoration: "none",
              }}
            >
              {item.href ? (
                <Link
                  style={{
                    marginRight: 16,
                    color: "#451209",
                    textDecoration: "none",
                  }}
                  to={item.href}
                >
                  {item.text}
                </Link>
              ) : (
                item.text
              )}
            </span>
          </td>
          <td>{item.sufix}</td>
        </tr>
      ))}
    </>
  );
};

export default SubList;
