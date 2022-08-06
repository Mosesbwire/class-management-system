const uploadIcon = document.getElementById('upload-icon')
const wrapper = document.getElementById('upload-container')


if(uploadIcon){
    uploadIcon.addEventListener('click', ()=>{

        wrapper.firstElementChild.click()
        wrapper.firstElementChild.addEventListener('change',()=>{
            const success = uploadIcon.parentElement
            success.style.borderColor = "green"
        })
    })
}


