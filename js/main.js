var title = $('#title');
var menu = $('#menu');
var tab = $('#menu ul.nav li');
var menuCollapsible = $('.navbar-collapse');

$(document).load(function() {});
$(document).ready(function() {

    $(window).scroll(function() {
        if ($(window).scrollTop() > $(window).height() -50) {
        menu.addClass('top');
        if(tab.parent().find(".active").size() === 0)
            tab.first().addClass('active');
        }
        else {
        menu.removeClass('top');
        tab.removeClass('active');
        }
    });

    menuCollapsible.on('show.bs.collapse', function () {
        if ($(window).scrollTop() < $(window).height() - 50) {
            $('html, body').animate({
                scrollTop: $("#portrait").offset().top - 50
            }, 800);
        }
    });

    menu.find('a').click(function() {
        if(menuCollapsible.hasClass('in'))
            menuCollapsible.collapse('hide');
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 45
        }, 800);
        return false;
    });
});