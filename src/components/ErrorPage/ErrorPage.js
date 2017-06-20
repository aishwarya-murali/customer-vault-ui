import React, { PropTypes } from 'react';
import Icon from '@mulesoft/anypoint-icons/lib/Icon';
import styles from './ErrorPage.css';

const Card = ({ text = 'Add description', url = 'https://mulesoft.com', icon = 'plus-small' }) => (
  <div className={styles.cardContainer} data-test-id="card">
    <a href={url} className={styles.card}>
      <div className={styles.detail}>
        <div className={styles.image}>
          <Icon
            className={styles.docIcon}
            name={icon}
            size="m"
          />
        </div>
        <div className={styles.text} data-test-id="text">{text}</div>
      </div>
    </a>
  </div>
);

const ErrorPage = ({ title = '', description = '', cards = [] }) => (
  <div className={styles.errorPage} data-test-id="error-page">
    <div className={styles.status}>
      <h1>{title}</h1>
    </div>
    <div className={styles.description}>
      <h3>{description}</h3>
    </div>
    <div className={styles.cards} data-test-id="cards">
      {cards.map((card, index) => (
        <Card text={card.text} url={card.url} icon={card.icon} key={index} />
      ))}
    </div>
    <div className={styles.leftBottomCorner} />
    <div className={styles.rightBottomCorner} />
  </div>
);

const CardPropTypes = PropTypes.shape({
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
});

Card.propTypes = CardPropTypes.isRequired;

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(CardPropTypes).isRequired
};

export default ErrorPage;
export { Card };
