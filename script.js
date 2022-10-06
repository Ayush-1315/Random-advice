const adviceId=document.querySelector('#adv-id');
const advice=document.querySelector('.advice');
const adviceBtn=document.querySelector('#btn');
const serverURL="https://api.adviceslip.com/advice";
function adviceError(error){
    alert('API not available ! ');
    console.log(`Error statement: ${error}`);
}
function getAdvice(){
    fetch(serverURL).then(
        function(response)
        { 
            return response.json();
        }).then(
            function(Advice) 
            {   
                adviceId.innerText=Advice.slip.id;
                advice.innerText=`"${Advice.slip.advice}"`;
            });
}
window.addEventListener('load',getAdvice);
adviceBtn.addEventListener('click',getAdvice);