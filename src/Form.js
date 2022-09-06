import React,{ Component } from 'react'

class Form extends Component{
constructor(props){
	super(props)
	this.state = { email:'',name:'', age:null, address:'',phoneNo:''}
	this.handleChange = this.handleChange.bind(this)
	this.handleSubmit = this.handleSubmit.bind(this)
}

// Form submitting logic, prevent default page refresh
handleSubmit(event){
	const { email, name, age, address, phoneNo } = this.state
	event.preventDefault()
	alert(`
	____Your Details____\n
	Email : ${email}
	Name : ${name}
	Age : ${age}
	Address : ${address}
	Phone No : ${phoneNo}
	`)
}

// Method causes to store all the values of the
// input field in react state single method handle
// input changes of all the input field using ES6
// javascript feature computed property names
handleChange(event){
	this.setState({
	// Computed property names
	// keys of the objects are computed dynamically
	[event.target.name] : event.target.value
	})
}

// Return a controlled form i.e. values of the
// input field not stored in DOM values are exist
// in react component itself as state
render(){
	return(
	<form onSubmit={this.handleSubmit}>
		<div>
		<label htmlFor='email'>Email</label>
		<input
			name='email'
			placeholder='Email'
			value = {this.state.email}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='name'>Name</label>
		<input
			name='name'
			placeholder='Name'
			value={this.state.name}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='age'>Age</label>
		<input
			name='age'
			placeholder='Age'
			value={this.state.age}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='address'>Address</label>
		<input
			name='address'
			placeholder='Address'
			value={this.state.address}
			onChange={this.handleChange}
		/>
		</div>
		<div>
		<label htmlFor='phoneNo'>Phone Number</label>
		<input
			name='phoneNo'
			placeholder='Phone No'
			value={this.state.phoneNo}
			onChange={this.handleChange}
		/>
		</div> 
		<div>
		<label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday"></input>	
		</div>
		<div>
		<label for="favcolor">Select your favorite color:</label>
        <input type="color" id="favcolor" name="favcolor" />
		</div>
		<div>
		<label for="birthdaytime">Birthday (date and time):</label>
        <input type="datetime-local" id="birthdaytime" name="birthdaytime" />
		</div>
		<div>
		<input type="image" src="img_submit.gif" alt="Submit" width="48" height="48"></input>
		</div>
		<div>
		<label for="myfile">Select a file:</label>
        <input type="file" id="myfile" name="myfile" />
		</div>
		<div>
		<label for="bdaymonth">Birthday (month and year):</label>
        <input type="month" id="bdaymonth" name="bdaymonth"/>
		</div>
		<div>
		<label for="appt">Select a time:</label>
        <input type="time" id="appt" name="appt" />
		</div>
		<div>
		<label for="homepage">Add your homepage:</label>
        <input type="url" id="homepage" name="homepage" />
		</div>
		<div>
		<label for="week">Select a week:</label>
        <input type="week" id="week" name="week" />
		</div>
		<div>
		<input type="button" />
		</div>
		<div>
		<input type="checkbox" />
		</div>
		<div>
		<input type="color" />
		</div>
		<div>
		<input type="date" />
		</div>
		<div>
		<input type="datetime-local"/>
		</div>
		<div>
		<input type="email"/>
		</div>
		<div>
		<input type="file"/>
		</div>
		<div>
		<input type="hidden"/>
		</div>
		<div>
		<input type="week"/>
		</div>
		<div>
		<button>Create Account</button>
		</div>
	</form>
	)
}
}

export default Form
