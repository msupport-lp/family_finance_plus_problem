// ======================================
// GTM / GA4 Tracking
// ======================================

document.addEventListener('DOMContentLoaded', function() {

  // ページ読み込み時に、あらかじめlp_categoryをdataLayerに登録しておく
  // （cta_view はクリックを経由せず表示検知で発火するため、事前登録が必要）
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    'lp_category': 'family_finance_plus_problem'   // ★このLP用の値に変更
  });

  document.addEventListener('click', function(event) {
    var trigger = event.target.closest('[class*="cta-pos-"]');
    if (!trigger) return;

    var matched = trigger.className.match(/(?:^|\s)cta-pos-(\S+)/);
    if (!matched) return;

    var ctaPosition = matched[1];

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'cta_interaction',
      'custom_event_name': 'cta_click',
      'cta_position': ctaPosition,
      'lp_category': 'family_finance_plus_problem'   // ★このLP用の値に変更（上と同じ値）
    });
  });

});
