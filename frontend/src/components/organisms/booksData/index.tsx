import { Box } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";
import { ButtonComp } from "../../atoms/button";
import { postBooks } from "../../../services";
import { TypoTextField } from "../../molecule/TypoTextField";
import { useNavigate } from "react-router-dom";
const Wrapper = styled(Box)({
  width: "260px",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  "& .inputFields": {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
  }
});
export const BooksData = () => {
  const [details, setDetails] = useState({
    bookName: "",
    johner: ""
  });
  const navigate=useNavigate()
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDetails((prev) => ({
      ...prev,
      bookName: value
    }));
  };
  const handleJohnerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setDetails((prev) => ({
      ...prev,
      johner: value
    }));
  };

  const handleClick = () => {
    postBooks({ ...details }).then((res) => {
      setDetails({
        bookName: "",
        johner: ""
      });
    })
    navigate("/books")
  };

  return (
    <Wrapper>
      <Box className="inputFields">
        <TypoTextField text={"Book Name"} placeholder={"Rodricks"} onChange={handleNameChange} type={"text"} value={details.bookName}/>
        <TypoTextField text={"Johner"} placeholder={"Johner"} onChange={handleJohnerChange} type={"text"}  value={details.johner}/>
      </Box>
      <ButtonComp onClick={handleClick} variant="contained">
        send
      </ButtonComp>
    </Wrapper>
  );
};
