const uploadIcon = document.getElementById('upload-icon')
const wrapper = document.getElementById('upload-container')


uploadIcon.addEventListener('click', ()=>{
    console.log(wrapper)

    wrapper.firstElementChild.click()
    wrapper.firstElementChild.addEventListener('change',()=>{
        const success = uploadIcon.parentElement
        success.style.borderColor = "green"
    })
})