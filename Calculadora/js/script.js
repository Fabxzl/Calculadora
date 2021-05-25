let body = document.querySelector('body');
let result = document.querySelector('#result');

let dark_mode_btn = document.querySelector('.dark_mode_btn');
let limpar = document.querySelector('#limpar');
let history = document.querySelector('#history');
let igual = document.querySelector('#igual');
let delete_single_num = document.querySelector('#delete_single_num');

let Normal_btn = document.querySelectorAll('#Normal_btn');


let initial_value = "";

Normal_btn.forEach((Normal_btn, index)=>{
  Normal_btn.addEventListener('click', function(){
      let text = this.innerHTML;
      initial_value += text; 
      result.innerHTML = initial_value;
    });
});

/*equal para ação do botão*/
igual.addEventListener('click', function(){
  if (result.innerHTML != "") {
    history.innerHTML = result.innerHTML;
    result.innerHTML = eval(result.innerHTML);
    initial_value = eval(result.innerHTML);
  }else{
    alert('please enter any Number');
  }
});


/*dark_mode*/
let dark_mode_status = false;
dark_mode_btn.addEventListener('click', function(){
  body.classList.toggle('dark_mode_active');
  if (dark_mode_status == false) {
    this.innerHTML = '<i class="fas fa-sun"></i>';
    dark_mode_status = true;
  }else{
    this.innerHTML = '<i class="fas fa-moon"></i>';
     dark_mode_status = false;
  }
});


/*Limpar todos os números*/
limpar.addEventListener('click', function(){
  result.innerHTML = "";
  initial_value = "";
});

/*deletar número único*/
delete_single_num.addEventListener('click', function(){
  result.innerHTML = result.innerHTML.substring(0,result.innerHTML.length-1);
  initial_value = result.innerHTML;
});