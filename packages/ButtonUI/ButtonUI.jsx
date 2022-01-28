import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

/**
 * Primary UI 
 */
export const ButtonUI = ({ color, size, label}) => {
  return (
    <Button type="button" variant="contained" size={size} color={color}>
      {label}
    </Button>
  );
};

ButtonUI.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */  /**
   * What background color to use
   */
  color: PropTypes.oneOf(['success', 'secondary', 'error']),
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonUI.defaultProps = {
  color: 'success',
  size: 'medium',
  onClick: undefined,
};
