import classes from './NumberTester.module.css';

const NumberTester = () => {
	return (
		<div className={classes.number_tester__container}>
			<div className={classes.number_tester__col}>
				<p>Number to test</p>
			</div>
			<div className={classes.number_tester__col}>
				<p>Test Mode</p>
			</div>
			<div className={classes.number_tester__col}>
				<p>Test result</p>
			</div>
		</div>
	);
};

export default NumberTester;
