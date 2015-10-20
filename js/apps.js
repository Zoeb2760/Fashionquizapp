$(document).ready(function() {

    // declaring global variables
    var change = 0;
    var i = 0;
    var score = 0;

    //creating an array to hold the questions and answers
    var ArrayValues = [

        {
            question: "What is the name of this style of trousers made popular in the 1970s?",
            answers: ["SKINNY", "FlARES", "STRAIGHT"],
            image: ["../img/flares.jpg"],
            correctAnswer: [1],
            CA: "FLARES"
        },

        {
            question: "What is this name of this popular nail art?",
            answers: ["FRENCH MANICURE", "ALMOND STYLE", "DRAGONFLY"],
            image: ["../img/frenchmanicure.jpg"],
            correctAnswer: [0],
            CA: "FRENCH MANICURE"

        },


        {
            question: "What is the name of these popular boots from Australia?",
            answers: ["WELLIES", "SNOWBOOTS", "UGGS"],
            image: ["img/../../uggs.jpg"],
            correctAnswer: [2],
            CA: "UGGS"
        },
    ];


    // decalring functions

    function startagain() {
        $('.top h1').show();
        $('.middle h2').hide();
        $('.choices').empty();
        $("#next").hide();
        $("#button2").show();

    }



    function displayImages() {
        if (change == 0) {
            $(".image").append('<img src="img/flares.jpg" width= "20%" />');
        } else if (change == 1) {
            $(".image").append('<img src="img/frenchmanicure.jpg" width= "20%" />');
        } else $(".image").append('<img src="img/uggs.jpg" width= "20%" />');
    }




    function getQuestionsAndAnswers() {

        if (ArrayValues.length + 1 == change + 1) {
            startagain();
        } else {
            $('.choices').empty();
            $('.middle h2').empty();
            $('.middle h2').append(ArrayValues[change].question);
            for (i = 0; i < 3; i++) {
                $('.choices').append('<li><input type="radio" name="gender"  id= "champs" value=' + i + '>' + ArrayValues[change].answers[i] + '</li><br>');
                $(".image").empty();
                displayImages();

            }
        }
    }




    // To show the first question and remove start quiz button 
    $('#mybutton').on('click', (function() {
        //location.reload ();
        $('.top h1').hide();
        $('.top h2').hide();
        $('.middle h2').show();
        $('#mybutton').hide();


    }));

    // to restart the quiz
    $('#button2').on('click', (function() {
        location.reload();
    }))
    


    $('#next').click(function start() {
          // to check which selection has been made

        if ($('input:radio:checked').length > 0) {
            var Answer = $('input[id="champs"]:checked').val();
            console.log(" Answer = " + Answer);
            console.log("correct answer = " + ArrayValues[change].correctAnswer);
            // to compare the selection with the correct answer
            var correct = ArrayValues[change].CA;
            if (Answer == ArrayValues[change].correctAnswer) {

                (score++);
                document.getElementById("ony").innerHTML = "Correct your score is " + score + " / " + ArrayValues.length;
            } else {
                document.getElementById("ony").innerHTML = "The correct answer was " + correct + " you have scored <br> " + score + " / " + ArrayValues.length;
            }
            console.log("correct statement= " + correct);
            console.log("score =  " + score);
            change++;
            getQuestionsAndAnswers();
            console.log("change =" + change);
            console.log("Arrayvalues.length " + ArrayValues.length);
            if (score == ArrayValues.length) {

                document.getElementById("end").innerHTML = "<b>YOU ARE A FASHIONISTA..you have a perfect score!</b>";
            }

        } else {
            alert("Please choose from the available selection");
        }




    })



    // to close document.ready function
});