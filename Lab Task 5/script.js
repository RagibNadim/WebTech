console.log("connected");

function analyzeText()
{
    const text = document.getElementById("inputText").value;

    const errorMsg = document.getElementById("errorMsg");
    const resultDiv = document.getElementById("result");

    // Clear previous error
    errorMsg.innerHTML = "";

    // Handle empty input
    if (text.trim() === "")
    {
        resultDiv.style.display = "none";
        errorMsg.innerHTML = "Please enter some text!";
        return;
    }

    // Character count
    const charCount = text.length;

    // Word count (handling multiple spaces)
    const words = text.trim().split(/\s+/);
    const wordCount = words.length;

    // Reverse text
    const reversedText = text.split("").reverse().join("");

    // Display results
    document.getElementById("charCount").innerHTML = charCount;
    document.getElementById("wordCount").innerHTML = wordCount;
    document.getElementById("reversedText").innerHTML = reversedText;

    resultDiv.style.display = "block";
}