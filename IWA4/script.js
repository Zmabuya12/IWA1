const calendar = ["25 december", "16 june", "13 August"];

// const parent = calendar[0];
// const student = calendar[1];

const date = 2050
const status = 'Parent'
const count = 9

if (date = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4
}

	if (statusbar = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }
if (date = 2050) {
	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3
}

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }
if (date = 2050) {
	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)


array.forEach(calendar => {
    document.querySelector('p').append(calendar);
    console.log(calendar);
});