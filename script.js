
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
var Disney_selected = false;
var Allegro_selected = false;
var Disney_clicked = "notclicked";
var Allegro_clicked = "notclicked";
var NoteValue = 0;
var beatlist = [["blah", 0]];
var position = 0;

$(document).ready(function() {

    var dict = [];

    console.log("something should happen1")

    $(".draggable").draggable({
        helper: 'clone'
    });

    $(".droppable").droppable({
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
                console.log(droppableid);
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



                if (draggableid == 'CGEB'){
                    song += "cgeb"; 
                    console.log('song: ', song);  
                }

                else if (draggableid=="FGBA"){
                    song += "fgba"; 
                    console.log(song);  
                }

                 else if (draggableid=="C"){
                 song += "c"; 
                 console.log(song);  
                 }
                 else if (draggableid=="B"){
                 song += "b"; 
                 console.log(song);  
                 }
                 else if (draggableid=="CE"){
                 song += "ce"; 
                 console.log(song);  
                 }
                 else if (draggableid=="AF"){
                 song += "af"; 
                 console.log(song);  
                 }
                 else if (draggableid=="AFG"){
                 song += "afg"; 
                 console.log(song);  
                 }
                 else if (draggableid=="CED"){
                 song += "ced"; 
                 console.log(song);  
                 }
                 else if (draggableid=="CEGC"){
                 song += "cegc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="DEGC"){
                 song += "degc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="CEGCE"){
                 song += "cegce"; 
                 console.log(song);  
                 }
                 else if (draggableid=="DAGCA"){
                 song += "dagca"; 
                 console.log(song);  
                 }
                 else if (draggableid=="CEGCEG"){
                 song += "cegceg"; 
                 console.log(song);  
                 }
                 else if (draggableid=="FACEFC"){
                 song += "facefc"; 
                 console.log(song);  
                 }
                 else if (draggableid=="GECACEG"){
                 song += "gecaceg"; 
                 console.log(song);  
                 }

                else if (draggableid=="ADGBCGE"){
                 song += "adgbcge"; 
                 console.log(song);  
                 }
                else
                    {console.log("else happened")}
            }
            }
    });

    $("#Disney").hide();
    $("#Allegro").hide();
    
    $('.DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $(".DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
        }

        if (Disney_clicked == "clicked" && Disney_selected == true){
            Disney_selected = false;
            $("#Disney").hide();
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
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
            $(".AllegroButton").removeClass("ButtonSelected");
        }
    });

    $( "#C" ).mouseenter(function() {
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'C4');
        var player = conductor.finish();
        player.play();
    });

    $( "#B" ).mouseenter(function() {
        var conductor = new BandJS();
        conductor.setTimeSignature(4,4);
        var piano = conductor.createInstrument();
        piano.note('quarter', 'B4');
        var player = conductor.finish();
        player.play();
    });

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
        }
        if (Allegro_selected == true){
        beatstring = "qqqqeeeeqqqqqqeeeehqqqqqqqqqqqqqqqhqqqqeeeeqqqqqqeeeeh";
        }
        var conductor = new BandJS();
        var q = "quarter";
        var e ="eighth";

        var g = "G4";
        var c = "C4";
        var e = "E4";
        var a = "A4";
        var b = "B4";
        var d = "D4";
        var f = "F4";

        conductor.setTimeSignature(4,4);
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
        $(".droppable").removeClass("highlighted");
        $(".droppable h4").text("Drag Here");
    }
    
    $(".OneNote").hide();
    $(".TwoNote").hide();
    $(".ThreeNote").hide();
    $(".FourNote").hide();
    $(".FiveNote").hide();
    $(".SixNote").hide();
    $(".SevenNote").hide();

    $('#One').click(function(){
        var One_clicked = "clicked";
        if (One_clicked == "clicked" && One_selected == false){
            $("#One").addClass("NoteSelectionSelected");
            One_selected = true;
            One_clicked = "notclicked";
            $(".OneNote").show();
        }
        if (One_clicked == "clicked" && One_selected == true){
            One_selected = false;
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
        }
        if (Seven_clicked == "clicked" && Seven_selected == true){
            Seven_selected = false;
            Seven_clicked = "notclicked";
            $(".SevenNote").hide();
            $("#Seven").removeClass("NoteSelectionSelected");
        }
    });
});