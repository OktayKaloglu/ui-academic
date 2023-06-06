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
import TableWrapper from "../pages/table";
import Course from "../pages/Course";

export async function getServerSideProps() {
  const jsonData = require("../source/ege_clean.json");

  return {
    props: {
      jsonData,
    },
  };
}

const Courses = ({ jsonData }) => {
  return (
    <Container>
      <Grid.Container
        justify="center"
        css={{
          height: "500px",
          backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
        }}
      >
        <TableWrapper jsonData={jsonData} />
      </Grid.Container>
    </Container>
  );
};

export default Courses;
