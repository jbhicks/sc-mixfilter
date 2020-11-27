import React from 'react';
import { Form } from 'semantic-ui-react';

const Header = ({ config }) => {
    //console.log(config);
    return (
        <div>
            <h1>Mix Filter</h1>
            <Form>
                <Form.Group widths='equal'>
                    {/* <Form.Input fluid label='OAuth Token' placeholder='Oauth token from Soundcloud' value={config.Authorization} /> */}
                    <Form.Input fluid label='Number of mixes to retrieve' placeholder='Number of mixes' value={config.numMixes} />
                </Form.Group>
            </Form>
        </div>

    )
}

export default Header;