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

document.addEventListener('DOMContentLoaded', () => {
    const startbtn = document.getElementById('startBtn');

    startbtn.addEventListener('click', () => {
        const username = document.getElementById('username').value.trim();
        const level = document.getElementById('level').value;
        const weapon = document.querySelector('input[name="weapon"]:checked');
        const dart = document.querySelector('input[name="dart"]:checked');

        if (!username) {
            alert('please fill your username');
            return;
        }

        if (!level) {
            alert('please select your level');
            return;
        }

        if (!weapon) {
            alert('please select your weapon');
            return;
        }

        if (!dart) {
            alert('please select your dart')
        }

        alert(`Starting game for ${username} at ${level} level with ${weapon.value} and ${dart.value}.`);

        
        window.location.href = 'game.html'; 

    })
})

document.addEventListener('DOMContentLoaded', ()=> {
    const exitbtn = document.getElementById('exitbtn');

    exitbtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
})