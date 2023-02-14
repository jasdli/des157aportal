(function(){
    'user strict';
    console.log("reading.js");
    const myForm = document.querySelector('#myform');
    const madlib = document.querySelector('article');
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const one = document.querySelector('#one').value;
        const two = document.querySelector('#two').value;
        const three = document.querySelector('#three').value;
        const four = document.querySelector('#four').value;
        const five = document.querySelector('#five').value;
        const six = document.querySelector('#six').value;
        const seven = document.querySelector('#seven').value;
        const eight = document.querySelector('#eight').value;
        const nine = document.querySelector('#nine').value;
        const ten = document.querySelector('#ten').value;
      

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

        else if(six == ''){
         myText = "Please complete the form"
         document.querySelector('#six').focus();
        }
        else if(seven == ''){
         myText = "Please complete the form"
         document.querySelector('#seven').focus();
         }

        else if(eight == ''){
           myText = "Please complete the form"
            document.querySelector('#eight').focus();
        }
        else if(nine == ''){
            myText = "Please complete the form"
            document.querySelector('#nine').focus();
        }
        else if(ten == ''){
            myText = "Please complete the form"
            document.querySelector('#ten').focus();
        }
        else{
            myText = `Hey ${one}, I am hamster Jojo! Starting from last month, I escaped from home and went to traveling! I need a break from being your pet! During the journey, I met many new${two} and went to the ${three} with them. The ${three} is very ${four}. I also ${five} the ${six} on the trip. It is so much fun! Tomorrow, I am going to ${seven} a ${eight} with my ${nine}. 
            Wish you were here, Your ${ten} Jojo`;
        }
    
        madlib.innerHTML =myText;
        madlib.className = "showing";
        

    })
    const sections = document.querySelectorAll('section');
    document.querySelector('submit').addEventListener('click', function(){
        sections[0].className = "form";

    });
    document.querySelector('start').addEventListener('click', function(){
        sections[1].className= "frontpage";
    });
})();