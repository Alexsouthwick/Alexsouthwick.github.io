
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
var NoteValue = 0
var beatlist = []

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



                if (draggableid == 'C G E B'){
                    song += "cgeb"; 
                    console.log('song: ', song);  
                }

                else if (draggableid=="F G B A"){
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
        alert("Instructions: To begin your song, click one of the rhythms below."
        );
    
    $('.DisneyButton').click(function(){
        Disney_clicked = "clicked";
        if (Disney_clicked == "clicked" && Disney_selected == false && Allegro_selected == false){
            $(".DisneyButton").addClass("ButtonSelected");
            Disney_selected = true;
            Disney_clicked = "notclicked";
            $("#Disney").show();
            alert("Now that you have selected your rhythm, you can begin to chose your notes. Look at the number of black squares above the first box and click the corresponding number in the sidebar.");
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
                  alert(" Now that you have selected your rhythm, you can begin to chose your notes. Look at the number of black squares above the first box and click the corresponding number in the sidebar.");
        }
        if (Allegro_clicked == "clicked" && Allegro_selected == true){
            Allegro_selected = false;
            $("#Allegro").hide();
            $(".AllegroButton").removeClass("ButtonSelected");
        }
    });

    $( "#C" ).mouseenter(function() {
        context = new AudioContext;
        oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.value = 261.63;

        oscillator.connect(context.destination);

        oscillator.start(0);
        oscillator.stop(1);
    });
    $( "#B" ).mouseenter(function() {
        context = new AudioContext;
        oscillator = context.createOscillator();
        oscillator.type = 'square';
        oscillator.frequency.value = 493.88;

        oscillator.connect(context.destination);

        oscillator.start(0);
        oscillator.stop(1);
    });
    function sing(notesequence){
        var audio = new window.AudioContext(),
        position = 0,
        scale = {
            g: 392,
            c: 261.63,
            f: 349.23,
            d: 293.66,
            e: 329.63,
            a: 261.63,
            b: 493.88
        };
        setInterval(play, 1000/4);
        function createOscillator(freq){
            var osc = audio.createOscillator();

            osc.frequency.value = freq;
            osc.type = "square";
            osc.connect(audio.destination);
            osc.start(0);

            setTimeout(function() {
                osc.stop(0);
                osc.disconnect(audio.destination);
            }, 1000 / 4)
        }
        function play() {
            var note = notesequence.charAt(position),
                freq = scale[note];
            position += 1;
            // if(position >= inputvalue.length) {
            //     position = 0;
            // }
            if(freq) {
                createOscillator(freq);
            }
        }
    };
    $("#CE").mouseenter(function(){
        var notesequence = "ce";
        sing(notesequence);
    });
    $("#AF").mouseenter(function(){
        var notesequence = "af";
        sing(notesequence);
    });
    $("#AFG").mouseenter(function(){
        var notesequence = "afg";
        sing(notesequence);
    });
    $("#CED").mouseenter(function(){
        var notesequence = "ced";
        sing(notesequence);
    });
    $("#CGEB").mouseenter(function(){
        var notesequence = "cegb";
        sing(notesequence);
    });
    $("#DEGC").mouseenter(function(){
        var notesequence = "degc";
        sing(notesequence);
    });
    $("#CEGCE").mouseenter(function(){
        var notesequence = "cegce";
        sing(notesequence);
    });
    $("#DAGCA").mouseenter(function(){
        var notesequence = "dagca";
        sing(notesequence);
    });
    $("#CEGCEG").mouseenter(function(){
        var notesequence = "cegceg";
        sing(notesequence);
    });
    $("#FACEFC").mouseenter(function(){
        var notesequence = "facefc";
        sing(notesequence);
    });
    $("#GECACEG").mouseenter(function(){
        var notesequence = "gecaceg";
        sing(notesequence);
    });


    document.getElementById('PlayButton').onclick = function() {
        var audio = new window.AudioContext(),
            position = 0,
            scale = {
                g: 392,
                c: 261.63,
                f: 349.23,
                d: 293.66,
                e: 329.63,
                a: 261.63,
                b: 493.88
            };
            // song = "edcdeee-ddd-eee-edcdeee-cddedc---";

        setInterval(play, 1000 / 4);

        function createOscillator(freq) {
            var osc = audio.createOscillator();

            osc.frequency.value = freq;
            osc.type = "square";
            osc.connect(audio.destination);
            osc.start(0);

            setTimeout(function() {
                osc.stop(0);
                osc.disconnect(audio.destination);
            }, 1000 / 4)
        }

        function play() {
            var note = song.charAt(position),
                freq = scale[note];
            position += 1;
            // if(position >= inputvalue.length) {
            //     position = 0;
            // }
            if(freq) {
                createOscillator(freq);
            }
        }


        $(".measure").each(function( index, element){
            var thisNote = song.substring(index,index);
            if ($(this).is("#QuarterNote")){
                NoteValue = 4;
                beatlist.append("QuarterNote")
            }
            else if ($(this).is("#EighthNote")){
                NoteValue = 8;
            }
            else if ($(this).is("#SixteenthNote")){
                NoteValue = 16;
            }
            else if ($(this).is("#DottedQuarter")){
                NoteValue = 12;
            }
            else if ($(this).is("#WholeNote")){
                NoteValue = 1;
            }
            else if ($(this).is("#HalfNote")){
                NoteValue = 2;
            }

            dict.push({
                key: thisNote,
                value: NoteValue
            });
            // console.log(dict);  
        });
     
    };
    document.getElementById('clear').onclick = function() {
        song = "";
        $(".droppable").removeClass("highlighted");
        $(".droppable h4").text("Drag Here");
    }
    
    $(".OneNote").hide();
    console.log ("element hidden");
    $(".TwoNote").hide();
    $(".ThreeNote").hide();
    $(".FourNote").hide();
    $(".FiveNote").hide();
    $(".SixNote").hide();
    $(".SevenNote").hide();

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
});