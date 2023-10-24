#!/usr/bin/env node
function updateCountdown() {
    const targetDate = new Date('2023-9-30 23:59:59'); //target date and time
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    if (timeDifference <= 0) {
        console.log('Countdown expired!');
        return;
    }
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    console.log(countdownText);
}
// Update the countdown every second
setInterval(updateCountdown, 1000);
// Initial call to set the countdown
updateCountdown();
export {};
