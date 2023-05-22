const newpost = async (event) => {
    event.preventDefault()

    const title = document.querySelector('#title').value.trim()
    const body = document.querySelector('#descript').value.trim()

    if (title && body) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, body }),
            headers: { 'Content-type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace('/dashboard')
            console.log(title)
            console.log(body)
        } else {
            alert(response.statusText);
            console.log(title)
            console.log(body)
        }
    }
}

// Event listener for form submit
document
    .querySelector('#newPosty')
    .addEventListener('onclick', newpost)