var RUN = {
  // Date Picker
  dataPicker: () => {
    $('.datepicker1').datepicker();
    $('.datepicker2').datepicker();
    $('.datepicker3').datepicker();
    $('.datepicker4').datepicker();
    $('.datepicker5').datepicker();
    $('.datepicker-custom').datepicker({
      dateFormat: 'yy/mm',
    });

    /* After Select Month -> Hìdden Popup */
    $('.datepicker-custom').on('change', function () {
      $('.datepicker-container').hide();
    });
  },

  // Handle Date Picker
  handleDatePicker: () => {
    function formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('/');
    }

    /* -------- */
    const compareDates = (d1, d2) => {
      let date1 = new Date(d1).getTime();
      let date2 = new Date(d2).getTime();

      if (date1 < date2) {
        return 1;
      } else if (date1 > date2) {
        return 2;
      } else {
        return 3;
      }
    };

    /* -------- */
    const book_1 = $('.datepicker-book-1');
    const book_2 = $('.datepicker-book-2');
    book_1.datepicker({ dateFormat: 'yy/mm/dd' });
    book_2.datepicker({ dateFormat: 'yy/mm/dd' });

    book_2.attr('disabled', true); /* Default Disable Book 2 */

    book_1.on('change', function () {
      const data_book = $(this).datepicker('getDate');
      const handle_date_book = formatDate(data_book);
      book_2.datepicker('destroy');
      book_2.attr('disabled', false);
      book_2.val(handle_date_book);
      book_2.datepicker({ dateFormat: 'yy/mm/dd', minDate: handle_date_book });

      if (!data_book) {
        book_2.datepicker('destroy');
        book_2.val('');
        book_2.attr('disabled', true);
      }
    });

    book_1.on('input', function () {
      const data_book = $(this).datepicker('getDate');
      const handle_date_book = formatDate(data_book);
      book_2.datepicker('destroy');
      book_2.attr('disabled', false);
      book_2.val('');
      book_2.datepicker({ dateFormat: 'yy/mm/dd', minDate: handle_date_book });
      if (!data_book) {
        book_2.datepicker('destroy');
        book_2.val('');
        book_2.attr('disabled', true);
      }
    });

    book_2.on('blur', function () {
      const checkdate = compareDates(formatDate(book_1.datepicker('getDate')), formatDate(book_2.datepicker('getDate')));
      if (checkdate === 2) {
        book_2.val(formatDate(book_1.datepicker('getDate')));
      }
    });
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

    $(window).click(function (event) {
      event.stopPropagation();
      $('.admin-list-option').hide();
    });
  },

  handleAccordionMenuAdmin: () => {
    $('.content-sub-menu').slideUp();

    $('.title-sub-menu').click(function (e) {
      e.preventDefault();
      e.stopPropagation();

      // $(".content-sub-menu").slideUp();
      // $(".title-sub-menu").removeClass("active")
      // $(".icon-arrow").removeClass("handle-arrow");

      // $(this).addClass("active");
      // $(this).next(".content-sub-menu").slideDown();
      // $(this).children(".icon-arrow").addClass("handle-arrow");

      $(this).toggleClass('active');
      $(this).next('.content-sub-menu').slideToggle();
      $(this).children('.icon-arrow').toggleClass('handle-arrow');
    });
  },

  // Show Modal Logout
  showModalLogout: () => {
    $('.btn-show-logout').click(() => {
      $('.user-list-option').toggle();
    });
  },

  handleDeleteFileUpload: () => {
    $('.btn-delete-file-upload').click((e) => {
      e.stopPropagation();
      var inputFile = $('.inputFileUpload');
      inputFile.val('');
    });
  },

  handleClickUploadImage: () => {
    const inputFile = $('.picture__input');

    inputFile?.change(function (e) {
      const pictureChange = $(this).parent().find('img');
      const inputTarget = e.target;
      const file = inputTarget.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          const readerTarget = e.target;
          const img = document.createElement('img');
          img.src = readerTarget.result;
          pictureChange.replaceWith(img);
        };

        reader.readAsDataURL(file);
      }
    });
  },

  // Show SideBar SP
  showSidebar: () => {
    $('.header-button-show-menu-sp').click(function () {
      $('.sidebar').toggle();
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
      $('.image-preview').attr('src', 'https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg');
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

    $('.name-image-2').hide();
    $('.btn-delete-image-2').hide();
    $('#imag2').change(function () {
      // Set Name Iamge For Tag
      const nameImage = $(this)[0].files[0].name;
      if (nameImage) {
        $('.name-image-2').show();
        $('.btn-delete-image-2').show();
        $('.name-image-2').text(nameImage);
      }

      // Set URL For Tag Image
      var imgControlName = '.image-preview';
      readURL(this, imgControlName);
    });

    $('.btn-delete-image-2').click(function (e) {
      e.preventDefault();
      $('.name-image-2').hide();
      $('.btn-delete-image-2').hide();
      $('#imag2').val('');
      $('.image-preview').attr('src', 'http://127.0.0.1:5500/assets/images/image_upload.png');
    });
  },

  // Upload File
  uploadFile: () => {
    $('.nameFile').hide();
    $('.btn-delete-file-upload').hide();
    $('.btn-upload-file-2').change(function () {
      const nameFile = $(this).find('input[type="file"]')[0].files[0].name;
      if (nameFile) {
        $(this).parent().find('.nameFile').show();
        $(this).next('.nameFile').text(nameFile);
        $(this).parent().next('.desciption-file-upload').hide();
        $(this).parent().find('.btn-delete-file-upload').show();
      }
    });
    // ===
    $('.btn-delete-file-upload').click(function () {
      $(this).parent().find('.nameFile').hide();
      $(this).parent().find('.nameFile').text('');
      $(this).hide();
      $(this).parent().next('.desciption-file-upload').show();
    });
  },

  // Show Iframe
  showIframe: () => {
    $('.input-iframe').on('input', function () {
      const dataIframe = $(this).val();
      const checkExistIframe = dataIframe.search('iframe');
      if (checkExistIframe !== -1) {
        $(this).parent().parent().parent().find('.picture__image').html($(this).val());
      } else {
        $(this).parent().parent().parent().find('.picture__image').html('<img class="w-100 h-100" src="../assets/images/image_upload.png" />');
      }
    });
  },

  // Add Rows
  addRows: () => {
    const uuidv4 = () => {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) => (c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))).toString(16));
    };

    $('.add-row-1').click(() => {
      $('.wrap-row-1').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`);
    });
    $('.add-row-2').click(() => {
      $('.wrap-row-2').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`);
    });
    $('.add-row-3').click(() => {
      $('.wrap-row-3').append(`<input id=${uuidv4()} type="text" class="form-control mb-2" value="" placeholder="説明文">`);
    });
  },

  // Show Payment Item
  showPaymentItem: () => {
    $('.icon-arrow-payment-item').on('click', function () {
      $(this).parent().toggleClass('show-payment-item');
    });
  },

  // Handle Chart
  handleChart: () => {
    if ($('#chart_1').length && $('#chart_2').length) {
      // Chart 1
      Highcharts.chart('chart_1', {
        chart: {
          polar: true,
          type: 'line',
          style: {
            fontSize: '16px',
          },
        },
        title: {
          text: '点数',
          y: 20,
        },
        pane: {
          size: '80%',
        },
        xAxis: {
          categories: ['ITリテラシー', 'ITツール演習', 'ディレクター基礎', 'コース5', 'コース６', 'DX CREATORS'],
          tickmarkPlacement: 'on',
          lineWidth: 0,
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          tickPositions: [2, 4, 6, 8, 10],
        },
        tooltip: {
          shared: true,
        },
        series: [
          {
            name: '',
            data: [10, 9, 9, 7, 9, 6] /* Add Data For Chart */,
            pointPlacement: 'on',
            color: '#E95098',
            fillOpacity: 0.5,
            type: 'area',
          },
        ],
        plotOptions: {
          area: {
            marker: {
              enabled: false,
            },
          },
        },
        exporting: { enabled: false },
        credits: {
          enabled: false,
        },
        legend: { enabled: false },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                chart: {
                  style: {
                    fontSize: '12px',
                  },
                },
                title: {
                  y: 60,
                },
                pane: {
                  size: '60%',
                },
              },
            },
          ],
        },
      });

      // Chart 2
      Highcharts.chart('chart_2', {
        chart: {
          polar: true,
          type: 'line',
          style: {
            fontSize: '16px',
          },
        },
        title: {
          text: '点数',
          y: 20,
        },
        pane: {
          size: '80%',
        },
        xAxis: {
          categories: ['ITリテラシー', 'ITツール演習', 'ディレクター基礎', 'コース5', 'コース６', 'DX CREATORS'],
          tickmarkPlacement: 'on',
          lineWidth: 0,
        },
        yAxis: {
          gridLineInterpolation: 'polygon',
          lineWidth: 0,
          tickPositions: [2, 4, 6, 8, 10],
        },
        tooltip: {
          shared: true,
        },
        series: [
          {
            name: '',
            data: [2, 2, 2, 7, 9, 6] /* Add Data For Chart */,
            pointPlacement: 'on',
            color: '#E95098',
            fillOpacity: 0.5,
            type: 'area',
          },
        ],
        plotOptions: {
          area: {
            marker: {
              enabled: false,
            },
          },
        },
        exporting: { enabled: false },
        credits: {
          enabled: false,
        },
        legend: { enabled: false },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                chart: {
                  style: {
                    fontSize: '12px',
                  },
                },
                title: {
                  y: 60,
                },
                pane: {
                  size: '55%',
                },
              },
            },
          ],
        },
      });
    }
  },

  // Handle Post Test
  handlePostTest: () => {
    /* Add Answer Test */
    $('.btn-add-test').on('click', function (e) {
      e.preventDefault();
      const _this = this;
      let listOptionSelect = '';
      let i = 1;
      const count_input_test = $(this).parent().find('.list-post-test input').length + 1;

      if (count_input_test === 4) {
        $(this).hide();
      }
      $(this)
        .parent()
        .find('.list-post-test')
        .append(`<div class='d-flex justify-content-center align-items-center'><input type="text" class="form-control mb-2" placeholder="選択肢 ${count_input_test}"><div class='btn-delete-test mx-4 fs-4'>✕</div></div>`);

      /* Update Select Answer */
      while (i <= count_input_test) {
        listOptionSelect += `<option>${i}</option>`;
        i++;
      }
      $('.answer-test').html(`<select class="form-control form-select answer-test">${listOptionSelect}</select>`);

      /* Delete Answer Test */
      $('.btn-delete-test').on('click', function (e) {
        e.preventDefault();
        $(this).parent().remove();
        const count_input_test_2 = $(_this).parent().find('.list-post-test input').length;
        if (count_input_test_2 !== 4) {
          $(_this).show();
        }
      });
    });
  },

  // Initial
  init: () => {
    RUN.showMenuUser();
    RUN.showMenuAdmin();
    RUN.showPaymentItem();
    RUN.handleAccordionMenuAdmin();
    RUN.showModalLogout();
    RUN.showSidebar();
    RUN.uploadImage();
    RUN.uploadImage2();
    RUN.uploadFile();
    RUN.dataPicker();
    RUN.addRows();
    RUN.showIframe();
    RUN.handleClickUploadImage();
    RUN.handleDeleteFileUpload();
    RUN.handleDatePicker();
    RUN.handleChart();
    RUN.handlePostTest();
  },
};

$(document).ready(() => {
  setTimeout(() => {
    RUN.init();
  }, 100);
});
