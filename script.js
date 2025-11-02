// your code goes here
// Example JS functionality (optional)
document.addEventListener("DOMContentLoaded", () => {
  console.log("Blog page loaded successfully!");

  // Example interactive feature
  const buttons = document.querySelectorAll(".btn-primary");
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Read More feature coming soon!");
    });
  });
});
