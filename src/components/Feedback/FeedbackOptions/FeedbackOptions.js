import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export default function FeedbackOptions(props) {
  const { options, onLeaveFeedback } = props;
  return (
    <ul className={styles.List}>
      {options.map(({ key, title }) => (
        <li className={styles.List__item} key={key}>
          <button
            type="button"
            className={styles.Button}
            onClick={() => onLeaveFeedback(key)}
          >
            {title}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
