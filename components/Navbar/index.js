
import { Container, Navbar, Text, Button, Grid, Col } from '@nextui-org/react';


const NavbarWrapper= () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
      <Navbar.Content>
        <Navbar.Brand >
          <Text b color="inherit" >
          <Navbar.Link href="/">Academic Profile Syncer</Navbar.Link>
          </Text>
        </Navbar.Brand>

       </Navbar.Content>

        <Navbar.Content hideIn="md">
          <Navbar.Link href="/universities">Universities</Navbar.Link>
          <Navbar.Link href="/courses">Courses</Navbar.Link>
          <Navbar.Link href="/instructors">Instructors</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link href="#">Login</Navbar.Link>
          <Navbar.Item>
            <Button auto flat href="#">
              Sign Up
            </Button> 
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
     
    </Container>
  )
}

export default NavbarWrapper