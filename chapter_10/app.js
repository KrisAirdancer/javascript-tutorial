// TODO LIST PROJECT

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html; // Adding the new HTML the HTML that is already on the page.
};

addForm.addEventListener('submit', e => {

    e.preventDefault();
    const todo = addForm.add.value.trim(); // .trin() removes whitespace before and after the string, but not in the middle.
    // console.log(todo);
    if (todo.length > 0) {
        generateTemplate(todo);
        addForm.reset(); // Resets all of the input fields in the form.
    }
});

// Delete Todos

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove(); // Delete the parent of the trashcan element. In this case, the parent is the `ul` tag that makes up the single todo item.
    }
});

// Search Function

const filterTodos = query => {
    // Find elements that don't match and add the 'filtered' tag.
    Array.from(list.children)
         .filter(todo => !todo.textContent.toLowerCase().includes(query))
         .forEach(todo => todo.classList.add('filtered'));

         // Find elements that do match and remove the 'filstered' tag.
         Array.from(list.children)
         .filter(todo => todo.textContent.toLowerCase().includes(query))
         .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', () => {
    const query = search.value.trim().toLowerCase();
    filterTodos(query);
});