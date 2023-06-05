import React from 'react';
import instructorData from '../source/author.json';

const InstructorDetails = ({ instructor }) => {
  return (
    <div>
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
      instructor,
    },
  };
}

export default InstructorPage;