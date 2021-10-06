import { useState, useEffect } from 'react';

import classes from './NumberTester.module.css';

function isPrime(number) {
	// Prime must greater than '1'
	if (number < 2) return false;

	const sqrtInt = Math.floor(Math.sqrt(number));

	for (let i = 2; i <= sqrtInt; i++) {
		if (number % i === 0) {
			return false;
		}
	}
	return true;
}

function isFibonacci(number) {
	let series = [0, 1];

	// test with initial two numbers
	if (series.includes(number)) {
		return true;
	}

	// must be >= 0
	if (number < 0) {
		return false;
	}

	let nextNumber,
		nextIndex = 0;

	do {
		nextNumber = series[0] + series[1];
		if (nextNumber === number) {
			return true;
		}
		series[nextIndex] = nextNumber;
		nextIndex = (nextIndex + 1) % 2;
	} while (nextNumber < number);

	return false;
}

const testingFunstions = new Map();
testingFunstions.set('prime', isPrime);
testingFunstions.set('fibonacci', isFibonacci);

const NumberTester = () => {
	const [testNumber, setTestNumber] = useState(1);
	const [testMode, setTestMode] = useState('prime');
	const [testResult, setTestResult] = useState('');

	const testNumberChangeHandler = (e) => {
		const number = Math.max(parseInt(e.target.value), 1);
		setTestNumber(isNaN(number) ? 1 : number);
	};

	const testModeChangeHandler = (e) => {
		setTestMode(e.target.value);
	};

	useEffect(() => {
		if (!testingFunstions.has(testMode)) {
			return setTestResult('Error: no function for selected test mode.');
		}

		const result = testingFunstions.get(testMode)(testNumber)
			? 'true'
			: 'false';

		setTestResult(`${result}`);
	}, [testNumber, testMode]);

	return (
		<div className={classes.number_tester__container}>
			<div className={classes.number_tester__col}>
				<p className={classes.number_tester__col_header}>Number to test</p>
				<input
					type='number'
					value={testNumber}
					onChange={testNumberChangeHandler}
				/>
			</div>
			<div className={classes.number_tester__col}>
				<p className={classes.number_tester__col_header}>Test mode</p>
				<select
					id='testmode'
					onChange={testModeChangeHandler}
					defaultValue={testMode}
				>
					<option value='prime'>isPrime</option>
					<option value='fibonacci'>isFibonacci</option>
				</select>
			</div>
			<div className={classes.number_tester__col}>
				<p className={classes.number_tester__col_header}>Test result</p>
				<p>{testResult}</p>
			</div>
		</div>
	);
};

export default NumberTester;
