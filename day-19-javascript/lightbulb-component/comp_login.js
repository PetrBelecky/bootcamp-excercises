
class Login {
  constructor() {

  }

  render() {
    this.element = document.createElement('form');
    this.element.setAttribute('action', '#');
    this.element.innerHTML =

      `<p class="message" id="message"></p>
    <div class="input__wrapper">
      <input type="email" name="" id="email" required>
      <label for="email">E-mail</label>
    </div>
    <div class="input__wrapper">
      <input type="password" name="" id="pass1" required>
      <label for="pass1">Choose password</label>
    </div>
    <div class="input__wrapper">
      <input type="password" name="" id="pass2" required>
      <label for="pass2">Repeat chosen password</label>
    </div>
    <input id="submit" type="submit" value="Confirm">`


    const btn = this.element.querySelector('#submit');

    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const msg = this.element.querySelector('#message');
      const pass1 = this.element.querySelector('#pass1').value;
      const pass2 = this.element.querySelector('#pass2').value;

      const passDoNotMatch = () => {
        msg.textContent = 'Sorry, your passwords don\'t match.';
        msg.className = 'msg msg--error';
      }

      const msgSuccess = () => {
        msg.textContent = 'Your account was succesfully created.';
        msg.className = 'msg msg--success';
      }

      if (pass1 !== pass2) {
        passDoNotMatch();
      } else {
        msgSuccess();
      }

    })

    return this.element;
  }

  mount(parentElement) {
    this.render();
    parentElement.appendChild(this.element);
  }
}