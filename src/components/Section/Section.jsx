import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export default function Section({ children, title }) {
  return (
    <section>
      <Title>{title}</Title>
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  cildren: PropTypes.node,
};
