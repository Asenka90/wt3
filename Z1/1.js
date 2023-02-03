const Cels = Number.parseFloat(prompt('Введите градусы цельсия: '));

function Transform() {
    Farin = Cels * 1.8 + 32;
    return Farin.toFixed(1); 
}

alert(`Цельсий: ${Cels},` + ` Фаренгейт: ${Transform()}`);





