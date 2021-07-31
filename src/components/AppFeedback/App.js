import { useState } from 'react';

import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification/';

import { AppWrap } from './App.styled';

import React from 'react';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = e => {
    const name = e.target.id;

    switch (name) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / countTotalFeedback()) * 100);

    return Number.isNaN(positivePercentage) ? 0 : positivePercentage;
    //   < 30
    // ? `🙁 ${positivePercentage}`
    // : positivePercentage < 60
    // ? `😐 ${positivePercentage}`
    // : positivePercentage < 80
    // ? `🙂 ${positivePercentage}`
    // : `😊 ${positivePercentage}`;
  };

  return (
    <AppWrap>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {countTotalFeedback() ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given"></Notification>
      )}
    </AppWrap>
  );
}
