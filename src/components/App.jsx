import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  addFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round((good * 100) / (good + neutral + bad));
  };

  render() {
    // const { good, neutral, bad } = this.state;
    const optionsFeedback = this.state;
    const addFeedback = this.addFeedback;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage;
    let children;
    if (total === 0) {
      children = <p>'Notification message="There is no feedback'</p>;
    } else {
      children = (
        <Statistics
          good={optionsFeedback.good}
          neutral={optionsFeedback.neutral}
          bad={optionsFeedback.bad}
          total={total}
          positiveFeedback={positive}
        ></Statistics>
      );
    }
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            feedback={addFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title={'Statistics'}>{children}</Section>
      </div>
    );
  }
}
