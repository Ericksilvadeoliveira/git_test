//Button é uma NODE LIST. Parece e aje como uma ARRAY
const buttons = document.querySelectorAll('button');

//Usamos o metódo forEach() para percorrer cada button
buttons.forEach((button) => {

    //e para cada um, nós adicionamos um 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    });
})