import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <table className={styles.Table}>
      <tbody>
        <tr>
          <td>Good</td>
          <td>{good}</td>
        </tr>

        <tr>
          <td>Neutral</td>
          <td>{neutral}</td>
        </tr>

        <tr>
          <td>Bad</td>
          <td>{bad}</td>
        </tr>

        <tr>
          <td>Total</td>
          <td>{total(good, neutral, bad)}</td>
        </tr>

        <tr>
          <td>Positive feedback</td>
          <td>{positivePercentage(good, total(good, neutral, bad))}%</td>
        </tr>
      </tbody>
    </table>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
