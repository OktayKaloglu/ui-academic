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

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://89.252.131.124:8080/api/course");
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
          col={["organization", "name", "code"]}
          onRowClick={onRowClick}
        />
      ) : (
        <Row>
          <Col css={{ minWidth: "90ch" }}>
            <TableWrapper
              jsonData={jsonData}
              col={["organization", "initials", "course_name"]}
              onRowClick={onRowClick}
            />
          </Col>
          <Col>{rowID ? <CoursePage course={courseID} /> : <></>}</Col>
        </Row>
      )}
    </Container>
  );
};

export default Courses;
