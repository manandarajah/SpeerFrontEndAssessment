import './Screen.css';
import PropTypes from 'prop-types';

function Screen({id, backgroundColor, children}) {
  return (
    <div id={id} class="box" style={{backgroundColor: backgroundColor}}>{children}</div>
  );
}

export default Screen;

Screen.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element.isRequired
  ])
}
