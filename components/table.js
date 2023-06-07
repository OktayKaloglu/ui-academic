import React, { useState } from "react";
import { Row, Table, Container, Col } from "@nextui-org/react";

const TableWrapper = ({ jsonData, onRowClick, col }) => {
  const [rowID, setRowID] = useState(0);
  const handleClick = (index) => {
    setRowID(index);
    onRowClick(index);
  };
  return (
    <Container>
      <Table
        className="column"
        compact
        bordered
        aria-label="Example static collection table"
        selectionMode="single"
        onSelectionChange={"true"}
        onRowAction={(key) => handleClick(key)}
      >
        <Table.Header>
          {col.map((row, index) => (
            <Table.Column>{JSON.stringify(row)}</Table.Column>
          ))}
        </Table.Header>
        <Table.Body>
          {jsonData.map((row, index) => (
            <Table.Row key={index}>
              {col.map((cl, j) => (
                <Table.Cell>{JSON.stringify(row[cl])}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

export default TableWrapper;
