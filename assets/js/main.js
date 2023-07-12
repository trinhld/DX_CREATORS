var RUN = {
    // Date Picker
    dataPicker: () => {
        $('.datepicker1').datepicker();
        $('.datepicker2').datepicker();
        $('.datepicker3').datepicker();
        $('.datepicker4').datepicker();
        $('.datepicker5').datepicker();
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

    handleDeleteFileUpload: () => {
        $(".btn-delete-file-upload").click((e) => {
            e.stopPropagation()
            var inputFile = $(".inputFileUpload");
            inputFile.val(""); 
        })
    },

    handleClickUploadImage: () => {
        const inputFile = document.querySelector("#picture__input");
        const pictureImage = document.querySelector(".picture__image");
        // const pictureImageTxt = "Choose an image";
        // pictureImage.innerHTML = pictureImageTxt;

        inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");

            pictureImage.innerHTML = "";
            pictureImage.appendChild(img);
            });

            reader.readAsDataURL(file);
        } else {
            pictureImage.innerHTML = pictureImageTxt;
        }
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

    // Upload Image
    uploadImage2: () => {
        const readURL = (input, imgControlName) => {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $(imgControlName).attr('src', e.target.result);
                };
                reader.readAsDataURL(input.files[0]);
            }
        };

        $('#imag2').change(function () {
            var imgControlName = '.image-preview';
            readURL(this, imgControlName);
        });

        $('.btn-delete-image-2').click(function (e) {
            e.preventDefault();
            $('#imag2').val('');
            $('.image-preview').attr(
                'src',
                'http://127.0.0.1:5500/assets/images/image_upload.png',
            );
        });
    },

    // Add Rows
    addRows: () => {
        const uuidv4 = () => {
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        }

        $('.add-row-1').click(() => {
            $('.wrap-row-1').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`)
        })
        $('.add-row-2').click(() => {
            $('.wrap-row-2').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`)
        })
        $('.add-row-3').click(() => {
            $('.wrap-row-3').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`)
        })
    },

    // Initial
    init: () => {
        RUN.showMenuUser();
        RUN.showMenuAdmin();
        RUN.handleAccordionMenuAdmin();
        RUN.showModalLogout();
        RUN.showSidebar();
        RUN.uploadImage();
        RUN.uploadImage2();
        RUN.dataPicker();
        RUN.addRows();
        RUN.handleClickUploadImage();
        RUN.handleDeleteFileUpload();
    },
};

$(document).ready(() => {
    setTimeout(() => {
        RUN.init();
    }, 100);
});
