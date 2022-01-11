    //document.querySelector('.title'); - обращение к .title
// let age = document.querySelector('.title');

// console.log(age);




// const div = document.createElement('div');
// const header = document.createElement('h1');

// header.innerText = 24;
// div.appendChild(header);

// document.body.appendChild(div);

// console.log(div);



const div = document.createElement('div');
const a = document.createElement('a');

    // добавление сылки a.href = '';
a.href = 'https://developer.mozilla.org/ru/docs/Web/API/Node/appendChild';
    // добавление класса a.classList = '';
a.classList = 'test_class'
a.innerText = 'Click me'

div.appendChild(a);

document.body.appendChild(div);

    // выбор обьекта document.querySelector('a');
const aTag = document.querySelector('.test_class');

aTag.addEventListener('click', function(e) {
        // preventDefault() - отменяет действие
    e.preventDefault();
    const p = document.createElement('p');

    p.innerText = 'Я ТЕБЯ ВИЖУ';

    div.appendChild(p);

    console.log(p);
})


const button = document.querySelector('.click_me');

button.addEventListener('click', function() {
    const text = document.createElement('p');

    text.innerText = 'Я ТЕБЯ ВИЖУ'
    text.classList = 'i_see_you'

    document.body.appendChild(text)

    const img = document.createElement('img');

    img.src = 'img/hello.jpg'
    img.classList = 'img'

    document.body.appendChild(img);
})




const h1Tags = document.querySelectorAll('.title');

h1Tags.forEach(h1Tag => {
    h1Tag.addEventListener('click', function() {
        console.log('Hello');
    })
})

const car = {
    brand: 'Mercedes',
    year: 2105
}
const brand = car
console.log(brand)

const cars = ['bmw M5', 'Mercedec X3', 'Audi A8', 'Tesla model S']
console.log('Я выбираю:', cars[0])