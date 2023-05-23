var RUN = {
    // Show Menu
    showMenu: () => {
        $('.wrap-user').click(() => {
            $('.user-list-option').toggle();
        });
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
        RUN.showMenu();
        RUN.showModalLogout();
        RUN.showSidebar();
        RUN.uploadImage();
    },
};

$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});
