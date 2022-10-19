$(document).ready(
    setTimeout(function(){
        $("#initial").hide(500, function(){
            $('#initial').empty()
            $('#initial').html(`<div id="text">What are you looking for?</div>`)
            $("#initial").show(500, function(){
                setTimeout(function(){
                    $("#initial").hide(500, function(){
                        $('#initial').empty()
                        $('#initial').html(`<div id="text">Oh wait....</div>`)
                        $("#initial").show(500, function(){
                            setTimeout(function(){
                                $("#initial").hide(500, function(){
                                    $('#initial').empty()
                                    $('#initial').html(`<div id="text">It's your birthday!!!</div>`)
                                    $("#initial").show(500, function(){
                                        setTimeout(function(){
                                            $("#initial").hide(500, function(){
                                                $('#initial').empty()
                                                $('#initial').html(`<div id="text">Happy Birthday TASNIM :)</div>`)
                                                $("#initial").show(500, function(){
                                                    setTimeout(function(){
                                                        $("#initial").hide(500, function(){
                                                            $("#initial").remove()
                                                            $('#wish-container').show(500, function(){
                                                                setTimeout(function(){
                                                                    $("#id_star").show(500)
                                                                }, 500)
                                                            })
                                                        })
                                                    }, 5000)
                                                })
                                            })
                                        }, 2000)
                                    })
                                })
                            }, 2000)
                        })
                    })
                }, 8000)
            })
        })
    }, 5000)
)
setInterval(function () { 
    $("#id_date").addClass('hidden-date');
    setTimeout(function(){
        $("#id_date").removeClass('hidden-date');
    }, 1000)
 }, 3000)