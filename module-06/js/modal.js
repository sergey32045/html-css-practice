class ModalComponent {
    constructor() {
      this.modal = document.createElement('div');
      this.modal.classList.add('modal');

      this.closeBtn = document.createElement('div');
      this.closeBtn.classList.add('close');
      this.closeBtn.innerHTML = '<svg><use href="img/icons.svg#close"></use></svg>';
      this.closeBtn.onclick = () => this.close();

      this.modal.appendChild(this.closeBtn);

      // user form
      this.form = document.createElement('form');
      this.form.classList.add('user-form');
      this.formHeader = document.createElement('p');
      this.formHeader.innerHTML = 'Leave your contacts, we will call you back';
      this.form.appendChild(this.formHeader);
      
      // user name
      this.nameLabel = document.createElement('label');
      this.nameLabel.innerHTML = 'User name';
      this.nameLabel.innerHTML += '<svg class="icon"><use href="img/icons.svg#person"></use></svg>';
      this.nameInput = document.createElement('input');
      this.nameInput.classList.add('input');
      this.nameInput.setAttribute('type', 'text');
      this.nameInput.setAttribute('name', 'username');

      this.nameLabel.appendChild(this.nameInput);
      this.form.appendChild(this.nameLabel);

      // phone
      this.phoneLabel = document.createElement('label');
      this.phoneLabel.innerHTML = 'Phone';
      this.phoneLabel.innerHTML += '<svg class="icon"><use href="img/icons.svg#phone2"></use></svg>';
      this.phoneInput = document.createElement('input');
      this.phoneInput.classList.add('input');
      this.phoneInput.setAttribute('type', 'tel');
      this.phoneInput.setAttribute('name', 'phone');
      
      this.phoneLabel.appendChild(this.phoneInput);
      this.form.appendChild(this.phoneLabel);

      // email
      this.emailLabel = document.createElement('label');
      this.emailLabel.innerHTML = 'Email';
      this.emailLabel.innerHTML += '<svg class="icon"><use href="img/icons.svg#email"></use></svg>';
      this.emailInput = document.createElement('input');
      this.emailInput.classList.add('input');
      this.emailInput.setAttribute('type', 'email');
      this.emailInput.setAttribute('name', 'email');
      
      this.emailLabel.appendChild(this.emailInput);
      this.form.appendChild(this.emailLabel);
     
      // comments
      this.commentsLabel = document.createElement('label');
      this.commentsLabel.innerHTML = 'Comments';
      this.commentsInput = document.createElement('textarea');
      this.commentsInput.classList.add('comments');
      this.commentsInput.setAttribute('name', 'comments');
      this.commentsInput.setAttribute('placeholder', 'Add your comments');
      this.commentsInput.setAttribute('rows', '5');
      
      this.commentsLabel.appendChild(this.commentsInput);
      this.form.appendChild(this.commentsLabel);
      
      // terms agree
      this.terms = document.createElement('div')
      this.terms.classList.add('terms');
      this.termsLabel = document.createElement('label');
      this.termsLabel.setAttribute('for', 'terms');
      this.termsLabel.innerHTML = 'Agree with terms and conditions';
      this.termsInput = document.createElement('input');
      this.termsInput.classList.add('input', 'check');
      this.termsInput.setAttribute('type', 'checkbox');
      this.termsInput.setAttribute('name', 'terms');
      this.termsInput.setAttribute('id', 'terms');
      
      this.terms.appendChild(this.termsLabel);
      this.terms.appendChild(this.termsInput);
      this.form.appendChild(this.terms);

      // submit button
      this.submitButton = document.createElement('button');
      this.submitButton.setAttribute('type', 'submit')
      this.submitButton.innerHTML = 'Send';

      this.form.appendChild(this.submitButton);

      this.modal.appendChild(this.form)

      window.onclick = (event) => {
        if (event.target === this.modal) {
          this.close();
        }
      };
    }
  
    open() {
      this.modal.style.display = 'block';
    }
  
    close() {
      this.modal.style.display = 'none';
    }
  
    render() {
      return this.modal;
    }
}
  