import React, { useState, useEffect } from "react";
import {
  Image,
  Container,
  Card,
  Row,
  Text,
  Col,
  Spacer,
  Pagination,
  Grid,
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

const InstructorDetails = ({ instructor, displayFull = true }) => {
  const maxCitationPublication = getMaxCitationsPublication(
    instructor.publications
  );
  const itemsPerPage = 2; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const publications = instructor.publications;
  const [displayedPublications, setDisplayedPublications] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPublications = publications.slice(startIndex, endIndex);
    setDisplayedPublications(displayedPublications);
  }, [currentPage]);

  return (
    <Container gap={0} css={{ minHeight: "100vh" }}>
      <Row gap={1} css={{ minWidth: "max-content" }}>
        <Col css={{ minWidth: "60vh", maxWidth: "60vh" }}>
          <Card className="card">
            <Card.Header>
              <Text h1>{instructor.name}</Text>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <Image
                    autoResize
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
                      <b>Top-cited publication:</b>{" "}
                      {maxCitationPublication.num_citations}
                    </Text>

                    <PublicationCard
                      publication={maxCitationPublication}
                      displayDesc={false}
                      index={"1"}
                    />
                  </Container>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {displayFull && (
          <Row>
            <Col css={{ minWidth: "30vh", maxW: "30vh" }}>
              <Card className="card" css={{ $$cardColor: "$colors$primary" }}>
                <Card.Body>
                  <h2 className="text">Interests:</h2>
                  <ul>
                    {instructor.interests.map((interest, index) => (
                      <li key={index}>{interest}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
            <Col css={{ minWidth: "80vh", maxW: "80vh" }}>
              <Container>
                <Card color="primary">
                  <Text size={30} css={{ marginTop: "1vh", marginLeft: "1vh" }}>
                    Publications:
                  </Text>
                  <Container>
                    {displayedPublications.map((publication, index) => (
                      <PublicationCard
                        key={index}
                        publication={publication}
                        displayDesc={true}
                      />
                    ))}
                    <Grid.Container xs={12} gap={2}>
                      <Grid>
                        <Spacer y={0.4} />
                        <Pagination
                          total={Math.ceil(publications.length / itemsPerPage)}
                          active={currentPage}
                          onChange={handlePageChange}
                        />
                      </Grid>
                    </Grid.Container>
                  </Container>
                </Card>
              </Container>
            </Col>
          </Row>
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
