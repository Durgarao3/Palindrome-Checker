document.getElementById("check-btn").addEventListener("click",() => {
    const input = document.getElementById("text-input").value;
    if (!input) {
        alert("Please enter a text");
    return} 
const isPalindrome=(str)=>{
    const cleaned =str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
    return cleaned.split("").reverse().join("")===cleaned;
}
const result = document.getElementById("result");
if(isPalindrome(input)){
    result.textContent = `${input} It's a palindrome`;
    
} else {
    result.textContent = `${input} It's not a palindrome`;
}
});