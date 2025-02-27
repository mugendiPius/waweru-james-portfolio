window.addEventListener('load',()=>{
    const loader=document.querySelector('.loadWrapper')


    setTimeout(()=>{
            loader.classList.add('hide_loader')
        },1000)
    loader.addEventListener('transitionend',()=>{


          document.body.removeChild('.loader_container')

    })
})