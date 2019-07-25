function toggleBold() {
    var text = document.getElementById('message');
    if (text.style.fontWeight !== 'bold') {
        text.style.fontWeight = 'bold';
    } else {
        text.style.fontWeight = 'normal';
    }
}

function toggleItalic() {
    var text = document.getElementById('message');
    if (text.style.fontStyle !== 'italic') {
        text.style.fontStyle = 'italic';
    } else {
        text.style.fontStyle = 'normal';
    }
}

function toggleUnderline() {
    var text = document.getElementById('message');
    if (text.style.textDecoration !== 'underline') {
        text.style.textDecoration = 'underline';
    } else {
        text.style.textDecoration = 'none';
    }
}

function changeFontSize(event) {
    var text = document.getElementById('message');
    text.style.fontSize = event.value;
}

function changeFontFamily(event) {
    var text = document.getElementById('message');
    text.style.fontFamily = event.value;
}

$(".track1").mouseenter(function() {
    $(".vmb1").css("display", "block")
})

$(".track2").mouseenter(function() {
    $(".vmb2").css("display", "block")
})

$(".track3").mouseenter(function() {
    $(".vmb3").css("display", "block")
})

$(".track4").mouseenter(function() {
    $(".vmb4").css("display", "block")
})

$(".track5").mouseenter(function() {
    $(".vmb5").css("display", "block")
})

$(".track6").mouseenter(function() {
    $(".vmb6").css("display", "block")
})

$(".track7").mouseenter(function() {
    $(".vmb7").css("display", "block")
})

$(".track8").mouseenter(function() {
    $(".vmb8").css("display", "block")
})

$(".track9").mouseenter(function() {
    $(".vmb9").css("display", "block")
})


$(".track").mouseleave(function() {
    $(".view-more-button").css("display", "none")
})

$(".track, .view-more-button").click(function () {
    $('.model-content').modal() // To use the function modal() we have to install jquery-modal library (js & css)
})