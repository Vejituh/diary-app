const addEntryBtn = document.getElementById("submit");
const entryContent = document.getElementById("form-text-area");
const entriesSection = document.querySelector(".diary-entries-section")

addEntryBtn.addEventListener("click", () => {
    if (entryContent.value) {
        const diaryEntry = document.createElement("p");
        diaryEntry.textContent = entryContent.value;
        entriesSection.appendChild(diaryEntry);
        entryContent.value = "";
    }
})