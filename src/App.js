import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Segment } from 'semantic-ui-react'
import SongList from './components/SongList';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081')
      .then(res => {console.log(res.data)});
  }, []);

  return (

    <Segment>
      <Header />
      <Grid columns={2} relaxed='very'>
        <Grid.Column>
          <SongList tracks={data} />
        </Grid.Column>
        <Grid.Column>

        </Grid.Column>
      </Grid>

    </Segment>
  );
}

export default App;