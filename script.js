$(".draggable").draggable({
    helper: 'clone'
});

$("#droppable").droppable({
    drop: function(event, ui) {
        $(this).append(ui.draggable.clone(true));
    }
});

var highlight=false;
var combined_width= 0;
var song= "";
var One_clicked = "notclicked";
var Two_clicked = "notclicked";
var Three_clicked = "notclicked";
var Four_clicked = "notclicked";
var Five_clicked = "notclicked";
var Six_clicked = "notclicked";
var Seven_clicked = "notclicked";
var One_selected = false;
var Two_selected = false;
var Three_selected = false;
var Four_selected = false;
var Five_selected = false;
var Six_selected = false;
var Seven_selected = false;
var BeatsButton_selected = false;
var BeatsButton_clicked = "notclicked";
var Disney_selected = false;
var Allegro_selected = false;
var Custom_selected = false;
var Disney_clicked = "notclicked";
var Allegro_clicked = "notclicked";
var Custom_clicked = "notclicked";
var NoteValue = 0;
var position = 0;
var custombeatstring = "";

$(document).ready(function() {
    var dict = [];

    console.log("something should happen1")

    $(".draggable").draggable({
        helper: 'clone'
    });

    $(".droppable").droppable({
         drop: function(event, ui) {
            $(this)
   
             .addClass("highlighted")
             highlight= true;
             console.log(highlight);
             console.log("something should be happening");
             if (highlight == true) {
                var droppableid= $(this).attr("id");
                var draggableid= ui.draggable.attr("id");
                console.log(droppableid);
                alert("You have just created a measure of a song! Keep dragging and dropping blocks with the same number of notes as the black squares above. Once you are done you can play your brand new song! If you want to clear your whole song, click the clear button.")
                alert("Disclaimer: Due to problems with the API we used, the play song button can only be used 6 times. We are working on a fix for this.")
                alert("Once you have read all of the intructions, click the box that says 'Prevent this page from creating additional dialogs'. Have fun creating music with Cadenza!")
                if (droppableid == "block1"){
                    $("#block1 h4").text(draggableid);
                }
                if (droppableid == "block2"){
                    $("#block2 h4").text(draggableid);
                }
                if (droppableid == "block3"){
                    $("#block3 h4").text(draggableid);
                }
                if (droppableid == "block4"){
                    $("#block4 h4").text(draggableid);
                }
                if (droppableid == "block5"){
                    $("#block5 h4").text(draggableid);
                }
                if (droppableid == "block6"){
                    $("#block6 h4").text(draggableid);
                }
                if (droppableid == "block7"){
                    $("#block7 h4").text(draggableid);
                }
                if (droppableid == "block8"){
                    $("#block8 h4").text(draggableid);
                }
                if (droppableid == "block9"){
                    $("#block9 h4").text(draggableid);
                }
                if (droppableid == "block10"){
                    $("#block10 h4").text(draggableid);
                }
                if (droppableid == "block11"){
                    $("#block11 h4").text(draggableid);
                }
                if (droppableid == "block12"){
                    $("#block12 h4").text(draggableid);
                }


                if (draggableid=="C"){
                 song += "c"; 
                 console.log(song);  
                 }
                 else if (draggableid=="B"){
                 song += "b"; 
                 console.log(song);  
                 }
                 else if (draggableid=="G"){
                 song += "g"; 
                 console.log(song);  
                 }
                 else if (draggableid=="D"){
                 song += "d"; 
                 console.log(song);  
                 }
                 else if (draggableid=="E"){
                 song += "e"; 
                 console.log(song);  
                 }
                 else if (draggableid=="A"){
                 song += "a"; 
                 console.log(song);  
                 }

                 else if (draggableid=="C E"){
                 song += "ce"; 
                 console.log(song);  
                 }
                 else if (draggableid=="A F"){
                 song += "af"; 
                 console.log(song);  
                 }

                 else if (draggableid=="E G"){
                 song += "eg"; 
                 console.log(song);  
                 }
                 else if (draggableid=="F B"){
                 song += "fb"; 
                 console.log(song);  
                 }
                 else if (draggableid=="A F G"){

                 song += "afg"; 
                 console.log(song);  
                 }
                 else if (draggableid=="C E D"){
                 song += "ced"; 
                 console.log(song);  
                 }

                 else if (draggableid == 'C G E B'){
                    song += "cgeb"; 
                    console.log('song: ', song);  
                }

                else if (draggableid=="F G B A"){
                    song += "fgba"; 
                    console.log(song);  
                }
                 else if (draggableid=="C E G C"){
                 song += "cegc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="D E G C"){
                 song += "degc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="C E G C E"){
                 song += "cegce"; 
                 console.log(song);  
                 }
                 else if (draggableid=="D A G C A"){
                 song += "dagca"; 
                 console.log(song);  
                 }

                 else if (draggableid=="F B A C E"){
                 song += "fbace"; 
                 console.log(song);  
                 }
                 else if (draggableid=="A D F G C"){
                 song += "adfgc"; 
                 console.log(song);  

                 song += "cegceg"; 
                 console.log(song);  
                 }
                 else if (draggableid=="F A C E F C"){
                 song += "facefc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="G E C A C E G"){
                 song += "gecaceg"; 
                 console.log(song);  
                 }

                else if (draggableid=="A D G B C G E"){
                 song += "adgbcge"; 
                 console.log(song);  
                 }
                else
                    {console.log("else happened")}
            }
            }
    });
    $(".draggable2").draggable({
        helper: 'clone'
    });

    $(".droppable2").droppable({
         drop: function(event, ui) {
            $(this)

            // $(ui.draggable).detach().css({top:0, left: 0}).appendTo(this);

             .addClass("highlighted")
             highlight= true;
             console.log(highlight);
             console.log("something should be happening");
             if (highlight == true) {
                // var width= $(".draggable").width();
                // $("#blocks_list").append("<li> block </li>");
                // console.log($("#blocks_list li").length);
                // combined_width= ((width) * ($("#blocks_list li").length));
                // console.log(combined_width);
                var droppableid= $(this).attr("id");
                var draggableid= ui.draggable.attr("id");
                alert("You have just made a rhythm for one measure. Now to add notes! Click the number in the sidebar that corresponds with the number of black rectangles on the block that you dragged for the rhythm.")
            }

            if (draggableid == "-- -- -- --"){
                custombeatstring += "qqqq";
            }
            else if (draggableid == "--------"){
                custombeatstring += "w";
            }
            else if (draggableid == "---- ----"){
                custombeatstring += "hh";
            }
            else if (draggableid == "---- - - --"){
                custombeatstring += "heeq";
            }
            else if (draggableid == "-- - - - -- --"){
                custombeatstring += "qeeeqq";
            }
            else if (draggableid == "---- -- --"){
                custombeatstring += "hqq";
            }

            if (droppableid == "beat1"){
                $(this).addClass ("beatsDragged");
                $("#beat1 h5").text(draggableid);
            }
            if (droppableid == "beat2"){
                $("#beat2 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }
            if (droppableid == "beat3"){
                $("#beat3 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }
            if (droppableid == "beat4"){
                $("#beat4 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat5"){
                $("#beat5 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat6"){
                $("#beat6 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat7"){
                $("#beat7 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat8"){
                $("#beat8 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat9"){
                $("#beat9 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat10"){
                $("#beat10 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat11"){
                $("#beat11 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }

            if (droppableid == "beat12"){
                $("#beat12 h5").text(draggableid);
                $(this).addClass ("beatsDragged");
            }



        }
    });

    $("#Disney").hide();
    $("#Allegro").hide();
    $("#Custom").hide();

        alert("Instructions: To begin your song, click one of the rhythms below. You can chose one of the preset rhythms or make your own measure by measure."
        );
    
    $('.DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $(".DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
            $("#BeatsButton").hide();
            alert("Now that you have selected your rhythm, you can begin to chose your notes. Look at the number of black squares above the first box and click the corresponding number in the sidebar.");
        }

        if (Disney_clicked == "clicked" && Disney_selected == true){
            Disney_selected = false;
            $("#Disney").hide();
            $("#BeatsButton").show();
            $(".DisneyButton").removeClass("ButtonSelected");
        }
    });

    $('.AllegroButton').click(function(){
        var Allegro_clicked = "clicked";
        if (Allegro_clicked == "clicked" && Allegro_selected == false && Disney_selected == false){
            $(".AllegroButton").addClass("ButtonSelected");
            Allegro_selected = true;
            Allegro_clicked = "notclicked";
            $("#Allegro").show();
            $("#BeatsButton").hide();
                  alert(" Now that you have selected your rhythm, you can begin to chose your notes. Look at the number of black squares above the first box and click the corresponding number in the sidebar.");
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
            $("#BeatsButton").show();
            $(".AllegroButton").removeClass("ButtonSelected");
        }
    });
    $('.CustomButton').click(function(){
        var Custom_clicked = "clicked";
        if (Custom_clicked == "clicked" && Custom_selected == false && Allegro_selected == false && Disney_selected == false){
            $(".CustomButton").addClass("CustomSelected");
            Custom_selected = true;
            Custom_clicked = "notclicked";
            $("#Custom").show();

            alert("To begin creating your own rhythm, click the 'Beat' button in the sidebar.")
        }
        if (Custom_clicked == "clicked" && Custom_selected == true){
            Custom_selected = false;
            $("#Custom").hide();
            $(".CustomButton").removeClass("CustomSelected");
        }
    })



    // $( "#C" ).mouseenter(function() {
    //     var conductor = new BandJS();
    //     conductor.setTimeSignature(4,4);
    //     var piano = conductor.createInstrument();
    //     piano.note('quarter', 'C4');
    //     var player = conductor.finish();
    //     player.play();
    // });

    // $( "#B" ).mouseenter(function() {
    //     var conductor = new BandJS();
    //     conductor.setTimeSignature(4,4);
    //     var piano = conductor.createInstrument();
    //     piano.note('quarter', 'B4');
    //     var player = conductor.finish();
    //     player.play();
    // });


    $("#CE").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        var player = conductor.finish();
        player.play();
    });

    $("#AF").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'A4');
        piano.note('quarter', 'F4');
        var player = conductor.finish();
        player.play();
    });

    $("#AFG").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'A4');
        piano.note('quarter', 'F4');
        piano.note('quarter', 'G4');
        var player = conductor.finish();
        player.play();
    });

    $("#CED").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'D4');
        var player = conductor.finish();
        player.play();
    });

    $("#CGEB").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        piano.note('quarter', 'G4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'B4');
        var player = conductor.finish();
        player.play();
    });

    $("#DEGC").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'D4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'G4');
        piano.note('quarter', 'C4');
        var player = conductor.finish();
        player.play();
    });

    $("#CEGCE").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'G4');
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        var player = conductor.finish();
        player.play();
    });

    $("#DAGCA").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'D4');
        piano.note('quarter', 'A4');
        piano.note('quarter', 'G4');
        piano.note('quarter', 'C4');
        piano.note('quarter', 'A4');
        var player = conductor.finish();
        player.play();
    });

    $("#CEGCEG").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'G4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'G4');
        var player = conductor.finish();
        player.play();
    });
    $("#FACEFC").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'F4');
        piano.note('quarter', 'A4');
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'F4');
        piano.note('quarter', 'C4');
        var player = conductor.finish();
        player.play();
    });

    $("#GECACEG").mouseenter(function(){
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'G4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'C4');
        piano.note('quarter', 'A4');
        piano.note('quarter', 'C4');
        piano.note('quarter', 'E4');
        piano.note('quarter', 'G4');
        var player = conductor.finish();
        player.play();
    });



    document.getElementById('PlayButton').onclick = function() {
        if (Disney_selected == true){
            beatstring = "qeqeqwqeqeqhhqeqeqqqqqqqqeedeqqqeqeqwqeqeqhh";
        };
        if (Allegro_selected == true){
            beatstring = "qqqqeeeeqqqqqqeeeehqqqqqqqqqqqqqqqhqqqqeeeeqqqqqqeeeeh";
        };
        if (Custom_selected == true){
            beatstring = custombeatstring;
            console.log(beatstring);
        };
        var conductor = new BandJS();
        var q = "quarter";
        var e ="eighth";
        var w= "whole";
        var h= "half";
        var s= "sixteenth";
        var d= "dottedQuarter";

        var g = "G4";
        var c = "C4";
        var e = "E4";
        var a = "A4";
        var b = "B4";
        var d = "D4";
        var f = "F4";

        conductor.setTimeSignature(4,4);
        conductor.setMasterVolume(400);
        var piano = conductor.createInstrument();
        for (i = 0; i< song.length; i++){

            console.log(beatstring);
            var note = song.charAt(i);
            if (note == "c"){
                note = "C4";
            }
            if (note == "g"){
                note = "G4";
            }
            if (note == "e"){
                note = "E4";
            }
            if (note == "a"){
                note = "A4";
            }
            if (note == "b"){
                note = "B4";
            }
            if (note == "d"){
                note = "D4";
            }
            if (note == "f"){
                note = "F4";
            }
            var notelength = beatstring.charAt(i);
            if (notelength == "q"){
                notelength = "quarter";
            }
            if (notelength == "e"){
                notelength = "eighth";
            }
            if (notelength == "h"){
                notelength = "half";
            }
            if (notelength == "w"){
                notelength = "whole";
            }
            if (notelength == "s"){
                notelength = "sixteenth";
            }
            if (notelength == "d"){
                notelength = "dottedQuarter";
            }
            piano.note(notelength, note);
        }
        var player = conductor.finish();
        player.play();
    }
    document.getElementById('clear').onclick = function() {
        song = "";
        beatstring = "";
        $(".droppable").removeClass("highlighted");
        $(".droppable h4").text("Drag Here");
        $(".droppable2").removeClass("highlighted");
        $(".droppable2").removeClass("beatsDragged");
        $(".droppable2 h5").text("Drag Beats Here");
    }
    
    $(".OneNote").hide();
    $(".TwoNote").hide();
    $(".ThreeNote").hide();
    $(".FourNote").hide();
    $(".FiveNote").hide();
    $(".SixNote").hide();
    $(".SevenNote").hide();
    $(".Beats").hide();

    $('#One').click(function(){
        var One_clicked = "clicked";
        if (One_clicked == "clicked" && One_selected == false){
            first = true;
            $("#One").addClass("NoteSelectionSelected");
            One_selected = true;
            One_clicked = "notclicked";
            $(".OneNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order."); 
        }
        if (One_clicked == "clicked" && One_selected == true){
            One_selected = false;
            first= false;
            One_clicked = "notclicked";
            $(".OneNote").hide();
            $("#One").removeClass("NoteSelectionSelected");
        }

    });
    $('#Two').click(function(){
        var Two_clicked = "clicked";
        if (Two_clicked == "clicked" && Two_selected == false){
            $("#Two").addClass("NoteSelectionSelected");
            Two_selected = true;
            Two_clicked = "notclicked";
            $(".TwoNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Two_clicked == "clicked" && Two_selected == true){
            Two_selected = false;
            Two_clicked = "notclicked";
            $(".TwoNote").hide();
            $("#Two").removeClass("NoteSelectionSelected");
        }
    });
    $('#Three').click(function(){
        var Three_clicked = "clicked";
        if (Three_clicked == "clicked" && Three_selected == false){
            $("#Three").addClass("NoteSelectionSelected");
            Three_selected = true;
            Three_clicked = "notclicked";
            $(".ThreeNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Three_clicked == "clicked" && Three_selected == true){
            Three_selected = false;
            Three_clicked = "notclicked";
            $(".ThreeNote").hide();
            $("#Three").removeClass("NoteSelectionSelected");
        }
    });    
    $('#Four').click(function(){
        var Four_clicked = "clicked";
        if (Four_clicked == "clicked" && Four_selected == false){
            $("#Four").addClass("NoteSelectionSelected");
            Four_selected = true;
            Four_clicked = "notclicked";
            $(".FourNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Four_clicked == "clicked" && Four_selected == true){
            Four_selected = false;
            Four_clicked = "notclicked";
            $(".FourNote").hide();
            $("#Four").removeClass("NoteSelectionSelected");
        }
    });    
    $('#Five').click(function(){
        var Five_clicked = "clicked";
        if (Five_clicked == "clicked" && Five_selected == false){
            $("#Five").addClass("NoteSelectionSelected");
            Five_selected = true;
            Five_clicked = "notclicked";
            $(".FiveNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Five_clicked == "clicked" && Five_selected == true){
            Five_selected = false;
            Five_clicked = "notclicked";
            $(".FiveNote").hide();
            $("#Five").removeClass("NoteSelectionSelected");
        }
    });
    $('#Six').click(function(){
        var Six_clicked = "clicked";
        if (Six_clicked == "clicked" && Six_selected == false){
            $("#Six").addClass("NoteSelectionSelected");
            Six_selected = true;
            Six_clicked = "notclicked";
            $(".SixNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Six_clicked == "clicked" && Six_selected == true){
            Six_selected = false;
            Six_clicked = "notclicked";
            $(".SixNote").hide();
            $("#Six").removeClass("NoteSelectionSelected");
        }
    });
    $('#Seven').click(function(){
        var Seven_clicked = "clicked";
        if (Seven_clicked == "clicked" && Seven_selected == false){
            $("#Seven").addClass("NoteSelectionSelected");
            Seven_selected = true;
            Seven_clicked = "notclicked";
            $(".SevenNote").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (Seven_clicked == "clicked" && Seven_selected == true){
            Seven_selected = false;
            Seven_clicked = "notclicked";
            $(".SevenNote").hide();
            $("#Seven").removeClass("NoteSelectionSelected");
        }
    });
    $('#BeatsButton').click(function(){
        var BeatsButton_clicked = "clicked";
        if (BeatsButton_clicked == "clicked" && BeatsButton_selected == false){
            $("#BeatsButton").addClass("NoteSelectionSelected");
            BeatsButton_selected = true;
            BeatsButton_clicked = "notclicked";
            $(".Beats").show();
            alert("Drag and drop one of the blocks into the first box. Please place your blocks in order.");
        }
        if (BeatsButton_clicked == "clicked" && BeatsButton_selected == true){
            BeatsButton_selected = false;
            BeatsButton_clicked = "notclicked";
            $(".Beats").hide();
            $("#BeatsButton").removeClass("NoteSelectionSelected");
        }
    });
   
});