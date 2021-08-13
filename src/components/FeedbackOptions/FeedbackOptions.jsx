import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

import { ImHappy, ImSad, ImNeutral } from 'react-icons/im';
import { IconContext } from 'react-icons';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Wrapper>
      {options.map(option => {
        switch (option) {
          case 'good':
            return (
              <Button
                key={option}
                type="button"
                id={option}
                onClick={onLeaveFeedback}
              >
                <IconContext.Provider
                  value={{
                    color: '#178036',
                    className: 'react-icons',
                  }}
                >
                  <ImHappy id={option} />
                </IconContext.Provider>
                {option[0].toUpperCase() + option.slice(1)}
              </Button>
            );

          case 'neutral':
            return (
              <Button
                key={option}
                type="button"
                id={option}
                onClick={onLeaveFeedback}
              >
                <IconContext.Provider
                  value={{
                    color: '#dfd10d',
                    className: 'react-icons',
                  }}
                >
                  <ImNeutral id={option} />
                </IconContext.Provider>
                {option[0].toUpperCase() + option.slice(1)}
              </Button>
            );

          case 'bad':
            return (
              <Button
                key={option}
                type="button"
                id={option}
                onClick={onLeaveFeedback}
              >
                <IconContext.Provider
                  value={{
                    color: '#df0d0d',
                    className: 'react-icons',
                  }}
                >
                  <ImSad id={option} />
                </IconContext.Provider>
                {option[0].toUpperCase() + option.slice(1)}
              </Button>
            );

          default:
            return null;
        }
      })}
    </Wrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
