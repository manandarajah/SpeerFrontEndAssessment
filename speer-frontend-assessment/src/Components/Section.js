import './Section.css'
import PropTypes from 'prop-types'

function Section({id, backgroundColor, children}) {
  return (
    <div id={id} style={{backgroundColor: backgroundColor}}>{children}</div>
  );
}

export default Section;

Section.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
}
