// Q.1
function grades() {
	this.gradeStores = [];
	this.addGrade = addGrade;
	this.printAverage = printAverage;
}

function addGrade(grade) {
	this.gradeStores.push(grade);
}

function printAverage() {
	var total = 0;
	var length = this.gradeStores.length;

	for (var i = 0; i < length; i++) {
		total += this.gradeStores[i];
	}
	console.log(total / length);
}

var a = new grades();
a.addGrade(1);
a.addGrade(2);
a.addGrade(3);
a.printAverage();

// Q.2 
var words = ["I", "am", "your", "father"];

function printFromFront(words) {
	var length = words.length;
	for (var i = 0; i < length; i++) {
		console.log(words[i]);
	}
}

function printFromBack(words) {
	var reversed = words.reverse();
	var length = words.length;
	for (var i = 0; i < length; i++) {
		console.log(words[i]);
	}
}

printFromFront(words);
printFromBack(words);

// Q.3
function monthTemp() {
	this.tempStore = [];
	var rows = 5;
	for (var i = 0; i < rows; i++) {
		this.tempStore[i] = [];
	}
	this.addTemp = addTemp;
	this.averageTempMonth = averageTempMonth;
	this.averageTempWeek = averageTempWeek;
	this.averageTempEveryWeeks = averageTempEveryWeeks;
}

function addTemp(week, temp) {
	this.tempStore[week].push(temp);
}

function averageTempMonth() {
	var month_length = this.tempStore.length;
	var length = 0;
	var total = 0;
	for (var i = 0; i < month_length; i++) {
		var week_length = this.tempStore[i].length;
		length = length + week_length;
		for (var j = 0; j < week_length; j++) {
			total += this.tempStore[i][j];
		}
	}
	console.log(total / length);
}

function averageTempWeek(week) {
	var length = this.tempStore[week].length;
	var total = 0;
	for (var i = 0; i < length; i++) {
		total += this.tempStore[week][i];
	}
	console.log(total / length);
}

function averageTempEveryWeeks() {
	var length = this.tempStore.length;
	var total = 0;
	for (var i = 0; i < length; i++) {
		this.averageTempWeek(i);
	}
}


var temp = new monthTemp();
temp.addTemp(0,31);
temp.addTemp(0,12);
temp.addTemp(0,43);
temp.addTemp(1,54);
temp.addTemp(1,64);
temp.addTemp(1,43);
temp.addTemp(2,23);
temp.addTemp(2,12);
temp.addTemp(2,34);
temp.addTemp(3,23);
temp.addTemp(3,12);
temp.addTemp(3,34);
temp.addTemp(4,23);
temp.addTemp(4,12);
temp.addTemp(4,34);

temp.averageTempWeek(0);
temp.averageTempWeek(1);
temp.averageTempWeek(2);
temp.averageTempWeek(3);
temp.averageTempWeek(4);

temp.averageTempEveryWeeks();
temp.averageTempMonth();
