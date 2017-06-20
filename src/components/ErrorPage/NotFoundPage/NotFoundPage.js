import React from 'react';
import ErrorPage from '~/components/ErrorPage';
//import config from 'config';
import { format } from 'url';

const config = {};
config.externalUri = {};
const exchangeRootUrl = format(config.externalUri);
const content = {
  title: '404 Not Found',
  description: 'The page you are looking for could not be found.',
  cards: [
    {
      text: 'Documentation',
      url: 'https://docs.mulesoft.com/',
      icon: 'documentation-medium'
    },
    {
      text: 'Home',
      url: exchangeRootUrl,
      icon: 'businessgroup-small'
    },
    {
      text: 'Support portal',
      url: 'https://support.mulesoft.com/',
      icon: 'support'
    }
  ]
};

const NotFoundPage = () => (
  <ErrorPage
    title={content.title}
    description={content.description}
    cards={content.cards}
  />
);

export default NotFoundPage;
export { content };
