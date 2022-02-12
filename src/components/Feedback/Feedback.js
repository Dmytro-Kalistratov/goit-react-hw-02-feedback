import React, { Component } from 'react';
import './Feedback.css';
class Feedback extends React.Component {
  static defaultProps = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  goodFeedback = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedback = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedback = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    return (
      <div className="Feedback">
        <div>
          <h2 className="title">Please leave feedback</h2>
          <button type="button" className="button" onClick={this.goodFeedback}>
            Good
          </button>
          <button
            type="button"
            className="button"
            onClick={this.neutralFeedback}
          >
            Neutral
          </button>
          <button type="button" className="button" onClick={this.badFeedback}>
            Bad
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Statictics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Good</td>
              <td>{this.state.good}</td>
            </tr>

            <tr>
              <td>Neutral</td>
              <td>{this.state.neutral}</td>
            </tr>

            <tr>
              <td>Bad</td>
              <td>{this.state.bad}</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>{this.state.good + this.state.neutral + this.state.bad}</td>
            </tr>

            <tr>
              <td>Positive feedback</td>
              <td>PF%</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Feedback;
