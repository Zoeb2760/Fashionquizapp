$(document).ready(function() {

    // declaring global variables
    var change = 0;
    var i = 0;
   



    //creating an array to hold the questions and answers
    var ArrayValues = [

        {
            question: "What is this name of this popular nail art?",
            answers: ["French manicure", "Almond style", "Dragonfly"],
            image: ["../img/frenchmanicure.jpg"]


        },


        {
            question: "What is the name of these popular boots from Australia?",
            answers: ["wellies", "snowboots", "Uggs"],
            image: ["img/../../uggs.jpg"]
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
         var Answer= $('input[name="gender"]:checked').val();

            //console.log(Answer);   
        }
    }




    // To show the first question and remove start quiz button 
    $('#mybutton').on('click', (function() {
        $('.top h1').hide();
        $('.top h2').hide();
        $('.middle h2').show();
        $('#mybutton').hide();
        getQuestionsAndAnswers();
    }));



    // to call the function to get the questions, answers and value
     

    $('#next').click(function start() {
        if ($('input:radio:checked').length > 0) {
            getQuestionsAndAnswers();
            var Answer = $('input[id="champs"]:checked').val();
            console.log("Answer= " + Answer);
            change++;
        } else {
            alert("Please choose from the available selection");

        }
    })




    // to close document.ready function
});




