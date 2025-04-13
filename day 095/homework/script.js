const form = document.getElementById('personForm');
    const personList = document.getElementById('personList');

    function generateEmail(firstName, lastName, age) {
        const rand = Math.floor(Math.random() * 1000);
        return `${firstName.toLowerCase()}.${lastName.toLowerCase()}${age}${randomNum}@example.com`;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const age = document.getElementById('age').value;
        const idNumber = document.getElementById('idNumber').value;
        const height = document.getElementById('height').value;
        const description = document.getElementById('description').value;

        const email = generateEmail(firstName, lastName, age);

        const personCard = document.createElement('div');
        personCard.className = 'person-card';
        personCard.innerHTML = `
            <h3>${firstName} ${lastName}</h3>
            <p>Age: ${age}</p>
            <p>ID: ${idNumber}</p>
            <p>Height: ${height} cm</p>
            <p>Description:${description}</p>
            <p>Email: ${email}</p>
        `;

        personList.appendChild(personCard);

        form.reset();
    });