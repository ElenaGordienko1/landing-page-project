document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("quizForm");
const steps = Array.from(form.querySelectorAll(".quiz__step"));
const progressBar = document.querySelector(".quiz__progress-bar");
const summary = form.querySelector(".quiz__summary");

let currentStep = 0;
const totalSteps = steps.length;

const updateStep = () => {
    steps.forEach((step, i) => {
    step.hidden = i !== currentStep;
    });
    const progress = ((currentStep + 1) / totalSteps) * 100;
    const currentProgressBar = steps[currentStep].querySelector(".quiz__progress-bar");
    if (currentProgressBar) {
    currentProgressBar.style.width = `${progress}%`;
    }
};

const getCurrentInputs = () => {
    const inputs = steps[currentStep].querySelectorAll("input");
    return Array.from(inputs).filter((input) => {
    if (input.type === "checkbox") return input.checked;
    return input.value.trim() !== "";
    });
};

const validateStep = () => {
    const inputs = getCurrentInputs();
    return inputs.length > 0;
};

const showSummary = () => {
const allInputs = form.querySelectorAll("input");
summary.innerHTML = "";

allInputs.forEach((input) => {
    if (input.name === "name" || input.name === "phone") {
    return;
    }

    if (input.type === "checkbox" && input.checked) {
        summary.innerHTML += `<p><img src="./images/checkbox.svg" alt="" >${input.value}</p>`;
    }

    if ((input.type === "text" || input.type === "tel") && input.value.trim()) {
        summary.innerHTML += `<p><img src="./images/checkbox.svg" alt="" >${input.value}</p>`;
    }
});
};

form.addEventListener("click", (e) => {
    if (e.target.classList.contains("quiz__next")) {
    if (!validateStep()) {
        alert("Пожалуйста, выберите хотя бы один вариант или заполните поле.");
        return;
    }
    if (currentStep < totalSteps - 1) {
        currentStep++;
        if (currentStep === totalSteps - 1) showSummary();
        updateStep();
    }
    }

    if (e.target.classList.contains("quiz__prev")) {
    if (currentStep > 0) {
        currentStep--;
        updateStep();
    }
    }

    if (e.target.classList.contains("quiz__restart")) {
    form.reset();
    currentStep = 0;
    updateStep();
    }
});


updateStep();
});

