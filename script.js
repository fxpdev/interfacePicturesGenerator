var currentDept = 2;
var source = "";
var c = document.getElementById("myCanvas");
var empty = false;

// Unload warning
window.onbeforeunload = function () {
    return "כל הנתונים ייאבדו. האם ברצונך להמשיך?";
};
window.onunload = function () {
    document.getElementById('things').reset();
}
$(document).ready(function () {
    //=====================================================
    // Hide elements
    $('#loading').hide();
    $("#Finale").hide();
    $("#preview").hide();
    $('#imageR').css("border", "none");
    $('#imageR').hide();
    $('#pre').hide();
    $('#selectdeptDiv').hide();
    $('#selectdeptDiv2').hide();
    $('#submit').hide();
    $('#submitWork').hide();

    //$('#gaming_label').on('click', function () {
    //    document.getElementsByName('dept')[0].checked = true;
    //    showButton();
    //    empty = false;
    //})
    //$('#gaming_trailers_label').on('click', function () {
    //    document.getElementsByName('dept')[1].checked = true;
    //    showButton();
    //    empty = false;
    //})
    $('#empty_label').on('click', function () {
        document.getElementsByName('dept')[0].checked = true;
        showButton();
        empty = true;
    })
    $('#tech_label').on('click', function () {
        document.getElementsByName('dept')[1].checked = true;
        showButton();
        empty = false;
    })
    //$('#movies_label').on('click', function () {
    //    document.getElementsByName('dept')[3].checked = true;
    //    showButton();
    //    empty = false;
    //})
    //$('#movies_gaming_label').on('click', function () {
    //    document.getElementsByName('dept')[4].checked = true;
    //    showButton();
    //    empty = false;
    //})
//change [3] to [5] when movies are back
    
    //$('#news_label').on('click', function () {
    //    document.getElementsByName('dept')[3].checked = true;
    //    showButton();
    //})

    $('input:radio[name="dept"]').change(
    function () {
        showButton();
    });
});
function showButton() {
    $('#submit').fadeIn("slow");
}

//copy string
function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = { position: 'absolute', left: '-9999px' };
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

function checkIMG() {
    var url = document.getElementById("url").value;
    var valid = ValidURL(url);
    if (valid)
    {
        document.getElementById("url").style.border = "solid green";
    }
    else {
        document.getElementById("url").style.border = "solid red";
    }
}

//Check if its a mobile noob
function detectmob() {
    var check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    if (check) {
        alert("שימו לב! המחולל אינו מותאם למובייל. היכנסו דרך המחשב לתצוגה מיטבית.")
    }
    return check;
}

function ValidURL(url) {
    var regexp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    return regexp.test(url);
}

//=============
function putTemplate() {
    $("#Finale").hide();
    $('#imageR').css("border", "none");
    $('#imageR').hide();
    $('#loading').show("fast");


    var image = new Image();
    if (true) {
        c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        c.width = 256;
        c.height = 144;
        var imageObj1 = new Image();
        var imageObj2 = new Image();
        imageObj1.src = source;
        imageObj1.height = 144;
        imageObj1.width = 256;
        var depts = document.getElementsByName('dept');
        for (var i = 0, length = depts.length; i < length; i++) {
            if (depts[i].checked) {
                // do whatever you want with the checked radio
                var dept = depts[i].value;
                break;
            }
        }
        var template_loc = "images/";
        switch (dept) {
            default: template_loc = "emptyTemplate.png";
                break;
            case "empty": template_loc += "emptyTemplate.png";
                break;
            case "tech": template_loc += "techTemplate.png";
               break;
        }
        imageObj1.onload = function () {
            console.log("loaded");
            ctx.drawImage(imageObj1, 0, 0, 256, 144);
            if(!empty){
            imageObj2.src = template_loc;
            imageObj2.onload = function () {
                setTimeout(function () {
                    $('#loading').hide();
                    ctx.drawImage(imageObj2, 0, 0, 256, 144);
                    c = c.toDataURL("image/jpeg");
                    $("#Finale").fadeIn("slow");
                    $("#imageR").fadeIn("slow");
                    $('#imageR').css("border", "solid #008b8b");
                    document.getElementById('imageR').src = c;
                    if($('#imageR').is(":visible"))
                    {
                        //ready
                        // Get the button that opens the modal
                        var btn = document.getElementById("myBtn");
                        $('#submitWork').fadeIn("slow");
                        
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[1];
                        console.log(span);
                         // Get the modal
                        var ready = document.getElementById('ready');

                          ready.style.display = "block";
                       // When the user clicks on <span> (x), close the modal
                        span.onclick = function () {
                            console.log("clicked");
                            ready.style.display = "none";
                        }

                         // When the user clicks anywhere outside of the modal, close it
                         window.onclick = function (event) {
                             if (event.target == ready) {
                                 ready.style.display = "none";
                             }
                         }
                    }
                }, 1000); //SHHHH MAKE IT LOOK LIKE ITS PROCCESING
            }
            }
            else {
                setTimeout(function () {
                    $('#loading').hide();
                    c = c.toDataURL("image/jpeg");
                    $("#Finale").fadeIn("slow");
                    $("#imageR").fadeIn("slow");
                    $('#imageR').css("border", "solid #008b8b");
                    document.getElementById('imageR').src = c;
                    if ($('#imageR').is(":visible")) {
                        //ready
                        // Get the button that opens the modal
                        var btn = document.getElementById("myBtn");
                        $('#submitWork').fadeIn("slow");
                        
                        // Get the <span> element that closes the modal
                        var span = document.getElementsByClassName("close")[1];
                        console.log(span);
                        // Get the modal
                        var ready = document.getElementById('ready');

                        ready.style.display = "block";
                        // When the user clicks on <span> (x), close the modal
                        span.onclick = function () {
                            console.log("clicked");
                            ready.style.display = "none";
                        }

                        // When the user clicks anywhere outside of the modal, close it
                        window.onclick = function (event) {
                            if (event.target == ready) {
                                ready.style.display = "none";
                            }
                        }
                    }
                }, 1000); //SHHHH MAKE IT LOOK LIKE ITS PROCCESING
            }
        };
        
        setTimeout(function () {
            if (!isValidImage(imageObj1.src) || !isValidImg(imageObj2.src)) {
                alert("Something is wrong. Try again, and if the problem persists report it");
            }
        }, 4000);
        
    }
    else {
        alert("URL not valid");
    }
}
//======
function isDataURL(s) {
    return !!s.match(isDataURL.regex);
}
var IsValidImage = function (source) {
    isDataURL.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    var isvalid = isDataURL(source);
    return isvalid;
}
//===============
/**
 * This handler retrieves the images from the clipboard as a base64 string and returns it in a callback.
 * 
 * @param pasteEvent 
 * @param callback 
 */
function retrieveImageFromClipboardAsBase64(pasteEvent, callback, imageFormat) {
    if (pasteEvent.clipboardData == false) {
        if (typeof (callback) == "function") {
            callback(undefined);
        }
    };

    var items = pasteEvent.clipboardData.items;

    if (items == undefined) {
        if (typeof (callback) == "function") {
            callback(undefined);
        }
    };

    for (var i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue;
        // Retrieve image on clipboard as blob
        var blob = items[i].getAsFile();

        // Create an abstract canvas and get context
        var mycanvas = document.createElement("canvas");
        var ctx = mycanvas.getContext('2d');

        // Create an image
        var img = new Image();

        // Once the image loads, render the img on the canvas
        img.onload = function () {
            // Update dimensions of the canvas with the dimensions of the image
            mycanvas.width = this.width;
            mycanvas.height = this.height;

            // Draw the image
            ctx.drawImage(img, 0, 0);

            // Execute callback with the base64 URI of the image
            if (typeof (callback) == "function") {
                callback(mycanvas.toDataURL(
                    (imageFormat || "image/png")
                ));
            }
        };

        // Crossbrowser support for URL
        var URLObj = window.URL || window.webkitURL;

        // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob
        img.src = URLObj.createObjectURL(blob);
    }
}
window.addEventListener("paste", function (e) {
    //document.getElementById('preview').src = e;
    //source = e;
    console.log(e);;
    // Handle the event
    retrieveImageFromClipboardAsBase64(e, function (imageDataBase64) {
    // If there's an image
    if (imageDataBase64) {
        source = imageDataBase64;
        document.getElementById('preview').src = imageDataBase64;
        if (IsValidImage(source)) {
            $('#preview').fadeIn("fast");
            $('#pre').fadeIn("slow");
            $('#selectdeptDiv').fadeIn("slow");
            $('#selectdeptDiv2').fadeIn("slow");
        }
    }
    else {
        console.log("not img");
    }
    });
}, false);