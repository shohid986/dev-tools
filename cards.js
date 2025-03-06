const allBtnElements = document.getElementsByClassName("card-button");
const parentElement = document.getElementById("task-added");
const disabledBtn = document.getElementsByClassName("added");
const taskNumber = document.getElementById("taskNumber");

for (let btn of allBtnElements) {
    btn.addEventListener("click", function (event) {
        // button status control section
        
        const clickedBtn = event.target;
        clickedBtn.setAttribute('disabled', true);
        clickedBtn.setAttribute("class", "added btn bg-[#3752FD] font-medium text-white card-button");
        
        
        
        // setting date section
        let date = new Date();
        const clickedHours = date.getHours() - 12;
        let clickedMidday = "";
        // check am or pm
        if(date.getHours() <= 12){
            clickedMidday = 'AM';
        }
        else{
            clickedMidday = 'pm';
        }
        const clickedMinutes = date.getMinutes();
        const clickedSecond = date.getSeconds();
        // create new element and update section
        const childElement = document.createElement("p");
        childElement.setAttribute("class", "bg-[#F4F7FF] text-xs p-4 mt-5");
        childElement.textContent =
        `You have Complete The Task Add Dark Mode at ${clickedHours}:${clickedMinutes}:${clickedSecond} ${clickedMidday}`;
        parentElement.appendChild(childElement);
        alert("task added complete")
        //  task assign status section
    const AddedtaskNumber = disabledBtn.length;
    taskNumber.innerText = Math.abs(AddedtaskNumber - 6);
    if(parseInt(taskNumber.innerText) === 0){
        alert("All Task Assign")
    }
});
}

// clear history section
const clearHistory = document.getElementById("clearHistory").addEventListener('click', function(){
    parentElement.innerHTML = ""

    for (let btn of allBtnElements){
        btn.removeAttribute("disabled")
    }
    taskNumber.innerText = "06"
})


