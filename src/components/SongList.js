import React from 'react';

const SongList = ({ tracks }) => {
    if (!tracks) {
        return <div>no tracks</div>
    }
    console.log(tracks);
    const source = `https://w.soundcloud.com/player/?url=`;

    const renderedList = tracks.map(({ track }) => {
        return (
            <div key={track.id}>
                <div className='ui segment'>
                    <iframe
                        width='100%'
                        height='166'
                        scrolling='no'
                        frameBorder='no'
                        allow='autoplay'
                        title={track.title}
                        src={source + track.uri}>

                    </iframe>
                </div>
            </div>

        )
    })
    return <div>{renderedList}</div>;

}

export default SongList;