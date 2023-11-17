const Application = () => {
	return (
		<>
			<h1>Job Application Form</h1>
			<h2>Section One</h2>
			<p>All fields are mandatory</p>
			<span title='close'>X</span>
			<img
				src='https://via.placeholder.com/150'
				alt='a person with a laptop'
			/>
			<div data-testid='custom-element'>Custom HTML element</div>
			<form>
				<div>
					<label htmlFor='name'>Name</label>
					<input
						onChange={() => {}}
						type='text'
						value='Radek'
						id='name'
						placeholder='Fullname'
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
