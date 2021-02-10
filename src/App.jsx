import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Buttons from './buttons.json';
import './App.scss';
import CalculatorButton from './components/CalculatorButton/CalculatorButton';
import {
	clearInput,
	setInput,
	setOperator,
	calculateOutput,
} from './redux/actions';

const getButtonAction = (value, props) => {
	switch (value) {
		case 'AC':
			return props.clearInput;
		case '0':
		case '1':
		case '2':
		case '3':
		case '4':
		case '5':
		case '6':
		case '7':
		case '8':
		case '9':
		case '10':
			return props.setInput;
		case '+':
		case '-':
		case 'x':
		case '/':
			return props.setOperator;
		case '=':
			return props.calculateOutput;
		default:
			break;
	}
	return null;
};

const App = ({ result, ...props }) => (
  <div className="calculator-container">
    <div className="calculator">
      <div className="calculator-result">
        <div className="result-value">{result}</div>
      </div>
      {Buttons.map(({ buttons }, index) => (
        <div className="calculator-button-row" key={`row${index}`}>
          {buttons.map((button) => (
            <CalculatorButton
						{...button}
						key={button.value}
						onClick={getButtonAction(button.value, props)}
						/>
          ))}
        </div>
      ))}
    </div>
  </div>
);

App.propTypes = {
	result: PropTypes.number.isRequired,
	clearInput: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => console.log(state) || ({ ...state.inputs });

const mapDispatchToProps = {
	clearInput,
	setInput,
	setOperator,
	calculateOutput,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
