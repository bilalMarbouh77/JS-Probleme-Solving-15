function toCamelCase(str){
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(str[i]=="-" || str[i]=="_"){
            newStr+=str[i+1].toUpperCase()
            i=i+1
            continue;
        }
        newStr +=str[i];
    }
    return newStr;
}

// Question:

// Write a JavaScript function that converts a given string 
// into camel case. Camel case is a format where each word is 
// joined without spaces, and the first letter of every word 
// after the first is capitalized. The function should handle 
// strings where words are separated by dashes (-) or underscores (_).

// Examples:

// toCamelCase("the-stealth-warrior")  
// // Output: "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior")  
// // Output: "TheStealthWarrior"

// toCamelCase("hello_world")  
// // Output: "helloWorld"
