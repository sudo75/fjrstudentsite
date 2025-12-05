function displayAuthWindow() {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Append style sheet to head
    const style = document.createElement('style');
    style.textContent = `
        .auth {
            background-color: #b12408ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: fixed;
            top: 0;
            left: 0;
            margin: 0;
            width: 100%;
            height: 100%;
            z-index: 9999;
        }
        .auth .input {
            background-color: #ffffff;
            border: 3px solid #590404ff;
            border-radius: 50px;
            width: 80%;
            min-width: 120px;
            height: 70px;
            font-family: 'Courier New', Courier, monospace;
            font-size: 50px;
            position: absolute;
            top: 50%;
            text-align: center;
        }
        .auth .input:focus {
            border: 1px solid #6282a4ff;
            outline: 4px solid #c1cbff;
        }
        .auth .info {
            font-family: 'Impact', sans-serif, monospace;
            color: #ffffff;
            text-decoration: underline;
            position: absolute;
            top: 18%;
            text-align: center;
        }
        .auth .info1 {
            font-family: 'Impact', sans-serif, monospace;
            color: #ffffff;
            position: absolute;
            top: 0px;
            width: 100%;
            text-align: center;
        }
        .input::placeholder {
            color: #d5d0d0ff;
            font-family: 'Courier New', sans, monospace;
            font-size: 25px;
        }
    `;
    document.head.append(style);

    // Append auth div to body
    const divAuth = document.createElement('div');
    divAuth.classList.add('auth');
    divAuth.style.display = 'flex';

    const ln1 = document.createElement('h1');
    ln1.classList.add('info1');
    ln1.style.fontSize = '24px';
    ln1.innerText = 'Welcome to the FJR student website!';

    const ln2 = document.createElement('h2');
    ln2.classList.add('info');
    ln2.style.fontSize = '60px';
    ln2.innerText = 'Ready to Enter';

    const input = document.createElement('input');
    input.classList.add('input');
    input.type = 'text';
    input.autocomplete = 'off';
    input.placeholder = 'Enter the key here';

    /* Temporarily removed due to lack of asset
    const img = document.createElement('img');
    img.src = './pics/fjrpics.png';
    img.style.width = '100%';
    */

    // Append elements
    divAuth.append(ln1);
    divAuth.append(ln2);
    divAuth.append(input);
    // divAuth.append(img);
    document.body.prepend(divAuth);

    // Listen for input
    document.addEventListener('input', () => {
        const inputEle = document.querySelector('.auth .input');
        const inputVal = inputEle.value.trim();

        if (inputVal === "fjr1234") {
            localStorage.setItem("authenticated", "true");
            document.body.style.overflow = 'visible';
            style.remove();
            divAuth.remove();
        }
    });
}

// Initial auth check
try {
    if (localStorage.getItem("authenticated") !== "true") {
        displayAuthWindow();
    }
} catch (e) {
    displayAuthWindow(); // fallback
}