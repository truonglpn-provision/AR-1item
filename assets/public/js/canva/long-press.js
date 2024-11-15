function long_press(el,nf,lf,lef,sec){
    let longclick = false;
    let longtap = false;
    let touch = false;
    let timer;
    el.addEventListener('touchstart',()=>{
      touch = true;
      longtap = false;
      timer = setTimeout(() => {
        longtap = true;
        lf();
      }, sec);
    })
    el.addEventListener('touchend',()=>{
      if(!longtap){
        clearTimeout(timer);
        nf();
      }else{
        touch = false;
        lef();
      }
    })
    
    el.addEventListener('mousedown',()=>{
      if(touch) return;
      longclick = false;
      timer = setTimeout(() => {
        longclick = true;
        lf();
      }, sec);
    })
    el.addEventListener('click',()=>{
      if(touch){
        touch = false;
        return;
      }
      if(!longclick){
        clearTimeout(timer);
        nf();
      }
    });
  }