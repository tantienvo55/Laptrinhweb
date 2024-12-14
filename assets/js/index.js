function startCountdown() {
  const countdownDuration = 6 * 24 * 60 * 60 * 1000;

  let endTime = new Date().getTime() + countdownDuration;

  const interval = setInterval(() => {
    let now = new Date().getTime();
    let distance = endTime - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = hours
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minutes
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = seconds
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      endTime = new Date().getTime() + countdownDuration;
    }
  }, 1000);
}

startCountdown();


const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const notFoundMessage = document.getElementById('notFoundMessage');

searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.trim().toLowerCase(); 
    const products = document.querySelectorAll('.product-card');

    let found = false;

    products.forEach(product => {
        const productName = product.querySelector('.add-to-cart').getAttribute('data-name').toLowerCase(); 

        if (productName.includes(searchTerm)) {
            product.scrollIntoView({ behavior: 'smooth', block: 'center' }); 
            product.style.border = '2px solid #007bff'; 
            setTimeout(() => product.style.border = '', 2000); 
            found = true;
        }
    });

    if (!found) {
        notFoundMessage.style.display = 'block'; 
    } else {
        notFoundMessage.style.display = 'none'; 
    }
});
