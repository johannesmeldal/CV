import { Box } from "@mui/material";
import React from "react";
import { Container, CssBaseline, Typography } from "@mui/material";
import experiences from "../Components/Experience";
import ExperienceList from "../Components/ExperienceList";

export default function Cv() {
  return (
    <Box
      className="about"
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <div className="App">
        <CssBaseline />
        <Container>
          <h1>Working Experience</h1>
          <Typography variant="h4" component="div" gutterBottom>
            My Experiences
          </Typography>
          <ExperienceList experiences={experiences} />
        </Container>
      </div>
    </Box>
  );
}
