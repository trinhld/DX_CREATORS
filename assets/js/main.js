var RUN = {
    // Date Picker
    dataPicker: () => {
        $('#datepicker').datepicker();
        // let arrTemp = [];
        // const listDay = $('.datepicker-days li');
        // console.log(listDay[9]);
        // listDay[9].css({"color": "red"})
        // listDay.map((index, day) => 
            // (index % 7 === 0) ? arrTemp.push(day, listDay[index + 1]) : ''
            // console.log(day)
            // (index % 7 === 0) ? day.css({"color": "red"}) : ''
        // );
        // console.log(test);
        // arrTemp.map((item) => (item).css('color', 'red'))
        // arrTemp.map((item) => console.log(item))
    },

    // Show Menu User
    showMenuUser: () => {
        $('.wrap-user').click(() => {
            $('.user-list-option').toggle();
        });
    },

    // Show Menu Admin
    showMenuAdmin: () => {
        $('.wrap-user').click((e) => {
            e.stopPropagation();
            $('.admin-list-option').toggle();
        });

        $(window).click(function(event) {
            event.stopPropagation();
            $(".admin-list-option").hide();
        });
    },

    handleAccordionMenuAdmin: () => {
        $(".content-sub-menu").slideUp();

        $(".title-sub-menu").click(function (e) {
            e.preventDefault();
            e.stopPropagation();

            // $(".content-sub-menu").slideUp();
            // $(".title-sub-menu").removeClass("active")
            // $(".icon-arrow").removeClass("handle-arrow");

            // $(this).addClass("active");
            // $(this).next(".content-sub-menu").slideDown();
            // $(this).children(".icon-arrow").addClass("handle-arrow");

            $(this).toggleClass("active");
            $(this).next(".content-sub-menu").slideToggle();
            $(this).children(".icon-arrow").toggleClass("handle-arrow");
            
        })
    },

    // Show Modal Logout
    showModalLogout: () => {
        $('.btn-show-logout').click(() => {
            $('.user-list-option').toggle();
        });
    },

    // Show SideBar SP
    showSidebar: () => {
        $(".header-button-show-menu-sp").click(function(){
            $(".sidebar").toggle();
          });
    },

    // Upload Image
    uploadImage: () => {
        const readURL = (input, imgControlName) => {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $(imgControlName).attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        };

        $('#imag').change(function () {
            var imgControlName = '.image-preview';
            readURL(this, imgControlName);
        });

        $('.btn-delete-image').click(function (e) {
            e.preventDefault();
            $('#imag').val('');
            $('.image-preview').attr(
                'src',
                'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg',
            );
        });
    },

    // Initial
    init: () => {
        RUN.showMenuUser();
        RUN.showMenuAdmin();
        RUN.handleAccordionMenuAdmin();
        RUN.showModalLogout();
        RUN.showSidebar();
        RUN.uploadImage();
        RUN.dataPicker();
    },
};

$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});
