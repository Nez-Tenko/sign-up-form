let fname = '';
let lname = '';
let email = '';
let phone_num = '';
let pass = '';
let pass_confirm = '';

let create_account_btn = document.querySelector('#create-account-button');
let form_el = document.querySelector('.main-form');


function submitForm() {
  form_el.submit();
}

create_account_btn.addEventListener('click', ()=> {
  console.log('button clicked');
  let myFormData = new FormData(form_el);
  fname = myFormData.get('fname');
  lname = myFormData.get('lname');
  email = myFormData.get('email');
  pass = myFormData.get('pass');
  pass_confirm = myFormData.get('pass_confirm');
  
  form_el.submit();

});



