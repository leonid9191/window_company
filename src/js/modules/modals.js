const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block"; // show page
                document.body.style.overflow = "hidden"; //frizzen our page
                //document.body.classList.add('modal-open);
            });
            
        });
        //close modal
        close.addEventListener('click', () => {
            modal.style.display = "none";
            document.body.style.overflow = "";
        }); 

        //close when click out of modal window
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
            }
        });
    }

    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = "block";
            document.body.style.overflow = "hidden"; //frizzen our page
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 30000);
}

export default modals;