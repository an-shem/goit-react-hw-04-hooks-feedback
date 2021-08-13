import PropTypes from 'prop-types';
import { Wrap, PositivePercentage, Line } from './Statistics.styled';

import { Progress } from 'antd';
import 'antd/dist/antd.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <Wrap>
      <p>
        <span>Good:</span> <span>{good}</span>
      </p>
      <p>
        <span>Neutral:</span> <span>{neutral}</span>
      </p>
      <p>
        <span>Bad:</span> <span>{bad}</span>
      </p>
      <Line />
      <p>
        <span>Total:</span> <span>{total}</span>
      </p>
      <PositivePercentage>
        <span>Positive feedback:</span>
        <Progress
          type="circle"
          status="normal"
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={positivePercentage}
        />
        {/* <ShowPercentage>{positivePercentage} %</ShowPercentage> */}
      </PositivePercentage>
    </Wrap>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
