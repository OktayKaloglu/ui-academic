import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';
import InfoCard from '../components/InfoCard';



const Course = () => {
    
    
    return (
        
    <Container>
        
      <Grid.Container justify="center" css={{"height": "500px", "backgroundImage": "url(https://littlevisuals.co/images/sunset.jpg)"}}>
    
      
        
       
      </Grid.Container>

      {/* 3 Displaying Product Cards */}
      <Grid.Container gap={2}>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Next.js With Cooper Codes"
            imageURL="https://littlevisuals.co/images/red_dawn.jpg"
            studentCount="3,500"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Learn Apollo Server With Cooper Codes"
            imageURL="https://littlevisuals.co/images/sunset.jpg"
            studentCount="1,000"
          />
        </Grid>
        <Grid xs={12} sm={4}>
          <InfoCard
            label="Course"
            title="Create A Startup With Cooper Codes"
            imageURL="https://littlevisuals.co/images/tail.jpg"
            studentCount="5,000"
          />
        </Grid>
      </Grid.Container>
    </Container>
  )
}

export default Course