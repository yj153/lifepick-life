/*
	#btnJoin
	#joinForm
*/

$(document).ready(function() {
  $('#btnJoin').click(function() {
    $(this).button('loading');
    setTimeout(function() {
      $('#btnJoin').button('reset');
    },1000)
  })
})

var successMsg = "신청이 완료 되었습니다.\n감사합니다.";
var adpotJoinForm = "joinForm";
var adpotJoinForm2 = "joinForm2";
var adpotJoinForm3 = "joinForm3";
var adpotJoinForm4 = "joinForm4";
var adpotResultPage = "";

var setJoinForm = function(name) {
  this.adpotJoinForm = name;
}

var setJoinForm2 = function(name) {
  this.adpotJoinForm2 = name;
}

var setJoinForm3 = function(name) {
  this.adpotJoinForm3 = name;
}

var setJoinForm4 = function(name) {
  this.adpotJoinForm4 = name;
}

var fb_CompleteRegistration = function() {
  try {
    //fbq('track', 'CompleteRegistration', {value: 1,});
    fbq('track', 'CompleteRegistration');
  } catch(e) {}
  try {
    runCompleteRegistration();
  } catch(e) {}
  try {
    gtag_report_conversion();
  } catch(e) {}
  try {
    kakaoCompleteRegistration();
  } catch(e) {}
  try {
    gtag_conversion_forsid();
  } catch(e) {}
  try {
    landingCompleteRegistration();
  } catch(e) {}
  try {
    conversionCallback();
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'karrotConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'facebookConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'googleConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'kakaoConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'tiktokConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'tossConversion'}, '*');
  } catch(e) {}
  try {
    window.parent.postMessage({cmd:'CompleteRegistration'}, '*');
  } catch(e) {}
  try {
    callResult();
  } catch(e) {}
}

var onSubmit = function() {
  $.ajax({
    type: 'POST',
    url: '/l/act/save.php',
    data: $('#'+this.adpotJoinForm).serialize(),
    success: function(out, status) {
      var js = $.parseJSON(out);
      if ( js.code == "000" ) {
        fb_CompleteRegistration();
        if ( successMsg != '' ) {
          alert(successMsg);
        }
        if ( adpotResultPage != '' ) {
          location.replace(adpotResultPage);
        } else {
          $('form').each(function() {
            this.reset();
          });
        }
      } else if (js.code == "666") {
        fb_CompleteRegistration();
        myAdpotComplete();
      } else if (js.code == "777") {
        fb_CompleteRegistration();
        location.replace(js.msg);
      } else if (js.code == "888") {
        location.replace("/landing/common/mobile_confirm.html");
      } else {
        alert(js.msg);
      }
    }
  });
  return false;
}

var onSubmit2 = function() {
  $.ajax({
    type: 'POST',
    url: '/l/act/save.php',
    data: $('#'+this.adpotJoinForm2).serialize(),
    success: function(out, status) {
      var js = $.parseJSON(out);
      if ( js.code == "000" ) {
        fb_CompleteRegistration();
        if ( successMsg != '' ) {
          alert(successMsg);
        }
        if ( adpotResultPage != '' ) {
          location.replace(adpotResultPage);
        } else {
          $('form').each(function() {
            this.reset();
          });
        }
      } else if (js.code == "666") {
        fb_CompleteRegistration();
        myAdpotComplete();
      } else if (js.code == "777") {
        fb_CompleteRegistration();
        location.replace(js.msg);
      } else if (js.code == "888") {
        location.replace("/landing/common/mobile_confirm.html");        
      } else {
        alert(js.msg);
      }
    }
  });
  return false;
}

var onSubmit3 = function() {
  $.ajax({
    type: 'POST',
    url: '/l/act/save.php',
    data: $('#'+this.adpotJoinForm3).serialize(),
    success: function(out, status) {
      var js = $.parseJSON(out);
      if ( js.code == "000" ) {
        fb_CompleteRegistration();
        if ( successMsg != '' ) {
          alert(successMsg);
        }
        if ( adpotResultPage != '' ) {
          location.replace(adpotResultPage);
        } else {
          $('form').each(function() {
            this.reset();
          });
        }
      } else if (js.code == "666") {
        fb_CompleteRegistration();
        myAdpotComplete();
      } else if (js.code == "777") {
        fb_CompleteRegistration();
        location.replace(js.msg);
      } else if (js.code == "888") {
        location.replace("/landing/common/mobile_confirm.html");        
      } else {
        alert(js.msg);
      }
    }
  });
  return false;
}

var onSubmit4 = function() {
  $.ajax({
    type: 'POST',
    url: '/l/act/save.php',
    data: $('#'+this.adpotJoinForm4).serialize(),
    success: function(out, status) {
      var js = $.parseJSON(out);
      if ( js.code == "000" ) {
        fb_CompleteRegistration();
        if ( successMsg != '' ) {
          alert(successMsg);
        }
        if ( adpotResultPage != '' ) {
          location.replace(adpotResultPage);
        } else {
          $('form').each(function() {
            this.reset();
          });
        }
      } else if (js.code == "666") {
        fb_CompleteRegistration();
        myAdpotComplete();
      } else if (js.code == "777") {
        fb_CompleteRegistration();
        location.replace(js.msg);
      } else if (js.code == "888") {
        location.replace("/landing/common/mobile_confirm.html");        
      } else {
        alert(js.msg);
      }
    }
  });
  return false;
}
