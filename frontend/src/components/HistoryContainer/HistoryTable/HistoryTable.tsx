import { generateUniqueKey, calculateLastModified } from "../../../util/utils";
import { Button } from "../../Button/Button";

export type HistoryTableProps = {
  items: {
    pair: string;
    price: number;
    at: string;
  }[];
  refetch: () => void;
};

export const HistoryTable = ({ items, refetch }: HistoryTableProps) => {
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
    <>
      <table style={{ width: "100%" }}>
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
      <Button width={"100%"} onClick={refetch}>
        Refetch History
      </Button>
    </>
  );
};
