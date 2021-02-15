const choccoForm = document.querySelector('#choccoForm');
const send = document.querySelector('#send');

send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(choccoForm)) {
        console.log('всё ок!');
        const data = {
            name: choccoForm.elements.name.value,
            phone: choccoForm.elements.phone.value,
            to: choccoForm.elements.email.value,
            comment: choccoForm.elements.comment.value
        };
        console.log(data);

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail ');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
            if (xhr.response.status) {
                console.log('Зашибись!');
            } else {
                console.log('Проблемм!');
            };
        });
    };
});

function validateForm(form) {
    let valid = true;

    //console.log(form.elements.name);
    if (!validateField(form.elements.name)) {
        valid = false;
    }
    
    //console.log(form.elements.phone);
    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    /* console.log(form.elements.comment);
    if (!validateField(form.elements.comment)) {
        valid = false;
    } */
    
    return valid;
};

function validateField(field) {
  //field.nextElementSibling.textContent = field.validationMessage;
  return field.checkValidity();
};
