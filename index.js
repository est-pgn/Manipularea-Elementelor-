var form = document.getElementById('form');
form.addEventListener('submit', 
function (event) {
      event.preventDefault();

      var username = document.getElementById('username').value ;
      var password = document.getElementById('password').value;

       if (username === 'new user'  && password ==='123456789') {
        document.getElementById('username').innerText = 'Succcessful login !';
        document.getElementById('username').style.borderColor = 'green';
        document.getElementById('icon').innerHTML = <i class="fa-solid fa-check"></i>
        document.getElementById('password').style.borderColor = 'green';
       } else {
            if(username !== 'new user') {
                alert('Please enter a valid username');
                document.getElementById('username').style.borderColor = 'red';
                document.getElementById('icon').innerHTML = <i class="fa-solid fa-xmark" ></i>
            }
            if (password !== '123456789') {
                alert('Please enter a valid password');
                document.getElementById('password').style.borderColor = 'red';
                document.getElementById('icon').innerHTML = <i class="fa-solid fa-xmark" ></i>
            }

       }
       if (!username) {
        document.getElementById('username').innerText = 'Please enter username';
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('icon').innerHTML = <i class="fa-solid fa-xmark" ></i>
       }
       if (!password) {
        document.getElementById('password').innerText = 'Please enter password';
        document.getElementById('password').style.borderColor = 'red';
        document.getElementById('icon').innerHTML = <i class="fa-solid fa-xmark" ></i>;
       }

    }
    
);