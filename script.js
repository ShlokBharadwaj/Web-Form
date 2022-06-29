const nameEle = document.getElementById('name')
const email = document.getElementById('email')
const form = document.getElementById('form')
const rad1 = document.getElementById('rad1')
const rad2 = document.getElementById('rad2')


form.addEventListener('submit', e => {
    e.preventDefault()
    
    validateInputs()
})


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    const nameValue = nameEle.value.trim()
    const emailValue = email.value.trim()

    if(nameValue === '') {
        alert(nameEle, 'Name is required')
    } else {
        setSuccess(nameEle)
    }

    if(emailValue === '') {
        alert(email, 'Email is required')
    } else if (!isValidEmail(emailValue)) {
        alert(email, 'Provide a valid email address')
    } else {
        setSuccess(email);
    }

    if(!rad1) {
        alert("Please choose your Education field")
    }

    if(!rad2) {
        alert("Please choose your Department")
    }
}