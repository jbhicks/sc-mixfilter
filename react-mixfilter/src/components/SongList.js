import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const SongList = ({ tracks }) => {
  console.log(tracks[1]);
  // loop over tracks and display a card for each
  return (
    <Paper variant="outlined" elevation={3} square>
      {tracks.map((track) => (
        <Card sx={{ maxWidth: 345 }} key={track.id} variant="outlined">
          <CardMedia
            component="img"
            image={track.track.artwork_url}
            height="140"
            title={track.track.title}
            src={track.track.artwork_url}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {track.track.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {track.track.length}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Paper>
  );
};

export default SongList;
