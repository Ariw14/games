document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('instruction');
    const instruction = document.getElementById('instructionBox');
    const closebtn = document.getElementById('closeBtn');

    btn.addEventListener('click', () => {
        instruction.classList.remove('hidden');
    });

    closebtn.addEventListener('click', () => {
        instruction.classList.add('hidden');
    });
});

// main.js

document.addEventListener('DOMContentLoaded', function () {
    const startBtn = document.getElementById('startBtn');
    const usernameInput = document.getElementById('username');
    const levelSelect = document.getElementById('level');
    const weaponRadios = document.querySelectorAll('input[name="weapon"]');
    const dartRadios = document.querySelectorAll('input[name="dart"]');
    const countdownDiv = document.getElementById('countdown');

    function validateForm() {
        const username = usernameInput.value.trim();
        const level = levelSelect.value;
        const weapon = document.querySelector('input[name="weapon"]:checked');
        const dart = document.querySelector('input[name="dart"]:checked');

        const isValid = username && level && weapon && dart;
        startBtn.disabled = !isValid;
    }

    // Cek setiap kali ada perubahan input
    usernameInput.addEventListener('input', validateForm);
    levelSelect.addEventListener('change', validateForm);
    weaponRadios.forEach(radio => radio.addEventListener('change', validateForm));
    dartRadios.forEach(radio => radio.addEventListener('change', validateForm));

    // Klik tombol start
    startBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const level = levelSelect.value;
        const weapon = document.querySelector('input[name="weapon"]:checked');
        const dart = document.querySelector('input[name="dart"]:checked');

        // Sembunyikan form jika perlu (opsional)
        // document.querySelector('.welcome-screen').style.display = 'none';

        // Tampilkan countdown
        let counter = 3;
        countdownDiv.style.display = 'block';
        countdownDiv.textContent = counter;

        const countdownInterval = setInterval(() => {
            counter--;
            if (counter === 0) {
                clearInterval(countdownInterval);
                countdownDiv.textContent = 'Go!';
                setTimeout(() => {
                    window.location.href = 'game.html';
                }, 800);
            } else {
                countdownDiv.textContent = counter;
            }
        }, 1000);
    });

    // Inisialisasi tombol start dalam keadaan disable
    validateForm();
});



document.addEventListener('DOMContentLoaded', () => {
    const exitbtn = document.getElementById('exitbtn');

    exitbtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
})