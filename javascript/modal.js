const notice = document.getElementById('notice-modal');
const triggerModal = document.getElementById('trigger-modal')
const closeBtn = document.getElementById('close-modal')


triggerModal.addEventListener('click', ()=>{
    notice.style.display = "block"
})

notice.addEventListener('click', closeModal)
closeBtn.addEventListener('click',closeModal)



function closeModal(){
    notice.style.display = "none"
}