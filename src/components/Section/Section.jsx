import PropTypes from 'prop-types';
import { Title, MySection } from './Section.styled';

export default function Section({ children, title }) {
  return (
    <MySection>
      <Title>{title}</Title>
      {children}
    </MySection>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  cildren: PropTypes.node,
};
