import React from 'react';
import instructorData from '../source/author.json';
import { Image,Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
 

const InstructorDetails = ({ instructor }) => {
  return (
    <div>
      <Container gap={0} display={ 'flex'} max-height = { '80%'} overflow= {'scroll'} >
      <Row gap={1}
 >
        <Col id='col1' css={{minHeight:'70vh'  }}>
     
          <Card css={{ $$cardColor: '$colors$primary' }}>
          <Image
               
               autoResize="true"  
               src={instructor.url_picture}
               alt={instructor.name}
               objectFit="cover"
             />
            <Card.Body>
            <h1>{instructor.name}</h1>
           
            
            <p>Affiliation: {instructor.affiliation}</p>
            <p>Email Domain: {instructor.email_domain}</p>
             
            </Card.Body>
          </Card>
        </Col>
        <Col overflow= {'scroll'}  >
          <Card  css={{ $$cardColor: '$colors$primary'   }}>
            <Card.Body >
            <h2>Interests:</h2>
            <ul>
              {instructor.interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
            </Card.Body>
            </Card>
            
        </Col>
        <Col css={{maxH:'70vh' , overflow:'auto' }}  >
          <Container  >
          <h2>Publications:</h2>


            
              
                {instructor.publications.map((publication, index) => (
                  <Card key={index}>
                    <Card.Body>
                    <h3>{publication.bib.title}</h3>
                    <p>Publication Year: {publication.bib.pub_year}</p>
                    <p>Citation: {publication.bib.citation}</p>
                    <p>Number of Citations: {publication.num_citations}</p>
                    <a href={publication.citedby_url}>Cited by</a>
                    </Card.Body>
                  </Card>
                    
                  
                ))}
              
           
          </Container>
        </Col>
      </Row>
      <Spacer y={1} />
      <Row gap={1}>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                1 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                2 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card css={{ $$cardColor: '$colors$primary' }}>
            <Card.Body>
              <Text h6 size={15} color="white" css={{ m: 0 }}>
                3 of 3
              </Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
   
      <h1>{instructor.name}</h1>
      <img src={instructor.url_picture} alt={instructor.name} />
      <p>Affiliation: {instructor.affiliation}</p>
      <p>Email Domain: {instructor.email_domain}</p>
      <h2>Interests:</h2>
      <ul>
        {instructor.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <h2>Publications:</h2>
      <ul>
        {instructor.publications.map((publication, index) => (
          <li key={index}>
            <h3>{publication.bib.title}</h3>
            <p>Publication Year: {publication.bib.pub_year}</p>
            <p>Citation: {publication.bib.citation}</p>
            <p>Number of Citations: {publication.num_citations}</p>
            <a href={publication.citedby_url}>Cited by</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const InstructorPage = ({ instructor }) => {
  return <InstructorDetails instructor={instructor} />;
};

export async function getServerSideProps() {
  //for api
  //const response = await fetch('../source/author.json');
  //const instructor = await response.json();
  const instructor=instructorData
  
    
 
  return {
    props: {
      instructor
    },
  };
}

export default InstructorPage;