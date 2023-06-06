
const taskCreateText = document.querySelectorAll('#task-name');
const taskCreateButton = document.querySelector('#task-creation');
taskCreateButton.addEventListener('click', () => {
    const listcardsContainer = document.getElementById("list-create");

    const listCardTemplate = document.getElementById("task");
    const taskValue = taskCreateText;
    taskValue.forEach(taskValue => {

        const listcardClone = listCardTemplate.content.cloneNode(true);
        if (!taskValue.value) return;
        fillDataInCard(listcardClone, taskValue.value);
        listcardsContainer.appendChild(listcardClone);
    })

})
function fillDataInCard(listcardClone, taskValue) {

    const taskname = listcardClone.querySelector(".small-bold-text");
    taskname.innerHTML = taskValue;
}
const cardsContainer = document.getElementById("list-create");

cardsContainer.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('small-bold-text')) {
        target.style.textDecoration = "line-through";
    } else if (target.classList.contains('delete-button')) {
        const task = target.closest('.task');
        cardsContainer.removeChild(task);
    }
});