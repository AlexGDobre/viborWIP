window.onload=()=>{
    let poh = document.querySelectorAll('#listHeader li');
    console.log(poh)

    for (let i = 0; i < poh.length; i++) {
      let elem = poh[i]
      elem.onmouseout=(e)=>{
        // elem.setAttribute('class','active');
        elem.style.animation='scaleback .3s'
        console.log('works')
      }
    }
}


