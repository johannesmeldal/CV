import React from 'react';
import { Experience } from './Experience';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

interface ExperienceListProps {
  experiences: Experience[];
}

const ExperienceList: React.FC<ExperienceListProps> = ({ experiences }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Experiences
        </Typography>
        <List>
          {experiences.map((experience) => (
            <ListItem key={experience.id}>
              <ListItemText
                primary={experience.title}
                secondary={experience.description}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ExperienceList;