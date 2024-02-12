

// console.log(pics)

var selOption = document.querySelector('.sectionOptions6')

selOption.addEventListener('click', (e)=>{
    var selBtn = (e.target.classList[1])
    // console.log(selBtn)
    var pics = document.querySelectorAll('.imgBox')
    if (selBtn == undefined){
        console.log(' ')
    }else{
        for (let i=0;i<=pics.length;i++){
            if(pics[i].classList.contains(selBtn)){
                pics[i].style.display='block'
            }else{
                pics[i].style.display='none'
            }
        }

    }
    
})