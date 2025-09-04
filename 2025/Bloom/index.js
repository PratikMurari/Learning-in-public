function openLetter() {
  document.getElementById("letterModal").style.display = "flex";
  // Add a gentle fade-in effect
  setTimeout(() => {
    document.getElementById("letterModal").style.opacity = "1";
  }, 10);
}

function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}

// Close modal when clicking outside
document.getElementById("letterModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeLetter();
  }
});

// Add some interactive sparkles when dove flies by
setTimeout(() => {
  for (let i = 0; i < 10; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = Math.random() * 100 + "%";
    sparkle.style.animationDelay = Math.random() * 2 + "s";
    document.body.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => {
      sparkle.remove();
    }, 4000);
  }
}, 2000);
