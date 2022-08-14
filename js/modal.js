
  const refs = {
    openModalBtnOrder: document.querySelector('[data-modal-order-open]'),
    closeModalBtnOrder: document.querySelector('[data-modal-order-close]'),
    openModalBtnCost: document.querySelector('[data-modal-cost-open]'),
    closeModalBtnCost: document.querySelector('[data-modal-cost-close]'),
    modalOrder: document.querySelector('[data-modal-order]'),
    modalCost: document.querySelector('[data-modal-cost]'),
  };

  refs.openModalBtnOrder.addEventListener('click', toggleModalOrder);
  refs.closeModalBtnOrder.addEventListener('click', toggleModalOrder);
  refs.openModalBtnCost.addEventListener('click', toggleModalCost);
  refs.closeModalBtnCost.addEventListener('click', toggleModalCost);

  

  function toggleModalOrder() {
    refs.modalOrder.classList.toggle('is-hidden');
     refs.modalOrder.classList.toggle('modal-order');
  }
  function toggleModalCost() {
    refs.modalCost.classList.toggle('is-hidden');
     refs.modalOrder.classList.toggle('modal-cost');
  }
