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
import CoursePage from "./course";

export async function getServerSideProps() {
  const jsonData = require("../source/ege_clean.json");

  return {
    props: {
      jsonData,
    },
  };
}

const Courses = ({ jsonData }) => {
  const [rowID, setRowID] = useState(-1);
  const onRowClick = (index) => {
    setRowID(index);
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
          col={["organization", "initials", "course_name"]}
          onRowClick={onRowClick}
        />
      ) : (
        <Row>
          <Col>
            <TableWrapper
              jsonData={jsonData}
              col={["organization", "initials", "course_name"]}
              onRowClick={onRowClick}
            />
          </Col>
          <Col>{rowID ? <CoursePage course={jsonData[rowID]} /> : <></>}</Col>
        </Row>
      )}
    </Container>
  );
};

export default Courses;
