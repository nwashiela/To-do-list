import React, {useState} from "react";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import { TextField, Button } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const StyledButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

const Add = (props) => {
    const {onSave, initialName} = props;
  const [name, setName] = useState(initialName || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(name);
  };

  const handleTextChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  return (
    <Layout activePage="add">
      <Form onSubmit={handleSubmit}>
        <TextField
          onChange={handleTextChange}
          label="Task NAme"
          variant="outlined"
          fullWidth
          value={name}
        />
         <StyledButton type="submit" variant="contained" size="large" color="primary" >
          cancel
        </StyledButton>
        <StyledButton type="submit" variant="contained" color="primary" size="large" disabled={name.trim() === ""} >
          Save Item
        </StyledButton>
      </Form>
    </Layout>
  );
};
export default Add;
