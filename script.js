const progress = [
  { stage: "1", steps: "STEP 1", section: "Your Info" },
  { stage: "2", steps: "STEP 2", section: "Select Plan" },
  { stage: "3", steps: "STEP 3", section: "Add-Ons" },
  { stage: "4", steps: "STEP 4", section: "Summary" },
];

const sidebar = document.getElementById("msf--sidebar");

progress.forEach(function (step) {
  const formStep = document.createElement("div");

  formStep.innerHTML = `
   <div class="msf--sidebar-item">
     <span class="msf--sidebar-item__number"><p class="msf--sidebar-item__number-typography">${step.stage}</p></span>
        <div class="msf--sidebar-item__label">
            <div class="msf--steps-label">${step.steps}</div>
            <div class="msf--section-label">${step.section}</div>
        </div>
   </div>
    `;
  sidebar.append(formStep);
});
