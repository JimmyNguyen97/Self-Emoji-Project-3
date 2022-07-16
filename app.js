const fire = document.querySelector('.fire');
const water = document.querySelector('.water');
const earth = document.querySelector('.earth');
const air = document.querySelector('.air');

fire.addEventListener('click', () => {
    if (fire.classList.contains('fire')) {
        water.classList.add('active');
        fire.classList.remove('active');
    }
})

water.addEventListener('click', () => {
    if (water.classList.contains('water')) {
        earth.classList.add('active');
        water.classList.remove('active');
    }
})

earth.addEventListener('click', () => {
    if (earth.classList.contains('earth')) {
        air.classList.add('active');
        earth.classList.remove('active');
    }
})

air.addEventListener('click', () => {
    if (air.classList.contains('air')) {
        fire.classList.add('active');
        air.classList.remove('active');
    }
})
