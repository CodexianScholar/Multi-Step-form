const progress = [
  { stage: "1", steps: "step 1", section: "Your Info" },
  { stage: "2", steps: "step 2", section: "Select Plan" },
  { stage: "3", steps: "step 3", section: "Add-Ons" },
  { stage: "4", steps: "step 4", section: "Summary" },
];

const sidebar = document.getElementById("msf--sidebar");

progress.forEach(function (step) {
  const formStep = document.createElement("div");

  formStep.innerHTML = `
    <span>${step.stage}</span>
        <div>
            <div>${step.steps}</div>
            <div>${step.section}</div>
        </div>
    `;
  sidebar.append(formStep);
});
