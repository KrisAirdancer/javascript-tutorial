// DIGITAL CLOCK
// This file pairs with digital_clock.html

const clock = document.querySelector('.clock');

const tick = () => {
    const timeNow = new Date();

    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();

    const html = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${seconds}</span>
    `;

    clock.innerHTML = html;

    // console.log(hours, minutes, seconds);
};

setInterval(tick, 1000);