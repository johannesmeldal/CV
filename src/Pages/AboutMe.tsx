import React from "react";
import "../Styles.css";
import { Box } from "@mui/material";
import image from "../Images/JohannesCV.png";
import {
  Container,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

export default function AboutMe() {
  return (
    <Box
      className="about"
      sx={{
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="md" style={{ textAlign: "center" }}>
        <Box my={4}>
          <img
            src={image} // Replace with your image URL
            alt="Johannes"
            style={{ maxWidth: "100%", borderRadius: "50%" }}
          />
        </Box>
        <Paper elevation={3} style={{ padding: "16px" }}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            vehicula neque id quam venenatis, et euismod orci ullamcorper. Nulla
            facilisi. Phasellus vel malesuada metus.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
