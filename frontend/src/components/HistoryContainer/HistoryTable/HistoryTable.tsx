import { generateUniqueKey, calculateLastModified } from "../../../util/utils";

export type HistoryTableProps = {
  items: {
    pair: string;
    price: number;
    at: string;
  }[];
};

export const HistoryTable = ({ items }: HistoryTableProps) => {
  const tableHeadStyle = {
    textAlign: "left" as const,
    padding: "8px",
    borderBottom: "1px solid #ddd",
  };

  const tableCellStyle = {
    padding: "8px",
    borderBottom: "1px solid #f0f0f0",
  };

  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={tableHeadStyle}>Token Pair</th>
          <th style={tableHeadStyle}>Price</th>
          <th style={tableHeadStyle}>Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={generateUniqueKey()}>
            <td style={tableCellStyle}>{item.pair}</td>
            <td style={tableCellStyle}>{item.price.toFixed(2)}</td>
            <td style={tableCellStyle}>{calculateLastModified(item.at)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
