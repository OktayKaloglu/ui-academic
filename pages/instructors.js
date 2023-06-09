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

export const getServerSideProps = async () => {
  try {
    const res = await fetch("http://89.252.131.124:8080/api/instructor");
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
          col={Object.keys(jsonData[0])}
          onRowClick={onRowClick}
        />
      ) : (
        <Row>
          <Col css={{ minWidth: "90ch" }}>
            <TableWrapper
              jsonData={jsonData}
              col={Object.keys(jsonData[0])}
              onRowClick={onRowClick}
            />
          </Col>
          <Col>
            <Container
              onClick={() => {
                router.push({
                  pathname: "/instructor",
                  query: {
                    instructor_id: jsonData[rowID].id,
                    displayFull: true,
                  },
                });
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
