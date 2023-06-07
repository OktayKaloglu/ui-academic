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

export async function getServerSideProps() {
  const jsonData = require("../source/ege_clean.json");

  return {
    props: {
      jsonData,
    },
  };
}

const Universities = ({ jsonData }) => {
  const [rowID, setRowID] = useState(0);
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
      <Row>
        <Col>
          <TableWrapper
            jsonData={jsonData}
            col={["organization", "initials"]}
            onRowClick={onRowClick}
            select={"replace"}
          />
        </Col>
        <Col>
          {rowID ? (
            <TableWrapper
              jsonData={jsonData}
              col={["organization", "course_name"]}
              onRowClick={onRowClick2}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Universities;
