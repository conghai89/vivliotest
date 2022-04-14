//
//
// ===== テーマスクリプト [Azure] =====
//
//


//
// === 初期実行 ===
//

$(function() {
'use strict';

  //
  // === 共通 ===
  //

  var
    $window = $(window),
    $body = $('body'),
    slideSpeed = 'normal';



  //
  // === メニュー ===
  //

  // --- すべてを開く／閉じる ---

  var
    classGroupExpanded = 'expanded',
    textCollapse = CONST_TEXT.closeall,
    textExpande = CONST_TEXT.openall;

  $('.btn-expand-menu')
    .click(function(e) {

      var $this = $(this);

      if ($this.hasClass(classGroupExpanded)) {
        $this
          .text(textExpande)
          .removeClass(classGroupExpanded);
        $('.nav-menu-list > li.group')
          .removeClass(classGroupExpanded)
          .children('ul')
          .slideUp(slideSpeed);
      } else {
        $this
          .text(textCollapse)
          .addClass(classGroupExpanded);
        $('.nav-menu-list > li.group')
          .addClass(classGroupExpanded)
          .children('ul')
          .slideDown(slideSpeed);
      }

      return false;

    });



  // --- メニューの開閉 ---

  var
    classMenuClosed = 'status-menu-closed';

  $('.btn-view-switch')
    .click(function(e) {

      $body.toggleClass(classMenuClosed, !$body.hasClass(classMenuClosed));

      return false;

    });



  //
  // === ウィンドウ ===
  //

  // --- ウィンドウイベント ---

  var
    $navMenuContent = $('.nav-menu-content'),
    subtractHeight = 105;


  $window
  
    // --- リサイズ ---
    .resize(function() {

      $navMenuContent
        .height($window.innerHeight() - subtractHeight);

    })
    .trigger('resize');


});

// --- eof ---
