class ModalComponent {
    constructor() {
      this.modal = document.createElement('div');
      this.modal.classList.add('modal');

      this.closeBtn = document.createElement('div');
      this.closeBtn.classList.add('close');
      this.closeBtn.innerHTML = '<svg><use href="img/icons.svg#close"></use></svg>';
      this.closeBtn.onclick = () => this.close();

      this.modal.appendChild(this.closeBtn);

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
  