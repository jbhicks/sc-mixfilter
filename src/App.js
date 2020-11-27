import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Grid, Image, Segment, List } from 'semantic-ui-react'
import SongList from './components/SongList';
import Header from './components/Header';


function App() {
  const [data, setData] = useState([]);
  const [numMixes, setNumMixes] = useState(700);
  const [config, setConfig] = useState({
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      'Accept-Language': 'en-US,en;q=0.5',
      Authorization: 'OAuth 2-290059-141564746-v51SgM3UpMfzVi',
      'Access-Control-Allow-Origin': '*'
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'https://api-v2.soundcloud.com/stream', {
        params: {
          sc_a_id: '20cfd6d050175896f575cdef54de242f5e1c6013',
          device_locale: 'en',
          variant_ids: 2076,
          user_urn: 'soundcloud%3Ausers%3A141564746',
          promoted_playlist: true,
          client_id: 'njlDi9nZVS8dM70mLDjJpD8PascrK3xJ',
          limit: numMixes,
          offset: 0,
          linked_partitioning: 1,
          app_version: 1605795845,
          app_locale: 'en'
        },
        headers: {
          Accept: 'application/json, text/javascript, */*; q=0.01',
          'Accept-Language': 'en-US,en;q=0.5',
          Authorization: 'OAuth 2-290059-141564746-v51SgM3UpMfzVi',
          'Access-Control-Allow-Origin': '*'
        }
      }
      );
      const filteredList = data.collection.filter(track => !track.type.includes('playlist') && track.track.full_duration > 500000);
      console.log(filteredList);
      setData(filteredList);

    };

    fetchData();

  }, []);

  return (

    <Segment>
      <Header config={config} />
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