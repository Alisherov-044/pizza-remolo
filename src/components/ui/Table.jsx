import { formatCurrency } from "../../utils";

export const Table = ({ title, data }) => {
  const sortData = (item, titleItem) => {
    const data = item[titleItem.key];
    return titleItem.key === "price" ? formatCurrency(data) : data;
  };

  return (
    <table className="table">
      <thead className="t-header">
        <tr>
          {title.map((item, index) => (
            <th key={index}>{item.value}</th>
          ))}
        </tr>
      </thead>
      <tbody className="t-body">
        {data.map((item) => (
          <tr key={item.id}>
            {title.map((titleItem) => (
              <td key={titleItem.id}>
                {titleItem.key
                  ? sortData(item, titleItem)
                  : titleItem.actions(item)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
