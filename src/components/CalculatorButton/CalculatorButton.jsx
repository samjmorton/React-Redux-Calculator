import React from 'react';
import PropTypes from 'prop-types';

const CalculatorButton = ({ className = '', value = '', onClick }) => <button type="button" className={className} onClick={() => onClick(value)}>{value}</button>;

CalculatorButton.propTypes = {
	className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default CalculatorButton;
