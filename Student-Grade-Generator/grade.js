function calculateGrade() {
    return("Function called");
      
  }
  //convert inputed value to number
let mark1 = parseInt(prompt("Enter first student mark (between 0 and 100): "));
let mark2 = parseInt(prompt("Enter second student mark (between 0 and 100): "));
let mark3 = parseInt(prompt("Enter third student mark (between 0 and 100): "));
//calculate everage
let average = (mark1 + mark2 + mark3) / 3;
// if else statements to determine grades
let grade;

if (average > 79) {
  grade = "A";
} else if (average > 59) {
  grade = "B";
} else if (average > 49) {
   grade = "C";
} else if (average > 39) {
   grade = "D";
 } else {
   grade = "E";
 }
//show results
return("The student's average mark is:", average.toFixed(2));
return("The student's grade is:", grade);


  

function calculateGrade() {
  let mark1 = parseInt(document.getElementById("mark1").value);
  let mark2 = parseInt(document.getElementById("mark2").value);
  let mark3 = parseInt(document.getElementById("mark3").value);
  let average = (mark1 + mark2 + mark3) / 3;
  let grade;
  if (average > 79) {
    grade = "A";
  } else if (average > 59) {
    grade = "B";
  } else if (average > 49) {
    grade = "C";
  } else if (average > 39) {
    grade = "D";
  } else {
    grade = "E";
  }
  document.getElementById("grade").innerHTML = "The student's average mark is: " + average.toFixed(2) + "<br>The student's grade is: " + grade;
}
 