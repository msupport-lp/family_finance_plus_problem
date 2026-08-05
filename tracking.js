// ======================================
// GTM / GA4 Tracking
// ======================================

document.addEventListener('DOMContentLoaded', function () {

    const targetBtn = document.getElementById('gtag-cv-btn');

    if (!targetBtn) return;

    const link = targetBtn.querySelector('a') || targetBtn;

    link.addEventListener('click', function () {

        window.dataLayer = window.dataLayer || [];

        window.dataLayer.push({

            event: 'cta_interaction',

            custom_event_name: 'cta_click',

            // LPごとに変更
            lp_category: 'family_finance_plus_lp2'

        });

    });

});