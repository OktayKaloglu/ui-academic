import { Input, Dropdown, Row } from "@nextui-org/react"; // Replace 'your-ui-library' with the actual library you're using
import { SearchIcon } from "./searchIcon"; // Replace 'your-icon-library' with the actual library you're using
import React from "react";
const CustomSearch = () => {
  const [selected, setSelected] = React.useState(new Set(["University"]));
  const [inputValue, setInputValue] = React.useState("");
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  const handleEnter = (event) => {
    // 'keypress' event misbehaves on mobile so we track 'Enter' key via 'keydown' event
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      console.log(Array.from(selected) + " " + inputValue);
    }
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <Row>
      <Dropdown>
        <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
          {selectedValue}
        </Dropdown.Button>
        <Dropdown.Menu
          aria-label="Single selection actions"
          color="secondary"
          disallowEmptySelection
          selectionMode="single"
          selectedKeys={selected}
          onSelectionChange={setSelected}
        >
          <Dropdown.Item key="University">University</Dropdown.Item>
          <Dropdown.Item key="Instructor">Instructor</Dropdown.Item>
          <Dropdown.Item key="Course">Course</Dropdown.Item>
          <Dropdown.Item key="Paper">Paper</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleEnter}
        clearable
        css={{
          paddingLeft: "1vh",
          w: "100%",
          "@xsMax": {
            mw: "300px",
          },
          "& .nextui-input-content--left": {
            h: "100%",
            ml: "$4",
            dflex: "center",
          },
        }}
        contentLeft={
          <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
        }
        contentLeftStyling={false}
        placeholder={Array.from(selected) + " Search..."}
      />
    </Row>
  );
};

export default CustomSearch;
