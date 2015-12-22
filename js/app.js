$(document).ready(function() {

    // declaring global variables
    var change = 0;
    var i = 0;
    var score= 0;
    
    
    
   



    //creating an array to hold the questions and answers
    var ArrayValues = [


        {
            question: "What is this name of this popular nail art?",
            answers: ["French manicure", "Almond style", "Dragonfly"],
            image: ["../img/frenchmanicure.jpg"],
            correctAnswer: [0],
            CA: "French manicure"

        },


        {
            question: "What is the name of these popular boots from Australia?",
            answers: ["wellies", "snowboots", "Uggs"],
            image: ["img/../../uggs.jpg"],
            correctAnswer: [2],
            CA:"Uggs"
        },
    ];






    function displayImages() {
        if (change == 0) {
            $(".image").append('<img src="img/frenchmanicure.jpg" width= "20%" />');
        } else {
            $(".image").append('<img src="img/uggs.jpg" width= "20%" />');
        }
    }



    function getQuestionsAndAnswers() {
        $('.choices').empty();
        $('.middle h2').empty();
        $('.middle h2').append(ArrayValues[change].question);
        for (i = 0; i < 3; i++) {
            $('.choices').append('<li><input type="radio" name="gender"  id= "champs" value=' + i + '>' + ArrayValues[change].answers[i] + '</li><br>');
            $(".image").empty();
            displayImages();
         

            /*console.log(Answer);*/   
        }
    }




    // To show the first question and remove start quiz button 
    $('#mybutton').on('click', (function() {
        $('.top h1').hide();
        $('.top h2').hide();
        $('.middle h2').show();
        $('#mybutton').hide();
       

    }));

    if (change == 0) { (CA = "FlARES");
     correctAnswer= 1;
     }



    // to call the function to get the questions, answers and value
     

    $('#next').click(function start() {
        $("#end h2").hide;
        if ($('input:radio:checked').length > 0) {
            var Answer = $('input[id="champs"]:checked').val();
            
            } else {
            alert("Please choose from the available selection");
            }
            
            console.log(" Answer = " + Answer);
            console.log(ArrayValues[change].correctAnswer);
            //scores();
            var correct= ArrayValues[i].CA;
            if (Answer == ArrayValues[change].correctAnswer) {
            (score++);} else {document.getElementById("ony").innerHTML= "The correct answer is " + correct;
        }       

            console.log("score =  " + score);
            getQuestionsAndAnswers();
            

            change++;
            console.log("change =" +change);
            if (score == ArrayValues.length) { 
    document.getElementById("end").innerHTML = "Your a fashionista!..your score is " + score; 
}



else  { $("#end h2").append = "Your score is  " + score + " \ " + ArrayValues.length;
}    
            
            
        
        
    })

     

     
   // to end the game and start again
   if (i>3)
    $("#mybutton").show;
    $('#end h2').hide;



    // to close document.ready function
});




