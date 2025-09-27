// Session management variables
let sessionTimer;
let warningTimer;
let isModalOpen = false;
const SESSION_TIMEOUT = 10 * 60 * 1000; // 10 minutes in milliseconds
const WARNING_TIME = 2 * 60 * 1000; // Show warning 2 minutes before timeout

// Session management functions
function startSession() {
  clearTimeout(sessionTimer);
  clearTimeout(warningTimer);

  // Set warning timer
  warningTimer = setTimeout(showSessionWarning, SESSION_TIMEOUT - WARNING_TIME);

  // Set session timeout
  sessionTimer = setTimeout(endSession, SESSION_TIMEOUT);
}

function resetSession() {
  if (isModalOpen) {
    startSession();
  }
}

function showSessionWarning() {
  if (isModalOpen) {
    const userResponse = confirm(
      "Your session will expire in 2 minutes due to inactivity. Click OK to continue or Cancel to logout."
    );
    if (userResponse) {
      startSession(); // Reset the session
    } else {
      endSession();
    }
  }
}

function endSession() {
  alert(
    "Your session has expired due to inactivity. You will be logged out for security purposes."
  );
  modal.style.display = "none";
  isModalOpen = false;
  clearTimeout(sessionTimer);
  clearTimeout(warningTimer);
}

// Add activity listeners to reset session on user interaction
function addActivityListeners() {
  const events = [
    "mousedown",
    "mousemove",
    "keypress",
    "scroll",
    "touchstart",
    "click",
  ];
  events.forEach((event) => {
    document.addEventListener(event, resetSession, true);
  });
}

// Sample student data (in a real application, this would be secured on the server)
const studentDatabase = {
  "emma-001": {
    firstName: "Emma",
    fullName: "Emma Johnson",
    dateOfBirth: "March 15, 2021",
    enrolled: true,
    studentId: "001",
    parentEmail: "parent1@example.com",
    emergencyContact: "(555) 123-4567",
  },
  "noah-002": {
    firstName: "Noah",
    fullName: "Noah Smith",
    dateOfBirth: "July 22, 2020",
    enrolled: true,
    studentId: "002",
    parentEmail: "parent2@example.com",
    emergencyContact: "(555) 234-5678",
  },
  "olivia-003": {
    firstName: "Olivia",
    fullName: "Olivia Brown",
    dateOfBirth: "December 8, 2021",
    enrolled: false,
    studentId: "003",
    parentEmail: "parent3@example.com",
    emergencyContact: "(555) 345-6789",
  },
  "liam-004": {
    firstName: "Liam",
    fullName: "Liam Davis",
    dateOfBirth: "September 3, 2020",
    enrolled: true,
    studentId: "004",
    parentEmail: "parent4@example.com",
    emergencyContact: "(555) 456-7890",
  },
  "ava-005": {
    firstName: "Ava",
    fullName: "Ava Wilson",
    dateOfBirth: "May 18, 2021",
    enrolled: true,
    studentId: "005",
    parentEmail: "parent5@example.com",
    emergencyContact: "(555) 567-8901",
  },
};

// Get modal elements
const modal = document.getElementById("studentModal");
const span = document.getElementsByClassName("close")[0];
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Handle form submission
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document
    .getElementById("firstName")
    .value.trim()
    .toLowerCase();
  const studentId = document.getElementById("studentId").value.trim();

  // Create lookup key
  const lookupKey = `${firstName}-${studentId.padStart(3, "0")}`;

  // Check if student exists
  const student = studentDatabase[lookupKey];

  if (student) {
    // Hide error message
    errorMessage.style.display = "none";

    // Populate modal with student information
    const studentInfo = document.getElementById("studentInfo");
    const enrollmentStatus = student.enrolled
      ? '<span class="status-enrolled">Currently Enrolled</span>'
      : '<span class="status-not-enrolled">Not Currently Enrolled</span>';

    studentInfo.innerHTML = `
            <div class="info-item">
                <span class="info-label">Full Name:</span>
                <span class="info-value">${student.fullName}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Date of Birth:</span>
                <span class="info-value">${student.dateOfBirth}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Student ID:</span>
                <span class="info-value">${student.studentId}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Enrollment Status:</span>
                <span class="info-value">${enrollmentStatus}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Parent Email:</span>
                <span class="info-value">${student.parentEmail}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Emergency Contact:</span>
                <span class="info-value">${student.emergencyContact}</span>
            </div>
        `;

    // Show modal
    modal.style.display = "block";
    isModalOpen = true;

    // Start session management
    startSession();
    addActivityListeners();

    // Clear form
    document.getElementById("firstName").value = "";
    document.getElementById("studentId").value = "";
  } else {
    // Show error message
    errorMessage.style.display = "block";
  }
});

// Close modal when clicking the X
span.onclick = function () {
  modal.style.display = "none";
  isModalOpen = false;
  clearTimeout(sessionTimer);
  clearTimeout(warningTimer);
};

// Close modal when clicking outside of it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    isModalOpen = false;
    clearTimeout(sessionTimer);
    clearTimeout(warningTimer);
  }
};

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    isModalOpen = false;
    clearTimeout(sessionTimer);
    clearTimeout(warningTimer);
  }
});
