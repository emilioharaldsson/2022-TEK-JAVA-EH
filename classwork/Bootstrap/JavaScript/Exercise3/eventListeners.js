const btn = document.querySelector('.btn-change');
const changeButtonAndText = () => {
    const text = document.querySelector('.text-to-change');
    btn.textContent = "I was clicked!";
    text.textContent = "I was changed! Good job!!"
}

btn.addEventListener('click', changeButtonAndText);