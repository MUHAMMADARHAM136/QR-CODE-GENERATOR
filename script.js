const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    // Trim the input value and store it in a variable
    let qrValue = qrInput.value.trim();
  
    // Check if the value is empty or the same as the previous value
    if (!qrValue || preValue === qrValue) return;
  
    // Update the previous value
    preValue = qrValue;
  
    // Set a temporary message while generating the QR code
    generateBtn.innerText = "Generating QR Code...";
  
    // Update the QR image source with the QR server URL
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
  
    // Add event listener for the QR image to load
    qrImg.addEventListener("load", () => {
      // Add the 'active' class to the wrapper element
      wrapper.classList.add("active");
  
      // Reset the button text after loading
      generateBtn.innerText = "Generate QR Code";
    });
  });
  
  qrInput.addEventListener("keyup", () => {
    // Check if the input value is trimmed and empty
    if (!qrInput.value.trim()) {
      // Remove the 'active' class from the wrapper element
      wrapper.classList.remove("active");
  
      // Reset the previous value
      preValue = "";
    }
  });