import PropTypes from 'prop-types';
import s from './Section.module.scss';

const Section = ({ children }) => (
  <section className={s.section}>{children}</section>
);

Section.defaultProps = {
  children: [],
};

Section.protoTypes = {
  children: PropTypes.node,
};

export default Section;
