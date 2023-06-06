import React from "react";
import instructorData from "../source/author.json";
import Link from "next/link";
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
  const max_citation = getMaxCitationsPublication(instructor.publications);
  return (
    <Container gap={0} display={"flex"} max-height={"80%"}>
      <Row gap={1}>
        <Col className="column">
          <Card css={{ $$cardColor: "$colors$primary" }}>
            <Card.Header>
              <Text h1>{instructor.name}</Text>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col xs>
                  <Image
                    autoResize="true"
                    src={instructor.url_picture}
                    alt={instructor.name}
                    objectFit="contain"
                  />
                </Col>

                <Col css={{ marginLeft: "2vh" }}>
                  <Container>
                    <Text size={20}>
                      <b>Affiliation:</b> {instructor.affiliation}
                    </Text>

                    <Text size={20}>
                      <b>Total Citation:</b> {instructor.citedby}
                    </Text>
                    <Text size={20}>
                      <b>Top-cited publication:</b> {max_citation.num_citations}
                    </Text>

                    <PublicationCard
                      publication={max_citation}
                      displayDesc={false}
                      index={"1"}
                    />
                  </Container>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
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
        <Col className="column">
          <Container>
            <h2>Publications:</h2>

            {instructor.publications.map((publication, index) => (
              <PublicationCard
                key={index}
                publication={publication}
                displayDesc={true}
              />
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

const InstructorPage = ({ instructor }) => {
  return <InstructorDetails instructor={instructor} />;
};

export async function getServerSideProps() {
  //for api
  //const response = await fetch('../source/author.json');
  //const instructor = await response.json();
  const instructor = instructorData;

  return {
    props: {
      instructor,
    },
  };
}

export default InstructorPage;
