window.addEventListener('load',()=>{
    const loader=document.querySelector('.loadWrapper')


    setTimeout(()=>{
            loader.classList.add('hide_loader')
        },1000)
    loader.addEventListener('transitionend',()=>{


          document.body.removeChild('.loader_container')

    })
})

const btnHideAboutText=document.querySelector('.readMore')
btnHideAboutText.addEventListener('click',(e)=>{
    e.preventDefault();
    let aboutTextToHide=document.querySelector('.about_text span');
    let aboutMeContainer= document.querySelector('.aboutMeWrapper');

    aboutTextToHide.classList.toggle('hideAboutText');
    if(aboutTextToHide.classList.contains('hideAboutText')){
        aboutMeContainer.style='max-height: 40vh;';
        btnHideAboutText.textContent='Read More.....';
    }else{
        btnHideAboutText.textContent='See Less....';
    }
})