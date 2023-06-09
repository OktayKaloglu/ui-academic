import React, { useState } from "react";
import {
  Container,
  Navbar,
  Text,
  Button,
  Grid,
  Col,
  Table,
  Row,
} from "@nextui-org/react";
import TableWrapper from "../components/table";

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://89.252.131.124:8080/api/university");
    if (!res.ok) {
      throw new Error("Bad request");
    }
    const json = await res.json();
    const jsonData = json["data"];
    return { props: { jsonData } };
  } catch (error) {
    return { props: { error: error.message } };
  }
};

const Universities = ({ jsonData }) => {
  const [rowID, setRowID] = useState(-1);
  const onRowClick = (index) => {
    setRowID(index);
  };
  const onRowClick2 = (index) => {
    console.log(index);
  };
  return (
    <Container
      css={{
        backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
      }}
    >
      {rowID == -1 ? (
        <TableWrapper
          jsonData={jsonData}
          col={Object.keys(jsonData[0])}
          onRowClick={onRowClick}
          select={"replace"}
        />
      ) : (
        <Row className=".column">
          <Col css={{ minWidth: "70ch" }}>
            <TableWrapper
              jsonData={jsonData}
              col={Object.keys(jsonData[0])}
              onRowClick={onRowClick}
              select={"replace"}
            />
          </Col>
          <Col>
            <TableWrapper
              jsonData={jsonData}
              col={Object.keys(jsonData[0])}
              onRowClick={onRowClick2}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Universities;
