import React from 'react';
import {Card, Item, Icon, Image} from 'semantic-ui-react';

const SongList = ({ tracks }) => {
    if (tracks.collection) {
        console.log(tracks);
        if (tracks.collection.length > 0) {
            const renderedList = tracks.collection.filter(track => track.type !== 'playlist-repost').map((track) => {
                if (track) {
                    console.log(track);
                    return (
                        <Item key={track.track.id}>
                            <Item.Image size='tiny' src={track.track.artwork_url} />
                            <Item.Header> {track.track.title} </Item.Header>
                            <Item.Content>
                                Duration: {track.track.duration}
                                Genre: {track.track.genre}
                            
                            </Item.Content>
                        </Item> 
                    );
                } else return (<div>no track</div>);
                
            })
            return (
                <Item.Group>
                    {renderedList}
                </Item.Group>
            );
            
        }
    } else {
        return (<div>NO TRACKS!</div>);
    }
    
};

export default SongList;