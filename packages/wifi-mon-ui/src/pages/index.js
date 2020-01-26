import React from 'react';
import App from '../components/mainPage';
import fetch from 'node-fetch';

const Index = ({ data }) => (<>
<head>
    <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
    <title>Internet Speed Monitor</title>
</head>
    <App data={data}/></>
);

Index.getInitialProps = async ctx => ({ data: await fetch('http://localhost:4000').then(res => res.json())})
export default Index;
