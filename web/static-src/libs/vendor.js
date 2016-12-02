import './vendor.less'; //先用es原来的全局样式，因为要考虑主题等

import 'jquery';
import 'bootstrap';

$(document).ajaxSend(function(a, b, c) {
  if (c.type == 'POST') {
    b.setRequestHeader('X-CSRF-Token', $('meta[name=csrf-token]').attr('content'));
  }
});

$('#modal').on('show.bs.modal', function (e) {
  let url = $(e.relatedTarget).data('url');
  let $this = $(this);

  if(!$this.html()) {
    localStorage.removeItem("modalUrl");
  }
  
  if(localStorage.getItem("modalUrl") != url ) {
    $this.empty().load(url);
    localStorage.setItem("modalUrl",url);
  }
})