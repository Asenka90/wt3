const userName = prompt('Введите ваше имя: ');

greeting(userName);

function greeting(name) {
    alert(`Приветствую вас уважаемый, ${name}!`);
}