$(document).ready(function() {

    // declaring global variables
    var change = 0;
    var i = 0;
    var score= 0;
    
    //var correctAnswer=ArrayValues[change].correctAnswer;
    
   



    //creating an array to hold the questions and answers
    var ArrayValues = [

 {
            question: "What is the name of this style of trousers made popular in the 1970s?",
            answers: ["SKINNY", "FlARES", "STRAIGHT"],
            image: ["../img/flares.jpg"],
            correctAnswer: [1],
            CA:"FLARES"
        }, 

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



//function scores () {
        //if (Answer == ArrayValues[change].correctAnswer) {
          //  (score = score++);}
        //}


    function displayImages() {
        if (change == 0) {
            $(".image").append('<img src="img/flares.jpg" width= "20%" />');
        } else  if (change==1){
            $(".image").append('<img src="img/frenchmanicure.jpg" width= "20%" />');
        } else $(".image").append('<img src="img/uggs.jpg" width= "20%" />');
    }



    function getQuestionsAndAnswers() {
        $('.choices').empty();
        $('.middle h2').empty();
        $('.middle h2').append(ArrayValues[change].question);
        for (i = 0; i < 3; i++) {
            $('.choices').append('<li><input type="radio" name="gender"  id= "champs" value=' + i + '>' + ArrayValues[change].answers[i] + '</li><br>');
            $(".image").empty();
            displayImages();
         //var Answer = $("input:radio[name=gender]:checked").val();
         /*( "input:radio[name=bar]:checked" ).val();*/


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



    // to call the function to get the questions, answers and value
     

    $('#next').click(function start() {
        if ($('input:radio:checked').length > 0) {
            var Answer = $('input[id="champs"]:checked').val();
            
            } else {
            alert("Please choose from the available selection");
            }
            
            console.log(" Answer = " + Answer);
            console.log("correct answer = "+ ArrayValues[change].correctAnswer);
            //scores();
            for (i = 0; i < 3; i++) {
            var correct= ArrayValues[i].CA; }
            if (Answer == ArrayValues[change].correctAnswer) {
            (score++);} else {document.getElementById("ony").innerHTML= "The correct answer is " + correct;
        }       

            console.log("score =  " + score);
            change++;
            getQuestionsAndAnswers();
            

            
            console.log("change =" +change);
            
            
        
        
    })

     
if (score == ArrayValues.length) { 
    document.getElementById("end ").innerHTML = "Your a fashionista!..your score is " + score; 
}



else  { $("end").append = "you have scored  " + score + " out of " + ArrayValues.length;
}    
     
   // to end the game and start again
   /*if (i>3)
    $("#mybutton").show;
    $('#end h2').hide; */



    // to close document.ready function
});



