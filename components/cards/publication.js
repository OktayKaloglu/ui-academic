import { Card, Text } from "@nextui-org/react";

function getCtitation(pub_id) {
  if (pub_id) {
    const id = pub_id.split(":");

    const citationUrl =
      "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=" +
      id[0] +
      "&citation_for_view=" +
      pub_id;
    window.open(citationUrl, "_blank");
  }
  return "#";
}
function displayDescription(publication, displayDesc) {
  if (displayDesc) {
    return (
      <div>
        <p>Publication Year: {publication.bib.pub_year}</p>
        <p>Citation: {publication.bib.citation}</p>
        <p>Number of Citations: {publication.num_citations}</p>
      </div>
    );
  }

  return <p></p>;
}

const PublicationCard = ({ publication, displayDesc }) => {
  return (
    <Card
      className="card"
      isHoverable
      isPressable
      onPress={() => getCtitation(publication.author_pub_id)}
    >
      <Card.Header>
        <Text size={20}>{publication.bib.title}</Text>
      </Card.Header>
      <Card.Body>
        <>{displayDescription(publication, displayDesc)}</>
      </Card.Body>
      <Card.Footer css={{ justifyContent: "flex-end" }}>
        Read More...
      </Card.Footer>
    </Card>
  );
};

export default PublicationCard;
