const Application = () => {
	return (
		<>
			<h1>Job Application Form</h1>
			<h2>Section One</h2>
			<form>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						type='text'
						id='name'
					/>
				</div>
				<div>
					<label htmlFor='bio'>Bio</label>
					<textarea
						name='bio'
						id='bio'
					></textarea>
				</div>
				<div>
					<label htmlFor='job-location'>Name</label>
					<select id='job-location'>
						<option value=''>Select a country</option>
						<option value='US'>United States</option>
						<option value='GB'>United Kingdom</option>
						<option value='CA'>Canada</option>
						<option value='IN'>India</option>
						<option value='PL'>Poland</option>
					</select>
				</div>
				<div>
					<label>
						<input
							type='checkbox'
							id='terms'
						/>
						I agree to terms and conditions
					</label>
				</div>
				<button>Submit</button>
			</form>
		</>
	);
};
export default Application;
