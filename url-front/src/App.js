import React from "react";
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { fetchUrl, directUrl} from "./Utils";
import { Link } from "react-router";


const App = () => {
    const [url, setUrl] = React.useState();
    const [longUrl, setLongUrl] = React.useState();
    const [shortUrl, setShortUrl] = React.useState();

    return (
        <PageContainer>
          <LogForm onSubmit={(e) => fetchUrl(e, longUrl, setUrl, setShortUrl)}>
                <LogInput onChange={(e) =>setLongUrl(e.target.value)} placeholder='Url to shorten' />
               <Button type='submit' color="primary">Shorten Url</Button>
            </LogForm>

            {url && ( <LogForm>
            <LogInput value={shortUrl} /> 
            <Button type='submit' color="primary"><a href={longUrl} >Go to Url</a></Button>
            </LogForm> )}
           </PageContainer>
    )
};

export default App;

const PageContainer = styled.div`
width: 100vw;
height: 85vh;
background: black;
text-align: center;
`;

const LogInput = styled.input`
    width: 20vw;
`

const LogForm = styled.form`
    width: 35vw;
    align-content: center;
    margin: auto;
`
