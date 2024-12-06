document.getElementById('userForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch('http://127.0.0.1:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al registrar el usuario. Detalles del error: ' + error.message);
    }
});


document.getElementById('movieForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const genre = document.getElementById('genre').value;
    const duration = document.getElementById('duration').value;
    const show_times = document.getElementById('show_times').value.split(',');
    const availability = document.getElementById('availability').value;

    const response = await fetch('http://127.0.0.1:5000/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, genre, duration, show_times, availability }),
    });

    const result = await response.json();
    alert(result.message);
});

document.getElementById('purchaseForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const user_id = document.getElementById('user_id').value;
    const movie_id = document.getElementById('movie_id').value;
    const quantity = document.getElementById('quantity').value;

    const response = await fetch('http://127.0.0.1:5000/purchases', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_id, movie_id, quantity, total_price: quantity * 15 }),
    });

    const result = await response.json();
    alert(result.message);
});
