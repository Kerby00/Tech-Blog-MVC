// These variables go through and grab the id by taking the url and using a regex to grab only the number (id), then putting that in a variable
const url = window.location.pathname
const filterNumber = url.match(/(\d+)/)
const id = filterNumber[1]

// Frontend request to update a post post
const updatepostHandler = async (event) => {
    event.preventDefault()

    const postTitle = document.querySelector('#edit-post-title').value
    const postbody = document.querySelector('#edit-post-body').value

    if (postTitle && postbody) {
        const response = await fetch(`/api/post/${id}`, {
            method: 'PUT', 
            body: JSON.stringify({ title, body }),
            headers: { 'Content-type': 'application/json' }
        })

        if (response.ok) {
            document.location.replace('/dashboard')
        } else {
            alert('post post could not be updated')
        }
    }
}

// Frontend request to delete a post post
const deletepostHandler = async (event) => {
    event.preventDefault()

    const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        document.location.replace('/dashboard')
    } else {
        alert('post post could not be deleted')
    }
    
}

// Event listeners for form submit/delete
document
    .querySelector('#edit-post-form')
    .addEventListener('click', updatepostHandler)

document
    .querySelector('#delete-post-button')
    .addEventListener('click', deletepostHandler)