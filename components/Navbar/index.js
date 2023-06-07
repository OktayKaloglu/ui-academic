import {
  Container,
  Navbar,
  Text,
  Button,
  Grid,
  Col,
  Input,
} from "@nextui-org/react";
import CustomSearch from "../search/index";
const NavbarWrapper = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar isCompact variant={"static"}>
        <Navbar.Content>
          <Navbar.Brand>
            <Text b color="inherit">
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
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <CustomSearch />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Container>
  );
};

export default NavbarWrapper;
