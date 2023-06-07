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
import { useRouter } from "next/router";
export async function getServerSideProps() {
  const jsonData = require("../source/author.json");

  return {
    props: {
      jsonData,
    },
  };
}

const Instructors = ({ jsonData }) => {
  const router = useRouter();
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
          col={["name", "affiliation"]}
          onRowClick={onRowClick}
        />
      ) : (
        <Row>
          <Col>
            <TableWrapper
              jsonData={jsonData}
              col={["name", "affiliation"]}
              onRowClick={onRowClick}
            />
          </Col>
          <Col>
            <Container
              onClick={() => {
                router.push("./instructor");
              }}
            >
              <InstructorDetails
                instructor={jsonData[rowID]}
                displayFull={false}
              />
            </Container>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Instructors;
