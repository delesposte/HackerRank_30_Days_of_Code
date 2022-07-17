function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "
    
    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.    
    let vint = i + Number(readLine());
    let vfloat = d + Number(readLine());
    let vstr = s + readLine();

    // Print the sum of both integer variables on a new line.
    console.log(vint);
    
    // Print the sum of the double variables on a new line.
    console.log(vfloat.toFixed(1));

    // Concatenate and print the String variables on a new line   
    // The 's' variable above should be printed first.
    console.log(vstr);    
}
