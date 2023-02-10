(function(){
    'user strict';
    console.log("reading.js");
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('#madlib');
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const one = document.querySelector('#one').value;
        const two = document.querySelector('#two').value;
        const three = document.querySelector('#three').value;
        const four = document.querySelector('#four').value;
        const five = document.querySelector('#five').value;
      

        let myText;

        if(one == ''){
            myText = "Please complete the form"
            document.querySelector('#one').focus();
        }
        else if(two == ''){
            myText = "Please complete the form"
            document.querySelector('#two').focus();
        }
        else if(three == ''){
            myText = "Please complete the form"
            document.querySelector('#three').focus();
        }
        else if(four == ''){
            myText = "Please complete the form"
            document.querySelector('#four').focus();
        }
        else if(five == ''){
            myText = "Please complete the form"
            document.querySelector('#five').focus();
        }
        else{
            myText = `Hey ${one}, I am hamster Jojo! Starting from last month, I escaped from home and went to traveling! I need a break from being your pet! During the journey, I ${two}. The ${three}. I also ${four} on the trip. It was so much fun!
            Wish you were here, Your ${five} Jojo`;
        }
        madlib.innerHTML =myText;
        

    })
})();