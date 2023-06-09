import React from "react";
import {
  Image,
  Container,
  Card,
  Row,
  Text,
  Col,
  Spacer,
} from "@nextui-org/react";
import PublicationCard from "@/components/cards/publication";
import { useRouter } from "next/router";

const getMaxCitationsPublication = (publications) => {
  let maxPublication = null;

  for (const publication of publications) {
    if (
      !maxPublication ||
      publication.num_citations > maxPublication.num_citations
    ) {
      maxPublication = publication;
    }
  }

  return maxPublication;
};
const InstructorDetails = ({ instructor }) => {
  const router = useRouter();
  const { instructor_id, displayFull } = router.query;
  if (displayFull) {
    const max_citation = getMaxCitationsPublication(instructor.publications);
  }
  return (
    <Container gap={0}>
      <Row gap={1}>
        <Col className="column">
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Header>
              <Text h1>{instructor.filtered_name}</Text>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col xs>
                  <Image
                    autoResize="true"
                    src={instructor.profile_picture}
                    alt={instructor.filtered_name}
                    objectFit="contain"
                  />
                </Col>

                <Col css={{ marginLeft: "2vh" }}>
                  <Container>
                    <Text size={20}>
                      <b>Affiliation:</b> {instructor.affilation}
                    </Text>

                    <Text size={20}>
                      <b>Total Citation:</b> {instructor.citedby}
                    </Text>
                    <Text size={20}>
                      <b>Total in 5 year Citation:</b> {instructor.citedby5y}
                    </Text>
                    <Text size={20}>
                      <b>hindex:</b> {instructor.hindex}
                    </Text>
                    <Text size={20}>
                      <b>hindex in 5 year Citation:</b> {instructor.hindex5y}
                    </Text>
                    <Text size={20}>
                      <b>i10index:</b> {instructor.i10index}
                    </Text>
                    <Text size={20}>
                      <b>i10index5y:</b> {instructor.i10index5y}
                    </Text>
                  </Container>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {displayFull ? (
          <Row>
            <Col className="column">
              <Card css={{ $$cardColor: "$colors$primary" }}>
                <Card.Body>
                  <h2>Interests:</h2>
                  <ul>
                    {instructor.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </Card.Body>
                <Container>
                  <h2>Lessons:</h2>

                  {instructor.publications.map((publication, index) => (
                    <Card css={{ marginTop: "1vh" }} isHoverable key={index}>
                      <Card.Body>
                        <h3>{publication.bib.title}</h3>
                        <p>Publication Year: {publication.bib.pub_year}</p>
                        <p>Citation: {publication.bib.citation}</p>
                        <p>Number of Citations: {publication.num_citations}</p>
                        <a>Read More...</a>
                      </Card.Body>
                    </Card>
                  ))}
                </Container>
              </Card>
            </Col>
            <Col className="column" css={{ minWidth: "90vh" }}>
              <Container>
                <Card css={{ $$cardColor: "$colors$primary" }}>
                  <Card.Header css={{ marginBottom: "-2vh" }}>
                    <h2>Publications:</h2>
                  </Card.Header>
                  <Container>
                    {instructor.publications.map((publication, index) => (
                      <PublicationCard
                        key={index}
                        publication={publication}
                        displayDesc={true}
                      />
                    ))}
                  </Container>
                </Card>
              </Container>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </Row>
    </Container>
  );
};

const InstructorPage = ({ instructor, displayFull }) => {
  return (
    <InstructorDetails instructor={instructor} displayFull={displayFull} />
  );
};

export async function getServerSideProps() {
  //for api
  //const response = await fetch('../source/author.json');
  //const instructor = await response.json();
  const instructorData = require("../source/author.json");
  const instructor = instructorData[0];
  const displayFull = true;
  return {
    props: {
      instructor,
      displayFull,
    },
  };
}

export default InstructorPage;
