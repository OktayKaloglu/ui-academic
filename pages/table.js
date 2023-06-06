import React, { useState } from "react";
import { Row, Table, Container } from "@nextui-org/react";
import CoursePage from "./Course";
export async function getServerSideProps() {
  const jsonData = require("../source/ege_clean.json");

  return {
    props: {
      jsonData,
    },
  };
}

const TableWrapper = ({ jsonData }) => {
  const col = Object.keys(jsonData[0]);

  const [rowID, setRowID] = useState(0);
  const handleClick = (index) => {
    setRowID(index);
  };
  return (
    <Container>
      <Row>
        <Table
          className="column"
          sticked
          striped
          compact
          bordered
          aria-label="Example static collection table"
          selectionMode="toggle"
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
      </Row>
      <Row>{rowID ? <CoursePage course={jsonData[rowID]} /> : <></>}</Row>
    </Container>
  );
};

export default TableWrapper;
