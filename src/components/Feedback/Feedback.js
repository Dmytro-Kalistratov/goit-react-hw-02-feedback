import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import styles from './Feedback.module.css';

class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {
    initialGood: PropTypes.number.isRequired,
    initialNeutral: PropTypes.number.isRequired,
    initialBad: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  onLeaveFeedback = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback = (good, neutral, bad) => {
    let totalFB = 0;

    totalFB = good + neutral + bad;

    return totalFB;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    let positivePercent = 0;
    if (good !== 0) {
      positivePercent = (good / total) * 100;
    }
    return parseInt(positivePercent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[
              { key: 'good', title: '~ Awesome ~' },
              { key: 'neutral', title: 'Need more covfefe' },
              { key: 'bad', title: 'Nooooooooooo!' },
            ]}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistic">
          {this.countTotalFeedback(good, neutral, bad) === 0 ? (
            <p className={styles.Message}>There is no feedback yet :(</p>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default Feedback;
