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
import InstructorDetails from "./instructor";

export async function getServerSideProps() {
  const jsonData = require("../source/author.json");

  return {
    props: {
      jsonData,
    },
  };
}

const Instructors = ({ jsonData }) => {
  const [rowID, setRowID] = useState(0);
  const onRowClick = (index) => {
    setRowID(index);
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
            col={["name", "affiliation"]}
            onRowClick={onRowClick}
          />
        </Col>
        <Col>
          {rowID ? (
            <InstructorDetails
              instructor={jsonData[rowID]}
              displayFull={false}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Instructors;
