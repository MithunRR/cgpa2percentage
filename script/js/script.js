

function myFunction() {
    var cgpa = document.getElementById("cgpa_input").value;
    if (cgpa == "") {
        document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
        return;
    }

    var cgpa = Number(cgpa);
    var grade;
    var percent;
    var clss;

    // validating range of input CGPA
    if (cgpa < 0 || cgpa > 10) {
        document.getElementById("error_msg").innerHTML = "Enter valid CGPA (i.e. between 0 & 10)";
        return;
    }
    else {
        document.getElementById("error_msg").innerHTML = "";
    }


    // Calculation of percentage, grade 

    if (cgpa < 4) {
        grade = "F";
        percent = "NA";
    }
    else if (cgpa < 4.75) {
        grade = "D";
        percent = 6.6 * cgpa + 13.6;
    }

    else if (cgpa < 5.25) {
        grade = "C";
        percent = 10 * cgpa - 2.50;
    }

    else if (cgpa < 5.75) {
        grade = "B";
        percent = 10 * cgpa - 2.50;
    }

    else if (cgpa < 6.75) {
        grade = "B+";
        percent = 5 * cgpa + 26.25;
    }

    else if (cgpa < 8.25) {
        grade = "A";
        percent = 10 * cgpa - 7.5;
    }

    else if (cgpa < 9.5) {
        grade = "A+";
        percent = 12 * cgpa - 25;
    }

    else {
        grade = "O";
        percent = 20 * cgpa - 101;
    }


    // calculating class

    if (percent < 40) {
        clss = "Fail";
    }

    else if (percent < 45) {
        clss = "Pass";
    }

    else if (percent < 50) {
        clss = "Average";
    }

    else if (percent < 55) {
        clss = "Above Average";
    }

    else if (percent < 60) {
        clss = "Good";
    }

    else if (percent < 75) {
        clss = "Very Good";
    }

    else if (percent < 90) {
        clss = "Excellent";
    }

    else if (percent < 100) {
        clss = "Outstanding"
    }

    else if(percent = "NA"){
        clss = "Fail"
    }


    // filling output table
    document.getElementById("op_cgpa").innerHTML = cgpa;
    document.getElementById("op_grade").innerHTML = grade;
    document.getElementById("op_per").innerHTML = percent;
    document.getElementById("op_class").innerHTML = clss;
}

