document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");

  // Set the first tab as active by default
  if (tabButtons.length > 0 && tabContents.length > 0) {
    // Ensure only the first button has the active class initially
    tabButtons.forEach((button, index) => {
      if (index === 0) {
        button.classList.add("active");
        button.setAttribute("aria-selected", "true");
      } else {
        button.classList.remove("active");
        button.setAttribute("aria-selected", "false");
      }
    });

    // Ensure only the first content div has the active class initially
    tabContents.forEach((content, index) => {
      if (index === 0) {
        content.classList.add("active");
        content.removeAttribute("hidden");
      } else {
        content.classList.remove("active");
        content.setAttribute("hidden", "");
      }
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove 'active' class from all buttons and hide all contents
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tabContents.forEach((content) => {
        content.classList.remove("active");
        content.setAttribute("hidden", "");
      });

      // Add 'active' class to the clicked button
      button.classList.add("active");
      button.setAttribute("aria-selected", "true");

      // Show the corresponding tab content
      const targetId = button.dataset.tabTarget;
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add("active");
        targetContent.removeAttribute("hidden");
      }
    });
  });
});
