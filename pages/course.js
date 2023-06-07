import React from "react";
import { Card, Container, Text, Link } from "@nextui-org/react";

const CoursePage = ({ course }) => {
  return (
    <Container>
      <Card
        css={{
          backgroundImage: "url(https://littlevisuals.co/images/sunset.jpg)",
        }}
      >
        <Card.Body>
          <Text h1>{course.course_name}</Text>
          <Text>
            <b>Organization:</b> {course.organization}
          </Text>
          <Text>
            <b>Course Code:</b> {course.course_code}
          </Text>
          <Text>
            <b>Instructor:</b> {course.instructor}
          </Text>
          <Text>{course.course_info}</Text>
          <Link href={course.href} target="_blank">
            Course Details
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CoursePage;
