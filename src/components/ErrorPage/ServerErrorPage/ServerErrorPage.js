import React from 'react';
import ErrorPage from '~/components/ErrorPage';
//import config from 'config';
import { format } from 'url';

const config = {};
config.externalUri = {};
const exchangeRootUrl = format(config.externalUri);
const content = {
  title: '500 Internal Server Error',
  description: 'The server encountered an error.',
  cards: [
    {
      text: 'Documentation',
      url: 'https://docs.mulesoft.com/',
      icon: 'documentation-medium'
    },
    {
      text: 'Support portal',
      url: 'https://support.mulesoft.com/',
      icon: 'support'
    },
    {
      text: 'Home',
      url: exchangeRootUrl,
      icon: 'businessgroup-small'
    }
  ]
};

const ServerErrorPage = () => (
  <ErrorPage
    title={content.title}
    description={content.description}
    cards={content.cards}
  />
);

export default ServerErrorPage;
export { content };
