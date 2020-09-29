const addEntryBtn = document.getElementById("submit");
const entryContent = document.getElementById("form-text-area");
const entriesSection = document.querySelector(".diary-entries-section")
const diariesButtons = document.getElementById("diary-entries-buttons")

const getEntry = () => {
    if (entryContent.value) {
        const displayEntryButton = document.createElement("button");
        displayEntryButton.className = 'display-entry-button';
        const today = new Date();
        const date = `${today.getDate()}/${(today.getMonth()+1)}/${today.getFullYear()}`;
        displayEntryButton.innerText = date;
        diariesButtons.appendChild(displayEntryButton);

        const diaryEntry = document.createElement("p");
        diaryEntry.className = "single-entry";
        diaryEntry.textContent = entryContent.value;
        diaryEntry.style.display = "none"
        entriesSection.appendChild(diaryEntry);
        entryContent.value = "";

        displayEntryButton.addEventListener("click", () => {
            const allEntries = document.querySelectorAll(".single-entry");
            for(let i = 0; i < allEntries.length; i++){
                allEntries[i].style.display = 'none';
            }
            diaryEntry.style.display = 'block';
        })
}
}
    

addEntryBtn.addEventListener("click", getEntry)

