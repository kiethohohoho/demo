$(document).ready(function() {
    $("#btn-next").click(function() {
        let the_next_img = $(".active").next();

        if (the_next_img.length !== 0)
        {
            $(".active").addClass("x-to-left").one("webkitAnimationEnd", function() {
                $(".x-to-left").removeClass("x-to-left").removeClass("active")
            });

            the_next_img.addClass("active").addClass("left-to-x").one("webkitAnimationEnd", function() {
                $(".left-to-x").removeClass("left-to-x")
            });
        }
        else 
        {
            $(".active").addClass("x-to-left").one("webkitAnimationEnd", function() {
                $(".x-to-left").removeClass("x-to-left").removeClass("active")
            });
    
            $('.image:first-child').addClass("active").addClass("left-to-x").one("webkitAnimationEnd", function() {
                $(".left-to-x").removeClass("left-to-x")
            });
        }
    })

    $("#btn-prev").click(function() {
        let the_prev_img = $(".active").prev();

        if (the_prev_img.length !== 0)
        {
            $(".active").addClass("x-to-right").one("webkitAnimationEnd", function() {
                $(".x-to-right").removeClass("x-to-right").removeClass("active")
            });
            
            the_prev_img.addClass("active").addClass("right-to-x").one("webkitAnimationEnd", function() {
                $(".right-to-x").removeClass("right-to-x")
            });
        }
        else
        {
            $(".active").addClass("x-to-right").one("webkitAnimationEnd", function() {
                $(".x-to-right").removeClass("x-to-right").removeClass("active")
            });
            
            $('.image:last-child').addClass("active").addClass("right-to-x").one("webkitAnimationEnd", function() {
                $(".right-to-x").removeClass("right-to-x")
            });
        }
    })
})
// gulp