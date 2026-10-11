(() => {
  "use strict";

  const INK = "#26304A";
  const PAPER = "#FFFDF6";

  /* ---- Google AdSense ----
     Thay client bằng mã ca-pub của bạn (2 nơi: đây và slot nếu có).
     Auto Ads được bật từ trang quản trị AdSense. */
  const ADS = {
    client: "ca-pub-9712921643288263",
    slotGrid: "2198800184",
    slotReader: "7259555175",
    slotLeft: "9383155630",
    slotRight: "1932041022"
  };

  function loadAdsScript() {
    if (document.querySelector('script[src*="adsbygoogle"]')) return;
    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADS.client;
    document.head.appendChild(s);
  }

  function adSlotHTML(slot) {
    return `
      <div class="ad-slot" aria-label="Quảng cáo">
        <span class="ad-label">Quảng cáo · Advertisement</span>
        <ins class="adsbygoogle"
          style="display:block"
          data-ad-client="${ADS.client}"
          data-ad-slot="${slot}"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      </div>`;
  }

  function sideAdHTML(slot) {
    return `
      <div class="ad-slot side-ad-slot" aria-label="Quảng cáo">
        <span class="ad-label">Quảng cáo</span>
        <ins class="adsbygoogle"
          style="display:block;width:160px;height:600px"
          data-ad-client="${ADS.client}"
          data-ad-slot="${slot}"
          data-ad-format="vertical"
          data-full-width-responsive="false"></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
      </div>`;
  }

  /* ---- Tranh minh họa kiểu khắc gỗ (SVG) ---- */

  const SCENES = {
    hare: `
      <svg viewBox="0 0 380 228" role="img" aria-label="Thỏ và rùa đang thi chạy">
        <path d="M0 200 Q 70 190 140 197 T 350 196" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 200 l4 10 M70 196 l-3 12 M300 196 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <line x1="332" y1="66" x2="332" y2="200" stroke="${INK}" stroke-width="4"/>
        <path d="M332 66 L370 90 L332 114 Z" fill="#E9A13B" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="52" cy="198" r="6" fill="none" stroke="${INK}" stroke-width="3" opacity=".45"/>
        <circle cx="40" cy="192" r="4" fill="none" stroke="${INK}" stroke-width="3" opacity=".35"/>
        <ellipse cx="286" cy="150" rx="36" ry="22" fill="#C96F85" stroke="${INK}" stroke-width="4"/>
        <circle cx="326" cy="134" r="15" fill="#C96F85" stroke="${INK}" stroke-width="4"/>
        <path d="M318 122 q-4 -22 6 -30 q8 6 6 28 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M330 120 q2 -20 12 -26 q7 8 4 26 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="331" cy="131" r="2.5" fill="${INK}"/>
        <circle cx="249" cy="145" r="8" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <rect x="264" y="166" width="13" height="13" rx="6" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <rect x="298" y="166" width="13" height="13" rx="6" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <path d="M212 138 h-20 M208 150 h-24 M214 162 h-18" stroke="${INK}" stroke-width="3" opacity=".5"/>
        <ellipse cx="100" cy="168" rx="46" ry="28" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <path d="M70 158 q15 -12 30 0 M100 167 q15 -10 30 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <circle cx="158" cy="162" r="13" fill="#8FB080" stroke="${INK}" stroke-width="4"/>
        <circle cx="163" cy="158" r="2.5" fill="${INK}"/>
        <rect x="66" y="188" width="15" height="11" rx="5" fill="#8FB080" stroke="${INK}" stroke-width="3"/>
        <rect x="122" y="188" width="15" height="11" rx="5" fill="#8FB080" stroke="${INK}" stroke-width="3"/>
        <path d="M56 172 q-9 4 -7 11" stroke="${INK}" stroke-width="3" fill="none"/>
      </svg>`,

    wolf: `
      <svg viewBox="0 0 392 228" role="img" aria-label="Cậu bé chăn cừu và con sói">
        <path d="M0 211 Q 90 173 190 183 Q 287 191 396 186 L396 233 L0 233 Z" fill="#E4ECDD" stroke="${INK}" stroke-width="4"/>
        <circle cx="36" cy="46" r="14" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M36 22 v-10 M36 70 v-10 M12 46 h-10 M60 46 h-10" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <g>
          <path d="M70 171 q-14 -18 2 -26 q8 -14 26 -8 q16 -10 26 2 q16 6 6 20 q-4 14 -22 12 q-16 8 -38 0 Z" fill="${PAPER}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
          <ellipse cx="118" cy="161" rx="10" ry="8" fill="${INK}"/>
          <path d="M84 184 v10 M104 184 v10" stroke="${INK}" stroke-width="3"/>
        </g>
        <g transform="translate(58,26) scale(0.82)">
          <path d="M70 171 q-14 -18 2 -26 q8 -14 26 -8 q16 -10 26 2 q16 6 6 20 q-4 14 -22 12 q-16 8 -38 0 Z" fill="${PAPER}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
          <ellipse cx="118" cy="161" rx="10" ry="8" fill="${INK}"/>
          <path d="M84 184 v10 M104 184 v10" stroke="${INK}" stroke-width="3"/>
        </g>
        <circle cx="248" cy="118" r="12" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M231 112 q17 -24 34 0 q-17 -8 -34 0 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M237 130 h22 l-3 26 h-16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M239 138 l-12 16 M259 138 l13 -8" stroke="${INK}" stroke-width="3"/>
        <line x1="274" y1="116" x2="267" y2="192" stroke="${INK}" stroke-width="3"/>
        <path d="M243 156 v22 M255 156 v22" stroke="${INK}" stroke-width="3"/>
        <path d="M300 207 q-6 -28 16 -32 q8 -16 26 -6 q14 -8 22 4 q10 10 0 24 q-4 10 -18 10 h-46 Z" fill="#4E7A57" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M322 128 l-5 -13 l9 7 Z M338 126 l6 -13 l-7 9 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="334" cy="142" r="14" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <circle cx="329" cy="140" r="2.5" fill="${INK}"/>
        <ellipse cx="348" cy="148" rx="9" ry="6" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="354" cy="146" r="2.5" fill="${INK}"/>
      </svg>`,

    ant: `
      <svg viewBox="0 0 384 228" role="img" aria-label="Châu chấu ca hát và kiến tha lúa">
        <path d="M60 224 q30 -62 120 -82 q40 -8 60 -42 q-52 12 -82 36 q-80 34 -98 88 Z" fill="#4E7A57" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M120 214 q40 -30 96 -34" stroke="#6E9B4F" stroke-width="3" fill="none"/>
        <ellipse cx="196" cy="118" rx="24" ry="14" fill="#6E9B4F" stroke="${INK}" stroke-width="4"/>
        <circle cx="222" cy="111" r="10" fill="#6E9B4F" stroke="${INK}" stroke-width="3"/>
        <path d="M229 105 q10 -10 19 -8 M225 102 q6 -15 15 -17" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M184 130 l-12 16 M202 130 l9 18" stroke="${INK}" stroke-width="3"/>
        <path d="M184 112 q-18 -6 -22 2 q-2 9 16 9 Z" fill="#8FB080" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M158 86 v14 M154 86 h8 M158 86 a3 3 0 1 1 -3 3" stroke="${INK}" stroke-width="3" fill="none"/>
        <circle cx="224" cy="78" r="4" fill="#C4452F"/>
        <path d="M219 78 h12 v7" stroke="${INK}" stroke-width="3"/>
        <circle cx="336" cy="42" r="16" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M352 42 h12 M336 58 v12 M344 50 l8 -8 M328 50 l-8 -8" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="82" cy="196" r="9" fill="${INK}"/>
        <circle cx="98" cy="189" r="7" fill="${INK}"/>
        <circle cx="112" cy="182" r="6" fill="${INK}"/>
        <path d="M82 202 l-7 9 M82 193 l-9 7 M98 194 l-5 11 M112 175 l-9 7" stroke="${INK}" stroke-width="3"/>
        <path d="M117 177 q9 -9 15 -7" stroke="${INK}" stroke-width="3" fill="none"/>
        <circle cx="130" cy="172" r="8" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    fox: `
      <svg viewBox="0 0 388 228" role="img" aria-label="Cáo nhìn chùm nho trên giàn">
        <line x1="70" y1="58" x2="70" y2="200" stroke="${INK}" stroke-width="4"/>
        <line x1="318" y1="58" x2="318" y2="200" stroke="${INK}" stroke-width="4"/>
        <line x1="48" y1="58" x2="342" y2="58" stroke="${INK}" stroke-width="4"/>
        <path d="M96 58 q30 28 62 10 q40 -20 82 -6 q30 10 62 -4" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M128 70 q-9 -13 0 -22 q11 9 0 22 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M240 62 q-9 -13 0 -22 q11 9 0 22 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <g fill="#C96F85" stroke="${INK}" stroke-width="3">
          <circle cx="150" cy="50" r="7"/><circle cx="164" cy="46" r="7"/><circle cx="157" cy="58" r="7"/>
          <circle cx="204" cy="44" r="7"/><circle cx="217" cy="50" r="7"/><circle cx="210" cy="60" r="7"/>
          <circle cx="262" cy="52" r="7"/><circle cx="276" cy="48" r="7"/><circle cx="269" cy="60" r="7"/>
        </g>
        <ellipse cx="196" cy="164" rx="36" ry="20" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <ellipse cx="196" cy="170" rx="17" ry="12" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="196" cy="130" r="17" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M185 134 q11 -7 22 0 l-4 11 q-7 6 -14 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="207" cy="136" r="3" fill="${INK}"/>
        <path d="M185 117 l-5 -15 l11 9 Z M204 115 l7 -15 l-9 11 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M230 156 q28 -9 36 11 q-24 4 -32 -2 q-8 13 -22 4 Z" fill="#E9A13B" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M266 167 q7 3 4 9 q-11 -2 -4 -9 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M180 150 l-11 -13 M212 150 l11 -13" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    lion: `
      <svg viewBox="0 0 372 213" role="img" aria-label="Sư tử và chuột nhắt">
        <path d="M0 196 h380" stroke="${INK}" stroke-width="4"/>
        <path d="M150 76 l0 -14 M120 86 l-9 -12 M180 86 l9 -12 M100 110 l-13 -5 M200 110 l13 -5 M106 140 l-12 7 M194 140 l12 7" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <circle cx="150" cy="118" r="40" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="150" cy="118" r="22" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <circle cx="142" cy="113" r="3" fill="${INK}"/>
        <circle cx="158" cy="113" r="3" fill="${INK}"/>
        <path d="M146 124 h8 l-4 5 Z" fill="${INK}"/>
        <path d="M146 132 q4 4 8 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <circle cx="124" cy="96" r="7" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="176" cy="96" r="7" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M122 196 q-6 -48 30 -60 q10 -4 22 0 q36 12 30 60 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M130 196 v-24 M139 196 v-30 M166 196 v-28 M175 196 v-22" stroke="${INK}" stroke-width="4"/>
        <ellipse cx="134" cy="196" rx="10" ry="5" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="171" cy="196" rx="10" ry="5" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M96 172 q-26 -8 -22 -32 q15 -4 17 9 q-7 8 5 13" stroke="${INK}" stroke-width="4" fill="none" stroke-linecap="round"/>
        <circle cx="94" cy="136" r="6" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="262" cy="190" rx="13" ry="8" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="278" cy="183" r="7" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="273" cy="177" r="4" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="282" cy="177" r="4" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="281" cy="182" r="1.5" fill="${INK}"/>
        <path d="M249 192 q-11 5 -8 14" stroke="${INK}" stroke-width="3" fill="none"/>
      </svg>`,

    crow: `
      <svg viewBox="0 0 378 221" role="img" aria-label="Con quạ thả sỏi vào bình nước">
        <path d="M0 198 Q 190 190 381 195" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 198 l4 10 M70 194 l-3 12 M300 194 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M150 132 q0 -8 8 -8 h64 q8 0 8 8 l-8 62 q-2 8 -10 8 h-44 q-8 0 -10 -8 Z" fill="${PAPER}" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <ellipse cx="190" cy="132" rx="42" ry="10" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <path d="M158 172 h64 l-4 22 h-56 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="150" cy="196" r="7" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="166" cy="200" r="6" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="182" cy="197" r="8" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="200" cy="201" r="5" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <path d="M150 118 q-6 -14 2 -22 M142 112 q-10 -10 -4 -20" stroke="${INK}" stroke-width="3" opacity=".5" fill="none"/>
        <ellipse cx="140" cy="112" rx="22" ry="16" fill="${INK}"/>
        <path d="M128 106 q-16 -4 -20 8 q12 2 18 -2 Z" fill="${INK}"/>
        <circle cx="158" cy="100" r="10" fill="${INK}"/>
        <circle cx="156" cy="98" r="2.5" fill="${PAPER}"/>
        <path d="M166 98 l16 2 l-14 8 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="180" cy="102" r="5" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <path d="M150 122 l-4 8 M134 124 l-2 6" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    snakes: `
      <svg viewBox="0 0 376 209" role="img" aria-label="Người nông dân cứu con rắn bên bếp lửa">
        <path d="M0 196 h380" stroke="${INK}" stroke-width="4"/>
        <path d="M40 60 q10 -10 20 0 M60 92 q10 -10 20 0 M80 124 q10 -10 20 0" stroke="${INK}" stroke-width="3" opacity=".35" fill="none"/>
        <circle cx="110" cy="106" r="13" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M96 100 q14 -20 28 0 q-14 -6 -28 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M98 120 h24 l-4 36 h-16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M100 128 l-20 6 M122 128 l20 6" stroke="${INK}" stroke-width="3"/>
        <path d="M104 156 v22 M116 156 v22" stroke="${INK}" stroke-width="3"/>
        <circle cx="346" cy="40" r="3" fill="${INK}" opacity=".5"/>
        <circle cx="324" cy="66" r="3" fill="${INK}" opacity=".5"/>
        <path d="M240 196 q30 -26 72 -10 q10 8 4 12 h-82 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M262 170 q-8 -18 0 -26 q8 8 0 26 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M272 160 q-6 -14 0 -20 q6 6 0 20 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="282" cy="180" r="16" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <circle cx="303" cy="186" r="12" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="317" cy="172" r="9" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="319" cy="170" r="2" fill="${PAPER}"/>
        <path d="M325 170 l12 -3 M325 172 l12 3" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    dogbone: `
      <svg viewBox="0 0 383 241" role="img" aria-label="Chú chó tha miếng thịt nhìn bóng mình dưới cầu">
        <path d="M0 152 q 30 -8 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 60 0 t 23 0 L383 247 L0 247 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M70 152 q 20 -6 40 0 M190 152 q 20 -6 40 0 M310 152 q 20 -6 40 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".5"/>
        <line x1="84" y1="128" x2="84" y2="196" stroke="${INK}" stroke-width="4"/>
        <line x1="302" y1="128" x2="302" y2="196" stroke="${INK}" stroke-width="4"/>
        <path d="M56 128 h272" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
        <path d="M56 136 h272" stroke="${INK}" stroke-width="2" opacity=".4"/>
        <ellipse cx="190" cy="102" rx="30" ry="18" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="224" cy="90" r="13" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M214 82 q-2 -10 8 -12 q7 8 2 16 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="228" cy="87" r="2.5" fill="${INK}"/>
        <rect x="232" y="88" width="16" height="7" rx="3" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="232" cy="91.5" r="4" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="248" cy="91.5" r="4" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <path d="M160 96 q-14 -6 -12 -18 q12 2 12 12 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M176 116 v10 M190 116 v10 M204 116 v10 M218 116 v10" stroke="${INK}" stroke-width="3"/>
        <g transform="matrix(1 0 0 -1 0 308)" opacity=".4">
          <ellipse cx="190" cy="102" rx="30" ry="18" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
          <circle cx="224" cy="90" r="13" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
          <path d="M214 82 q-2 -10 8 -12 q7 8 2 16 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
          <path d="M160 96 q-14 -6 -12 -18 q12 2 12 12 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        </g>
        <path d="M196 56 l-2 14 M196 56 l12 4 M196 56 l-12 4" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".6"/>
      </svg>`,

    rooster: `
      <svg viewBox="0 0 374 219" role="img" aria-label="Gà trống trên hàng rào và con cáo bên dưới">
        <circle cx="40" cy="44" r="13" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M40 20 v-10 M40 68 v-10 M16 44 h-10 M64 44 h-10" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <path d="M0 206 h380" stroke="${INK}" stroke-width="4"/>
        <line x1="60" y1="150" x2="60" y2="206" stroke="${INK}" stroke-width="4"/>
        <line x1="320" y1="150" x2="320" y2="206" stroke="${INK}" stroke-width="4"/>
        <path d="M40 150 h300" stroke="${INK}" stroke-width="5" stroke-linecap="round"/>
        <path d="M118 120 q-30 -10 -34 -38 q20 4 30 20 q-6 -26 10 -34 q10 14 4 34 q10 -14 22 -12 q-6 16 -16 26 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <ellipse cx="140" cy="118" rx="24" ry="16" fill="#C4452F" stroke="${INK}" stroke-width="4"/>
        <path d="M128 112 q-10 -4 -12 -14 q10 0 12 8 Z" fill="#B0543A" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="164" cy="100" r="12" fill="#C4452F" stroke="${INK}" stroke-width="4"/>
        <path d="M158 88 q-2 -9 5 -11 q4 7 9 0 q2 9 -5 11 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M166 108 q4 9 0 13 q-4 -4 0 -13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M176 100 l11 2 l-9 5 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="168" cy="97" r="2.5" fill="${INK}"/>
        <path d="M146 130 l-2 8 M156 130 l-2 8 M160 130 l-2 8" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="252" cy="180" rx="30" ry="17" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="232" cy="158" r="13" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M222 160 q-9 -11 2 -17 q6 9 -2 17 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="220" cy="148" r="2.5" fill="${INK}"/>
        <path d="M228 147 l-4 -13 l9 7 Z M240 145 l2 -13 l-7 9 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M280 174 q20 -6 24 10 q-18 2 -24 -2 q-4 10 -14 4 Z" fill="#E9A13B" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M304 184 q6 2 3 8 q-10 -2 -3 -8 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M240 196 v-8 M252 196 v-8 M264 196 v-8" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    bear: `
      <svg viewBox="0 0 377 219" role="img" aria-label="Hai người bạn và con gấu trong rừng">
        <path d="M0 202 h380" stroke="${INK}" stroke-width="4"/>
        <path d="M84 60 h20 v142 h-20 Z" fill="#B07A3E" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M84 84 l-26 -20 M104 104 l28 -18" stroke="${INK}" stroke-width="4"/>
        <circle cx="52" cy="62" r="22" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="86" cy="50" r="26" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="122" cy="70" r="20" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="46" cy="88" r="16" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="52" cy="70" r="9" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M44 70 h16 l-3 14 h-10 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <ellipse cx="212" cy="180" rx="26" ry="11" fill="#5B84A8" stroke="${INK}" stroke-width="3"/>
        <circle cx="186" cy="176" r="10" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M196 186 l-8 10 M220 184 l-6 12" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="300" cy="162" rx="46" ry="36" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <circle cx="266" cy="128" r="21" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <path d="M254 112 l-6 -14 l12 6 Z M278 112 l6 -14 l-12 6 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <ellipse cx="258" cy="132" rx="10" ry="7" fill="#B7BBC6" stroke="${INK}" stroke-width="3"/>
        <circle cx="256" cy="130" r="2.5" fill="${INK}"/>
        <rect x="276" y="190" width="18" height="12" rx="6" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <rect x="306" y="190" width="18" height="12" rx="6" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <path d="M344 150 q18 -4 20 14 q-16 2 -20 -2 q-4 8 -12 2 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M120 60 q30 -8 60 -4" stroke="${INK}" stroke-width="3" opacity=".3" fill="none"/>
      </svg>`,

    oakreed: `
      <svg viewBox="0 0 379 219" role="img" aria-label="Cây sồi và những cây sậy trong gió">
        <path d="M0 202 Q 190 190 382 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M70 202 q-6 -70 10 -112 q-2 -10 8 -12 q10 2 8 12 q14 42 8 112 Z" fill="#B07A3E" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <circle cx="72" cy="58" r="30" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="112" cy="70" r="26" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="48" cy="92" r="22" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="96" cy="98" r="20" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <path d="M210 202 q-4 -40 -2 -72 M240 202 q-6 -50 -2 -92 M270 202 q-2 -30 0 -62 M300 202 q-6 -40 -4 -82" stroke="${INK}" stroke-width="4" fill="none"/>
        <path d="M208 130 q-12 -10 -18 -3 M238 110 q-14 -12 -20 -4 M268 140 q-10 -8 -16 -2 M296 120 q-12 -10 -18 -3" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M236 150 q-10 -4 -12 -12 M266 160 q-10 -4 -12 -12 M296 150 q-10 -4 -12 -12" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M130 56 q30 -10 62 -6 M120 88 q40 -8 82 -4 M140 120 q30 -6 62 -4" stroke="${INK}" stroke-width="3" opacity=".35" fill="none"/>
        <path d="M336 40 q14 -6 28 -4" stroke="${INK}" stroke-width="3" opacity=".35" fill="none"/>
      </svg>`,

    duckling: `
      <svg viewBox="0 0 387 241" role="img" aria-label="Thiên nga trắng giữa hồ nước">
        <path d="M0 152 q 60 -10 120 0 t 120 0 t 120 0 t 27 0 L387 251 L0 251 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M60 152 q 30 -6 60 0 M200 152 q 30 -6 60 0 M320 152 q 30 -6 60 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".5"/>
        <ellipse cx="196" cy="152" rx="36" ry="21" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <path d="M206 142 q10 -32 28 -36" stroke="${INK}" stroke-width="4" fill="none"/>
        <circle cx="240" cy="102" r="9" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="243" cy="100" r="2" fill="${INK}"/>
        <path d="M249 100 l13 3 l-11 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M176 148 q-16 -10 -10 -24 q14 4 10 20 Z" fill="#E4ECDD" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M196 168 l-4 12 M208 168 l-2 12" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="118" cy="172" rx="14" ry="9" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="132" cy="164" r="6" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M138 163 l7 2 l-6 3 Z" fill="#C4452F" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <ellipse cx="276" cy="176" rx="13" ry="8" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="289" cy="169" r="6" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M295 168 l7 2 l-6 3 Z" fill="#C4452F" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M336 152 q6 -30 18 -44 M344 158 q10 -22 22 -32" stroke="${INK}" stroke-width="3" fill="none"/>
        <ellipse cx="356" cy="106" rx="6" ry="14" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    pigs: `
      <svg viewBox="0 0 394 213" role="img" aria-label="Ba chú heo con và con sói">
        <path d="M0 206 h398" stroke="${INK}" stroke-width="4"/>
        <path d="M40 150 L82 96 L124 150 Z" fill="#E9A13B" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M48 150 h68 v56 h-68 Z" fill="#F7E9CA" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M74 150 v30 q0 8 -8 8 h-6 v18" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M156 150 h58 l-6 -16 h-46 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M162 150 h56 v56 h-56 Z" fill="#F4DDD5" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M166 150 v56 M176 150 v56 M186 150 v56 M196 150 v56 M206 150 v56" stroke="${INK}" stroke-width="2" opacity=".55"/>
        <path d="M266 150 h66 l-8 -18 h-50 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M272 150 h64 v56 h-64 Z" fill="${PAPER}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M272 166 h64 M272 182 h64 M272 198 h64 M286 150 v16 M302 166 v16 M318 150 v16 M334 166 v16" stroke="${INK}" stroke-width="2" opacity=".55"/>
        <rect x="290" y="160" width="28" height="24" fill="#F7E9CA" stroke="${INK}" stroke-width="3"/>
        <circle cx="304" cy="172" r="8" fill="#F2C9A0" stroke="${INK}" stroke-width="2"/>
        <path d="M299 166 l-3 -6 l5 3 Z M309 166 l3 -6 l-5 3 Z" fill="#F2C9A0" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="301" cy="171" r="1.5" fill="${INK}"/>
        <circle cx="307" cy="171" r="1.5" fill="${INK}"/>
        <ellipse cx="300" cy="176" rx="5" ry="3" fill="#C96F85" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="122" cy="182" rx="26" ry="16" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <circle cx="96" cy="168" r="14" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <path d="M88 158 l-5 -13 l9 7 Z M102 156 l5 -13 l-8 8 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="92" cy="166" r="2.5" fill="${INK}"/>
        <path d="M80 170 h-26 M78 176 h-22 M82 164 h-24" stroke="${INK}" stroke-width="3" opacity=".5"/>
        <path d="M112 196 v-8 M124 196 v-8 M136 196 v-8" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    bamboo: `
      <svg viewBox="0 0 391 213" role="img" aria-label="Chàng trai vác cây tre trăm đốt">
        <path d="M0 204 h394" stroke="${INK}" stroke-width="4"/>
        <path d="M30 204 l4 10 M70 200 l-3 12 M330 200 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M130 36 L366 196" stroke="#4E7A57" stroke-width="18" stroke-linecap="round"/>
        <path d="M162 60 l-12 10 M194 84 l-12 10 M226 108 l-12 10 M258 132 l-12 10 M290 156 l-12 10 M322 180 l-12 10" stroke="${INK}" stroke-width="3"/>
        <path d="M150 44 q-16 -8 -20 -22 q18 2 20 22 Z M180 68 q-16 -8 -20 -22 q18 2 20 22 Z M210 92 q-16 -8 -20 -22 q18 2 20 22 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="120" cy="120" r="11" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M108 114 q12 -18 24 0 q-12 -5 -24 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M110 132 h20 l-3 22 h-14 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M112 142 l-14 10 M128 142 l14 10" stroke="${INK}" stroke-width="3"/>
        <path d="M116 154 v22 M124 154 v22" stroke="${INK}" stroke-width="3"/>
        <path d="M118 140 q-10 -8 -4 -16" stroke="${INK}" stroke-width="3"/>
        <circle cx="320" cy="168" r="12" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M308 162 q12 -18 24 0 q-12 -5 -24 0 Z" fill="#8A5A7C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M308 180 h24 l-4 14 h-16 Z" fill="#8A5A7C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M313 188 l-12 8 M327 188 l12 8" stroke="${INK}" stroke-width="3"/>
        <path d="M316 194 v10 M324 194 v10" stroke="${INK}" stroke-width="3"/>
        <path d="M318 176 q-8 -6 -3 -12" stroke="${INK}" stroke-width="3"/>
        <path d="M336 168 l16 -4 M340 176 l16 2" stroke="${INK}" stroke-width="3" opacity=".6"/>
      </svg>`,

    banhchung: `
      <svg viewBox="0 0 389 213" role="img" aria-label="Hoàng tử Lang Liêu gói bánh chưng bánh dày">
        <path d="M0 204 h392" stroke="${INK}" stroke-width="4"/>
        <path d="M30 204 l4 10 M70 200 l-3 12 M330 200 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <rect x="62" y="128" width="76" height="76" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <path d="M100 128 v76 M62 166 h76" stroke="${INK}" stroke-width="3"/>
        <circle cx="100" cy="128" r="6" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="236" cy="166" r="38" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <circle cx="236" cy="166" r="26" fill="none" stroke="${INK}" stroke-width="3" opacity=".5"/>
        <path d="M316 150 h52 v30 h-52 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M342 150 v-10 h-14 v10" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M330 142 q-6 -14 2 -20 q7 7 -2 20 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M342 134 q-5 -11 1 -16 q6 6 -1 16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="150" cy="120" r="10" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M139 114 q11 -16 22 0 q-11 -4 -22 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M141 130 h18 l-3 20 h-12 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M143 140 l-12 8 M157 140 l12 8" stroke="${INK}" stroke-width="3"/>
        <path d="M146 150 v16 M154 150 v16" stroke="${INK}" stroke-width="3"/>
        <path d="M150 126 q-8 -6 -4 -12" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    wind: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Gió và Mặt Trời thi tài với lữ khách">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <circle cx="62" cy="52" r="24" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M62 16 v-8 M62 88 v-8 M26 52 h-8 M98 52 h-8 M36 26 l-6 -6 M88 78 l6 6 M88 26 l6 -6 M36 78 l-6 6" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <path d="M120 60 q26 -14 52 -6 M112 84 q30 -12 58 -4 M128 108 q24 -10 48 -4" stroke="${INK}" stroke-width="3" fill="none" opacity=".5"/>
        <path d="M196 40 q34 -18 70 -8 M188 66 q38 -14 78 -4" stroke="${INK}" stroke-width="3" fill="none" opacity=".35"/>
        <ellipse cx="272" cy="156" rx="20" ry="11" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <circle cx="272" cy="128" r="13" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M260 122 q13 -18 24 0 q-12 -5 -24 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M262 140 h20 l-3 16 h-14 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M264 150 l-12 8 M280 150 l12 8" stroke="${INK}" stroke-width="3"/>
        <path d="M268 156 v14 M276 156 v14" stroke="${INK}" stroke-width="3"/>
        <path d="M292 132 q24 -6 34 10 q-22 2 -28 -2 q-2 10 -12 4 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M326 142 q8 2 5 9 q-12 -2 -5 -9 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M300 170 q-6 -16 4 -22 q8 10 -4 22 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    goose: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Con ngỗng đẻ trứng vàng">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="168" cy="168" rx="52" ry="32" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <path d="M178 146 q22 -30 44 -34" stroke="${INK}" stroke-width="4" fill="none"/>
        <circle cx="228" cy="108" r="12" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="231" cy="106" r="2.5" fill="${INK}"/>
        <path d="M238 106 l14 3 l-12 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M130 160 q-20 -8 -16 -22 q16 4 16 18 Z" fill="#F7E9CA" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M146 192 l-4 12 M166 192 l-2 12 M186 192 l-4 12" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="286" cy="186" rx="26" ry="14" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="296" cy="172" r="7" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="316" cy="180" r="6" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="272" cy="176" r="5" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M120 96 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M104 84 q-10 -12 2 -16 q6 10 -2 16 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    mice: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Chuột thành thị và chuột đồng quê">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M96 130 h60 v40 h-60 Z" fill="#B07A3E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M96 130 l30 -14 l30 14 Z" fill="#8A5A7C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M126 130 v-14 M116 130 v-14 M136 130 v-14" stroke="${INK}" stroke-width="2" opacity=".5"/>
        <circle cx="126" cy="150" r="6" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M126 144 v12 M120 150 h12" stroke="${INK}" stroke-width="2"/>
        <ellipse cx="240" cy="168" rx="24" ry="15" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="266" cy="160" r="10" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="259" cy="154" r="5" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="270" cy="154" r="5" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="270" cy="159" r="1.8" fill="${INK}"/>
        <path d="M216 168 q-12 4 -9 13" stroke="${INK}" stroke-width="3" fill="none"/>
        <ellipse cx="300" cy="182" rx="18" ry="12" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="318" cy="176" r="8" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="313" cy="171" r="4" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="322" cy="171" r="4" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="322" cy="175" r="1.5" fill="${INK}"/>
        <path d="M282 182 q-10 3 -7 11" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M240 178 l-8 12 M300 190 l-6 10" stroke="${INK}" stroke-width="3"/>
        <path d="M330 60 q10 -14 24 -8 q-8 10 -24 8 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M352 52 q8 -12 20 -6 q-6 8 -20 6 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    sticks: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Bó đũa và những chiếc đũa rời">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M120 60 L240 176" stroke="#B07A3E" stroke-width="8" stroke-linecap="round"/>
        <path d="M112 68 L232 184" stroke="#B07A3E" stroke-width="8" stroke-linecap="round"/>
        <path d="M128 68 L248 184" stroke="#B07A3E" stroke-width="8" stroke-linecap="round"/>
        <path d="M120 64 L240 180" stroke="#8A5A7C" stroke-width="3" stroke-linecap="round" opacity=".6"/>
        <path d="M120 60 L240 176" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M112 68 L232 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M128 68 L248 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M120 60 L240 176" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M112 68 L232 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M128 68 L248 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M116 64 L236 180" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M124 64 L244 180" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M120 60 L240 176" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M112 68 L232 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M128 68 L248 184" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M116 64 L236 180" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <path d="M124 64 L244 180" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
        <line x1="116" y1="46" x2="252" y2="196" stroke="${INK}" stroke-width="5" stroke-linecap="round" opacity=".35"/>
        <path d="M300 120 l-6 -30 l22 8 Z" fill="${PAPER}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M316 130 L336 178" stroke="#B07A3E" stroke-width="7" stroke-linecap="round"/>
        <path d="M336 178 l10 6 M336 178 l-2 12" stroke="${INK}" stroke-width="3"/>
        <path d="M316 130 l-14 -6 M316 130 l-2 -14" stroke="${INK}" stroke-width="3"/>
        <path d="M336 178 l10 6 M336 178 l-2 12" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    milkmaid: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Cô gái bán sữa và bình sữa vỡ">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <circle cx="176" cy="96" r="14" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M162 90 q14 -20 28 0 q-14 -6 -28 0 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M164 108 h24 l-4 46 h-16 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M166 118 l-18 6 M186 118 l18 6" stroke="${INK}" stroke-width="3"/>
        <path d="M170 154 v20 M182 154 v20" stroke="${INK}" stroke-width="3"/>
        <path d="M176 82 q-10 -6 -4 -14" stroke="${INK}" stroke-width="3"/>
        <rect x="156" y="62" width="40" height="20" rx="8" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <path d="M176 62 v-10 M170 52 h12" stroke="${INK}" stroke-width="3"/>
        <path d="M176 52 l-6 -8 M176 52 l6 -8" stroke="${INK}" stroke-width="3" stroke-linecap="round"/>
        <path d="M120 176 q-10 -8 -4 -18 q10 6 4 18 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M104 182 q-8 -6 -3 -14 q8 4 3 14 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M96 190 q-7 -5 -2 -12 q7 3 2 12 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M136 188 q-8 -5 -3 -13 q8 4 3 13 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M128 176 q-6 -5 -2 -10 q6 3 2 10 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M112 178 q-9 -4 -6 -13 q9 3 6 13 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M262 96 q10 -14 24 -8 q-8 10 -24 8 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M284 88 q8 -12 20 -6 q-6 8 -20 6 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    frog: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Ếch phồng bụng và con bò to lớn">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="120" cy="172" rx="52" ry="30" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <path d="M86 152 q-14 -16 -4 -26 q12 10 4 26 Z M154 152 q14 -16 4 -26 q-12 10 -4 26 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="104" cy="150" r="8" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="136" cy="150" r="8" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <circle cx="106" cy="149" r="2.5" fill="${INK}"/>
        <circle cx="134" cy="149" r="2.5" fill="${INK}"/>
        <path d="M112 168 q8 8 16 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <ellipse cx="120" cy="178" rx="8" ry="5" fill="#8FB080" stroke="${INK}" stroke-width="2"/>
        <path d="M120 196 v-8 M120 196 l-8 6 M120 196 l8 6" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="280" cy="160" rx="52" ry="36" fill="#B07A3E" stroke="${INK}" stroke-width="4"/>
        <circle cx="240" cy="128" r="18" fill="#B07A3E" stroke="${INK}" stroke-width="4"/>
        <path d="M226 116 l-5 -13 l10 6 Z M254 116 l5 -13 l-10 6 Z" fill="#B07A3E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="234" cy="132" r="3" fill="${INK}"/>
        <circle cx="250" cy="132" r="3" fill="${INK}"/>
        <path d="M238 142 q6 5 12 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <rect x="256" y="190" width="16" height="10" rx="5" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
        <rect x="288" y="190" width="16" height="10" rx="5" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
        <path d="M330 140 q16 -4 18 12 q-14 2 -18 -2 q-2 8 -10 2 Z" fill="#B07A3E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M120 132 q-10 -6 -6 -14" stroke="${INK}" stroke-width="3" opacity=".5"/>
      </svg>`,

    bellcat: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Chú mèo đeo chuông và lũ chuột bàn kế">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="200" cy="150" rx="40" ry="24" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="166" cy="120" r="16" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M152 108 l-8 -12 l10 6 Z M178 106 l8 -12 l-10 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="160" cy="118" r="2.5" fill="${INK}"/>
        <circle cx="172" cy="118" r="2.5" fill="${INK}"/>
        <path d="M164 126 h6 l-3 4 Z" fill="${INK}"/>
        <path d="M162 134 q4 4 8 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <circle cx="200" cy="168" r="7" fill="#C4452F" stroke="${INK}" stroke-width="3"/>
        <path d="M200 161 v-3 M196 161 h8" stroke="${INK}" stroke-width="2"/>
        <path d="M196 175 l-3 5 M204 175 l3 5" stroke="${INK}" stroke-width="3"/>
        <path d="M160 174 q-14 -6 -12 -18 q12 2 12 12 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M240 174 q14 -6 12 -18 q-12 2 -12 12 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M200 174 v8 M200 182 l-6 8 M200 182 l6 8" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="96" cy="186" rx="14" ry="9" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="112" cy="180" r="7" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="108" cy="176" r="3" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="116" cy="176" r="3" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="116" cy="179" r="1.2" fill="${INK}"/>
        <path d="M82 186 q-9 3 -6 10" stroke="${INK}" stroke-width="3" fill="none"/>
        <path d="M300 188 q-8 -6 -3 -14 q8 4 3 14 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="308" cy="182" r="5" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="311" cy="180" r="1.5" fill="${INK}"/>
      </svg>`,

    manger: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Chó nằm trong máng cỏ và đàn bò">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M96 132 h120 v56 h-120 Z" fill="#B07A3E" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M96 132 l60 -22 l60 22 Z" fill="#8A5A7C" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M120 132 v-12 M156 132 v-16 M192 132 v-12" stroke="${INK}" stroke-width="3" opacity=".5"/>
        <path d="M110 140 q8 -6 16 0 M140 138 q8 -6 16 0 M170 140 q8 -6 16 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="156" cy="160" rx="26" ry="15" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="184" cy="148" r="11" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M176 141 q-2 -9 6 -10 q5 7 1 13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="188" cy="145" r="2.2" fill="${INK}"/>
        <path d="M192 146 l10 2 l-8 4 Z" fill="${INK}"/>
        <path d="M130 160 q-10 -5 -8 -14 q10 3 8 14 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M156 172 v6 M156 178 l-5 7 M156 178 l5 7" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="296" cy="170" rx="34" ry="24" fill="#B07A3E" stroke="${INK}" stroke-width="4"/>
        <circle cx="264" cy="146" r="14" fill="#B07A3E" stroke="${INK}" stroke-width="4"/>
        <path d="M254 136 l-4 -11 l8 5 Z M274 136 l4 -11 l-8 5 Z" fill="#B07A3E" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="260" cy="148" r="2.5" fill="${INK}"/>
        <circle cx="270" cy="148" r="2.5" fill="${INK}"/>
        <path d="M262 156 q5 4 10 0" stroke="${INK}" stroke-width="3" fill="none"/>
        <rect x="278" y="190" width="14" height="8" rx="4" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
        <rect x="302" y="190" width="14" height="8" rx="4" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    axe: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Anh tiều phu nhận chiếc rìu vàng bên sông">
        <path d="M0 168 Q 190 158 386 164 L386 224 L0 224 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M60 166 q 30 -6 60 0 M190 164 q 30 -6 60 0 M320 164 q 30 -6 60 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".4"/>
        <circle cx="96" cy="110" r="13" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M82 104 q13 -19 28 0 q-14 -5 -28 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M84 122 h24 l-4 40 h-16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M86 132 l-20 6 M106 132 l20 6" stroke="${INK}" stroke-width="3"/>
        <path d="M90 162 v20 M102 162 v20" stroke="${INK}" stroke-width="3"/>
        <path d="M96 106 q-8 -6 -4 -13" stroke="${INK}" stroke-width="3"/>
        <path d="M108 96 l26 6 l-24 12 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M134 102 l26 6 l-24 12 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M160 108 l26 6 l-24 12 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="252" cy="120" r="11" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M240 114 q11 -16 22 0 q-11 -4 -22 0 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M242 130 h20 l-3 26 h-14 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M244 140 l-14 8 M260 140 l14 8" stroke="${INK}" stroke-width="3"/>
        <path d="M248 156 v16 M256 156 v16" stroke="${INK}" stroke-width="3"/>
        <path d="M252 126 q-8 -6 -4 -12" stroke="${INK}" stroke-width="3"/>
        <path d="M330 96 q10 -14 24 -8 q-8 10 -24 8 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    hen: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Gà mái tí hon với hạt lúa và ổ bánh mì">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="140" cy="176" rx="34" ry="22" fill="#C4452F" stroke="${INK}" stroke-width="4"/>
        <circle cx="176" cy="158" r="13" fill="#C4452F" stroke="${INK}" stroke-width="4"/>
        <path d="M170 148 q-2 -10 7 -11 q5 8 1 14 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M188 156 l14 2 l-12 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="180" cy="155" r="2.2" fill="${INK}"/>
        <path d="M110 172 q-14 -6 -12 -18 q12 2 12 12 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M126 192 l-4 8 M140 192 l-2 8 M154 192 l-4 8" stroke="${INK}" stroke-width="3"/>
        <path d="M230 96 h52 v40 h-52 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M230 96 l26 -14 l26 14 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M256 96 v-14 M246 96 v-14 M266 96 v-14" stroke="${INK}" stroke-width="2" opacity=".5"/>
        <path d="M256 122 v14 M256 136 l-8 8 M256 136 l8 8" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="316" cy="150" rx="24" ry="15" fill="#B07A3E" stroke="${INK}" stroke-width="3"/>
        <path d="M300 148 q4 -8 12 -6 q-2 8 -12 6 Z M328 150 q4 -8 12 -6 q-2 8 -12 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M316 150 v8" stroke="${INK}" stroke-width="3"/>
        <path d="M316 158 l-5 7 M316 158 l5 7" stroke="${INK}" stroke-width="3"/>
        <path d="M96 130 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    stork: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Cáo và cò bên những chiếc bình súp">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="120" cy="168" rx="26" ry="15" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <circle cx="96" cy="146" r="12" fill="#E9A13B" stroke="${INK}" stroke-width="4"/>
        <path d="M86 148 q-8 -10 2 -15 q5 8 -2 15 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="92" cy="143" r="2.2" fill="${INK}"/>
        <path d="M104 142 l-4 -12 l8 6 Z M116 142 l2 -12 l-6 9 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M146 160 q16 -4 18 8 q-14 2 -18 -2 q-2 8 -10 2 Z" fill="#E9A13B" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M164 168 q5 2 3 7 q-8 -2 -3 -7 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M108 182 v-8 M120 182 v-8 M132 182 v-8" stroke="${INK}" stroke-width="3"/>
        <path d="M120 84 L120 176" stroke="${INK}" stroke-width="4"/>
        <ellipse cx="120" cy="80" rx="9" ry="7" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <path d="M129 78 l16 3 l-14 7 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="147" cy="81" r="2.5" fill="${INK}"/>
        <path d="M120 176 l-8 12 M120 176 l8 12" stroke="${INK}" stroke-width="3"/>
        <path d="M252 84 L252 176" stroke="${INK}" stroke-width="4"/>
        <ellipse cx="252" cy="80" rx="9" ry="7" fill="${PAPER}" stroke="${INK}" stroke-width="3"/>
        <path d="M261 78 l16 3 l-14 7 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="279" cy="81" r="2.5" fill="${INK}"/>
        <path d="M252 176 l-8 12 M252 176 l8 12" stroke="${INK}" stroke-width="3"/>
        <path d="M252 100 q-6 -12 4 -16 q6 10 -4 16 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    wolfsheep: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Sói đội lốt cừu lẫn trong đàn">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <ellipse cx="96" cy="176" rx="30" ry="20" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <circle cx="124" cy="158" r="13" fill="${PAPER}" stroke="${INK}" stroke-width="4"/>
        <path d="M114 150 q-2 -10 7 -11 q5 8 1 14 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="120" cy="155" r="2.2" fill="${INK}"/>
        <path d="M130 156 l10 2 l-8 4 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M70 172 q-12 -5 -10 -15 q12 2 10 15 Z" fill="${PAPER}" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M84 192 l-4 8 M98 192 l-2 8 M112 192 l-4 8" stroke="${INK}" stroke-width="3"/>
        <ellipse cx="216" cy="178" rx="34" ry="22" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <circle cx="248" cy="158" r="14" fill="#8A8F9C" stroke="${INK}" stroke-width="4"/>
        <path d="M238 148 q-2 -10 8 -11 q5 8 1 14 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="245" cy="155" r="2.5" fill="${INK}"/>
        <path d="M255 156 l12 2 l-10 5 Z" fill="${INK}"/>
        <path d="M190 176 q-12 -5 -10 -15 q12 2 10 15 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M204 196 l-4 8 M218 196 l-2 8 M232 196 l-4 8" stroke="${INK}" stroke-width="3"/>
        <path d="M296 96 q10 -14 24 -8 q-8 10 -24 8 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M318 88 q8 -12 20 -6 q-6 8 -20 6 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M330 60 h-20 M330 60 v14 M330 60 l-12 -6 M330 60 l12 -6" stroke="${INK}" stroke-width="3" stroke-linecap="round" opacity=".5"/>
      </svg>`,

    crocodile: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Khỉ trên cây và cá sấu dưới sông">
        <path d="M0 172 Q 190 162 386 168 L386 224 L0 224 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M60 170 q 30 -6 60 0 M190 168 q 30 -6 60 0 M320 168 q 30 -6 60 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".4"/>
        <path d="M96 60 h18 v120 h-18 Z" fill="#B07A3E" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M96 84 l-24 -18 M114 104 l26 -16" stroke="${INK}" stroke-width="4"/>
        <circle cx="66" cy="64" r="20" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="100" cy="52" r="24" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="136" cy="72" r="18" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="60" cy="92" r="14" fill="#4E7A57" stroke="${INK}" stroke-width="3"/>
        <circle cx="66" cy="72" r="8" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M58 72 h16 l-3 13 h-10 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="120" cy="52" r="10" fill="#8A8F9C" stroke="${INK}" stroke-width="3"/>
        <circle cx="124" cy="50" r="2" fill="${INK}"/>
        <path d="M128 50 l8 2 l-7 3 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M112 58 l-6 6 M118 60 l-4 8" stroke="${INK}" stroke-width="3"/>
        <path d="M210 180 q-10 -26 20 -34 q6 -22 28 -10 q24 4 20 30 q-2 14 -18 16 h-46 Z" fill="#4E7A57" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M258 118 l-8 -18 l10 8 Z M278 112 l10 -16 l-6 12 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="282" cy="140" r="16" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <circle cx="277" cy="137" r="2.5" fill="${PAPER}"/>
        <path d="M296 146 l22 4 l-20 8 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M318 150 l12 2 l-10 5 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M330 152 l10 2 l-8 4 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M216 196 q-6 -14 4 -20 q10 8 -4 20 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M252 196 q-6 -14 4 -20 q10 8 -4 20 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    starfruit: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Cây khế, con chim lạ và túi vàng">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M190 60 L190 202" stroke="#B07A3E" stroke-width="10" stroke-linecap="round"/>
        <path d="M190 96 q-40 -6 -56 -40 q36 0 56 24 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M190 130 q40 -6 56 -40 q-36 0 -56 24 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M190 76 q-30 -4 -44 -28 q30 2 44 18 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M190 108 q30 -4 44 -28 q-30 2 -44 18 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="152" cy="58" r="8" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="228" cy="100" r="8" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="160" cy="96" r="7" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <path d="M150 52 l-3 -3 l3 -3 l3 3 Z M222 94 l-3 -3 l3 -3 l3 3 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M60 96 q-10 -16 4 -22 q10 12 -4 22 Z" fill="${INK}"/>
        <path d="M52 90 q-14 -6 -12 -18 q12 2 12 12 Z" fill="${INK}"/>
        <path d="M64 84 l-6 -14 l9 6 Z" fill="${INK}"/>
        <path d="M76 96 l12 -4 l-10 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M64 104 l-4 10 M72 106 l-2 8" stroke="${INK}" stroke-width="3"/>
        <path d="M280 150 q-14 -8 -8 -22 q14 6 8 22 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M296 146 q-10 -6 -6 -16 q10 4 6 16 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="312" cy="148" r="9" fill="#E9A13B" stroke="${INK}" stroke-width="3"/>
        <circle cx="308" cy="146" r="2" fill="${INK}"/>
        <path d="M318 146 l10 2 l-8 4 Z" fill="${INK}"/>
        <path d="M284 166 l-6 10 M300 166 l-4 10" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    tamcam: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Tấm và chiếc hài bên hoàng cung">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M300 60 h60 v142 h-60 Z" fill="#F7E9CA" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M300 60 l30 -22 l30 22 Z" fill="#C4452F" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M310 60 v142 M320 60 v142 M330 60 v142 M340 60 v142 M350 60 v142" stroke="${INK}" stroke-width="2" opacity=".5"/>
        <path d="M300 130 h60 M300 150 h60" stroke="${INK}" stroke-width="2" opacity=".5"/>
        <path d="M300 96 h60" stroke="${INK}" stroke-width="2" opacity=".5"/>
        <circle cx="160" cy="110" r="14" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M146 104 q14 -20 28 0 q-14 -6 -28 0 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M148 122 h24 l-4 52 h-16 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M150 132 l-20 6 M170 132 l20 6" stroke="${INK}" stroke-width="3"/>
        <path d="M154 174 v18 M166 174 v18" stroke="${INK}" stroke-width="3"/>
        <path d="M160 106 q-8 -6 -4 -13" stroke="${INK}" stroke-width="3"/>
        <path d="M150 174 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M170 176 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M206 180 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M96 150 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M80 138 q-8 -12 4 -16 q6 10 -4 16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    mountain: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Sơn Tinh và Mị Nương trên núi, Thủy Tinh dâng nước">
        <path d="M0 196 Q 190 184 386 192" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M60 196 q 30 -8 60 0 M190 192 q 30 -8 60 0 M320 192 q 30 -8 60 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".4"/>
        <path d="M40 200 L150 60 L260 200 Z" fill="#4E7A57" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M150 60 L150 200" stroke="${INK}" stroke-width="3" opacity=".5"/>
        <path d="M40 200 L150 60 L260 200 Z" fill="none" stroke="${INK}" stroke-width="3" opacity=".4"/>
        <path d="M100 200 L150 120 L200 200 Z" fill="#8FB080" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M150 120 L150 200" stroke="${INK}" stroke-width="2" opacity=".4"/>
        <circle cx="150" cy="96" r="11" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M138 90 q12 -17 24 0 q-12 -5 -24 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M140 106 h20 l-3 20 h-14 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M142 116 l-12 8 M158 116 l12 8" stroke="${INK}" stroke-width="3"/>
        <path d="M146 126 v12 M154 126 v12" stroke="${INK}" stroke-width="3"/>
        <path d="M150 92 q-8 -6 -4 -12" stroke="${INK}" stroke-width="3"/>
        <path d="M290 150 q-16 -6 -14 -20 q16 4 14 20 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M312 160 q-14 -5 -12 -18 q14 3 12 18 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M334 168 q-12 -4 -10 -16 q12 3 10 16 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M306 140 q-10 -4 -8 -14 q10 3 8 14 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M150 200 l-6 8 M150 200 l6 8" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    watermelon: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Hoang đảo với những quả dưa hấu">
        <path d="M0 176 Q 190 166 386 172 L386 224 L0 224 Z" fill="#DCE7F1" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M60 174 q 30 -6 60 0 M190 172 q 30 -6 60 0 M320 172 q 30 -6 60 0" stroke="${INK}" stroke-width="3" fill="none" opacity=".4"/>
        <path d="M60 176 q 70 -40 150 -20 q 90 22 120 -4 L330 224 L30 224 Z" fill="#E4ECDD" stroke="${INK}" stroke-width="4" stroke-linejoin="round"/>
        <path d="M60 176 q 70 -40 150 -20 q 90 22 120 -4" fill="none" stroke="${INK}" stroke-width="3" opacity=".4"/>
        <ellipse cx="140" cy="196" rx="34" ry="22" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <path d="M140 174 q-16 -8 -14 -22 q16 4 14 22 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M120 192 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M160 194 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <ellipse cx="240" cy="200" rx="28" ry="18" fill="#4E7A57" stroke="${INK}" stroke-width="4"/>
        <path d="M240 182 q-13 -6 -11 -18 q13 3 11 18 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M224 196 q-7 -5 -2 -11 q7 3 2 11 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M256 198 q-7 -5 -2 -11 q7 3 2 11 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M292 140 q-10 -16 4 -22 q10 12 -4 22 Z" fill="${INK}"/>
        <path d="M284 134 q-14 -6 -12 -18 q12 2 12 12 Z" fill="${INK}"/>
        <path d="M296 128 l-6 -14 l9 6 Z" fill="${INK}"/>
        <path d="M308 140 l12 -4 l-10 6 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M296 148 l-4 10 M304 150 l-2 8" stroke="${INK}" stroke-width="3"/>
        <path d="M96 150 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`,

    milktree: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Cậu bé ôm cây vú sữa">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <path d="M180 60 L180 202" stroke="#B07A3E" stroke-width="10" stroke-linecap="round"/>
        <path d="M180 96 q-40 -6 -56 -40 q36 0 56 24 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M180 130 q40 -6 56 -40 q-36 0 -56 24 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M180 76 q-30 -4 -44 -28 q30 2 44 18 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M180 108 q30 -4 44 -28 q-30 2 -44 18 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <circle cx="142" cy="60" r="9" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <circle cx="222" cy="104" r="9" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <circle cx="150" cy="100" r="8" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <circle cx="212" cy="56" r="8" fill="#C96F85" stroke="${INK}" stroke-width="3"/>
        <path d="M180 140 q-6 -4 -4 -10 q6 2 4 10 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M180 150 q-6 -4 -4 -10 q6 2 4 10 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <circle cx="160" cy="150" r="11" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M148 144 q12 -17 24 0 q-12 -5 -24 0 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M150 160 h20 l-3 24 h-14 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M152 170 l-12 8 M168 170 l12 8" stroke="${INK}" stroke-width="3"/>
        <path d="M156 184 v14 M164 184 v14" stroke="${INK}" stroke-width="3"/>
        <path d="M160 146 q-8 -6 -4 -12" stroke="${INK}" stroke-width="3"/>
        <path d="M180 184 v-16 M180 184 l-8 8 M180 184 l8 8" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    thachsanh: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Thạch Sanh với cây đàn thần và con đại bàng">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <circle cx="150" cy="116" r="13" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M136 110 q14 -20 28 0 q-14 -6 -28 0 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M138 128 h24 l-4 52 h-16 Z" fill="#4E7A57" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M140 138 l-18 6 M160 138 l18 6" stroke="${INK}" stroke-width="3"/>
        <path d="M144 180 v16 M156 180 v16" stroke="${INK}" stroke-width="3"/>
        <path d="M150 112 q-8 -6 -4 -13" stroke="${INK}" stroke-width="3"/>
        <path d="M120 96 l-6 -18 l12 8 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M114 78 l-4 -14" stroke="${INK}" stroke-width="3"/>
        <path d="M176 96 l6 -18 l-12 8 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M182 78 l4 -14" stroke="${INK}" stroke-width="3"/>
        <path d="M240 60 q-14 -8 -8 -22 q14 6 8 22 Z" fill="${INK}"/>
        <path d="M232 54 q-16 -8 -14 -22 q16 4 14 22 Z" fill="${INK}"/>
        <path d="M248 48 l-8 -16 l11 7 Z" fill="${INK}"/>
        <path d="M262 58 l14 -4 l-12 7 Z" fill="#E9A13B" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/>
        <path d="M250 70 l-4 12 M258 72 l-2 10" stroke="${INK}" stroke-width="3"/>
        <path d="M300 120 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M318 112 q-8 -12 4 -16 q6 10 -4 16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M280 140 l-6 12 M296 140 l-4 12" stroke="${INK}" stroke-width="3"/>
      </svg>`,

    onion: `
      <svg viewBox="0 0 384 221" role="img" aria-label="Cậu bé rao bán hành và lão phú ông tham lam">
        <path d="M0 202 Q 190 190 386 198" fill="none" stroke="${INK}" stroke-width="4"/>
        <path d="M30 202 l4 10 M70 198 l-3 12 M300 198 l4 11" stroke="${INK}" stroke-width="3" fill="none" opacity=".6"/>
        <circle cx="130" cy="120" r="13" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M116 114 q14 -20 28 0 q-14 -6 -28 0 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M118 132 h24 l-4 48 h-16 Z" fill="#C96F85" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M120 142 l-18 6 M140 142 l18 6" stroke="${INK}" stroke-width="3"/>
        <path d="M124 180 v16 M136 180 v16" stroke="${INK}" stroke-width="3"/>
        <path d="M130 116 q-8 -6 -4 -13" stroke="${INK}" stroke-width="3"/>
        <path d="M96 196 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M112 198 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M128 200 q-8 -6 -3 -13 q8 4 3 13 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M104 190 l-2 -8 M120 192 l-2 -8" stroke="${INK}" stroke-width="2"/>
        <circle cx="268" cy="120" r="12" fill="#F2C9A0" stroke="${INK}" stroke-width="3"/>
        <path d="M255 114 q13 -18 26 0 q-13 -5 -26 0 Z" fill="#8A8F9C" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M257 130 h22 l-3 40 h-16 Z" fill="#5B84A8" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M259 140 l-14 8 M277 140 l14 8" stroke="${INK}" stroke-width="3"/>
        <path d="M263 170 v16 M273 170 v16" stroke="${INK}" stroke-width="3"/>
        <path d="M268 116 q-8 -6 -4 -12" stroke="${INK}" stroke-width="3"/>
        <path d="M300 150 q-8 -14 4 -18 q6 12 -4 18 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M316 142 q-8 -12 4 -16 q6 10 -4 16 Z" fill="#C4452F" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
        <path d="M330 158 q-7 -12 3 -15 q5 10 -3 15 Z" fill="#E9A13B" stroke="${INK}" stroke-width="3" stroke-linejoin="round"/>
      </svg>`
  };

  /* ---- State ---- */

  const grid = document.getElementById("story-grid");
  const reader = document.getElementById("reader");
  const els = {
    count: document.getElementById("story-count"),
    back: document.getElementById("btn-back"),
    title: document.getElementById("reader-title"),
    sub: document.getElementById("reader-sub"),
    eyebrow: document.getElementById("story-eyebrow"),
    storyTitle: document.getElementById("story-title"),
    columns: document.getElementById("story-columns"),
    moralText: document.getElementById("moral-text"),
    pos: document.getElementById("reader-pos"),
    prev: document.getElementById("btn-prev"),
    next: document.getElementById("btn-next"),
    fontDown: document.getElementById("btn-font-down"),
    fontUp: document.getElementById("btn-font-up"),
    langBtns: Array.from(document.querySelectorAll(".lang-btn")),
    readBtn: document.getElementById("btn-read"),
    readPos: document.getElementById("read-pos")
  };

  let current = 0;
  let lastOpener = null;
  let fs = parseFloat(localStorage.getItem("tsn_fs")) || 1.08;
  let lang = localStorage.getItem("tsn_lang") || "both";

  let reading = false;
  let readPaused = false;
  let readIdx = 0;
  let readTimer = null;
  let readGen = 0;
  let readLang = localStorage.getItem("tsn_read_lang") || "en";
  let enVoices = [];
  let viVoices = [];

  /* ---- Engine đọc tiếng Anh / tiếng Việt ----
     speechSynthesis (native) rất hay hỏng trên Chrome/Android (im lặng, sự kiện
     không bắn, getVoices() rỗng). Trên Android ta dùng engine audio: phát file
     TTS qua thẻ <audio> — chạy chắc chắn trên mọi trình duyệt di động. */
  const IS_ANDROID = /Android/i.test(navigator.userAgent || "");
  const HAS_NATIVE_TTS = typeof window.speechSynthesis !== "undefined" && !!window.speechSynthesis;
  const USE_AUDIO_TTS = IS_ANDROID || !HAS_NATIVE_TTS;

  const TTS_BASE = "https://translate.googleapis.com/translate_tts?ie=UTF-8&client=gtx&tl=";
  let audioEl = null;

  let toastTimer = null;
  function showToast(msg) {
    let t = document.querySelector(".tts-toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "tts-toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-visible"), 3000);
  }

  function stopAudioTTS() {
    if (!audioEl) return;
    const a = audioEl;
    audioEl = null;
    try {
      a.pause();
      a.removeAttribute("src");
      a.load();
    } catch (_) {}
  }

  function refreshVoices() {
    if (!HAS_NATIVE_TTS) return;
    const all = window.speechSynthesis.getVoices();
    enVoices = all.filter((v) => /^en/i.test(v.lang));
    viVoices = all.filter((v) => /^vi/i.test(v.lang));
  }
  if (HAS_NATIVE_TTS) {
    refreshVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshVoices);
  }

  const FS_MIN = 0.885;
  const FS_MAX = 1.385;

  /* ---- Render cards ---- */

  function cardHTML(s) {
    return `
      <article class="story-card card-${s.color}">
        <button class="card-hit" type="button" data-id="${s.id}"
          aria-label="Đọc truyện ${s.title.vi} — ${s.title.en}"></button>
        <div class="scene panel-${s.color}">${SCENES[s.scene]}</div>
        <div class="card-body">
          <h3 class="card-title-vi">${s.title.vi}</h3>
          <p class="card-title-en">${s.title.en}</p>
          <p class="card-excerpt">${s.excerpt.vi}</p>
          <span class="card-moral">Bài học: ${s.moral.vi}</span>
        </div>
      </article>`;
  }

  const cards = STORIES.map(cardHTML);
  cards.splice(3, 0, adSlotHTML(ADS.slotGrid));
  grid.innerHTML = cards.join("");
  els.count.textContent = String(STORIES.length);

  grid.addEventListener("click", (e) => {
    const hit = e.target.closest(".card-hit");
    if (!hit) return;
    openStory(STORIES.findIndex((s) => s.id === hit.dataset.id));
  });

  /* ---- Reader ---- */

  function applyFontSize() {
    document.documentElement.style.setProperty("--fs", fs.toFixed(3) + "rem");
  }

  function applyLang() {
    document.body.dataset.lang = lang;
    els.langBtns.forEach((b) => b.classList.toggle("is-active", b.dataset.mode === lang));
  }

  /* ---- Đọc truyện (read-along) ---- */

  function highlightPara(i) {
    els.columns.querySelectorAll(".para").forEach((p) => {
      p.classList.toggle("is-current", Number(p.dataset.i) === i);
    });
  }

  function speakNative(text, done, onStart, langCode) {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    const isVi = langCode === "vi";
    u.lang = isVi ? "vi-VN" : "en-US";
    u.rate = 0.95;
    const pool = isVi ? viVoices : enVoices;
    const voice =
      pool.find((v) => (isVi ? /vi[-_]VN/i.test(v.lang) : /en[-_]US/i.test(v.lang)) && /Google|Natural|Samantha|Microsoft|Zira|Huong|Lan|Chi|An/i.test(v.name)) ||
      pool.find((v) => (isVi ? /^vi/i.test(v.lang) : /en[-_]US/i.test(v.lang))) ||
      pool[0];
    if (voice) {
      try {
        u.voice = voice;
      } catch (_) {}
    }
    u.onend = done;
    u.onerror = done;
    if (onStart) onStart();
    synth.speak(u);
  }

  function speak(text, onDone, guard, onStart, langCode) {
    clearTimeout(readTimer);
    let fired = false;
    let timerId = null;
    const done = () => {
      if (fired) return;
      fired = true;
      if (timerId !== null) {
        clearTimeout(timerId);
        timerId = null;
      }
      if (guard && !guard()) return;
      onDone();
    };
    const watchdog = Math.max(3600, text.split(/\s+/).length * 1950);

    if (USE_AUDIO_TTS) {
      stopAudioTTS();
      const a = new Audio(TTS_BASE + (langCode || "en") + "&q=" + encodeURIComponent(text));
      audioEl = a;
      let fellBack = false;
      const finish = () => {
        if (audioEl === a) audioEl = null;
        done();
      };
      const fallback = () => {
        if (fellBack) return;
        fellBack = true;
        if (audioEl === a) audioEl = null;
        if (HAS_NATIVE_TTS) speakNative(text, done, onStart, langCode);
        else {
          showToast("Không phát được âm thanh — kiểm tra kết nối mạng");
          done();
        }
      };
      a.addEventListener("ended", finish);
      a.addEventListener("error", fallback);
      a.play()
        .then(() => {
          if (onStart) onStart();
        })
        .catch(fallback);
      timerId = setTimeout(() => {
        timerId = null;
        stopAudioTTS();
        done();
      }, watchdog);
      readTimer = timerId;
      return;
    }

    speakNative(text, done, onStart, langCode);
    timerId = setTimeout(() => {
      timerId = null;
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      done();
    }, watchdog);
    readTimer = timerId;
  }

  function readSentence() {
    const s = STORIES[current];
    const total = s.paragraphs.length;
    if (readIdx >= total) {
      stopReading();
      return;
    }
    const gen = readGen;
    highlightPara(readIdx + 1);
    els.readPos.textContent = `Câu ${readIdx + 1} / ${total}`;
    const cur = els.columns.querySelector(`.para.${readLang}[data-i="${readIdx + 1}"]`);
    if (cur) {
      cur.scrollIntoView({ block: "center", behavior: "smooth" });
      cur.classList.add("is-playing");
    }
    speak(s.paragraphs[readIdx][readLang], () => {
      if (cur) cur.classList.remove("is-playing");
      readIdx += 1;
      readSentence();
    }, () => reading && !readPaused && gen === readGen, null, readLang);
  }

  function startReading() {
    reading = true;
    readPaused = false;
    readIdx = 0;
    reader.classList.add("is-reading");
    els.readPos.hidden = false;
    els.readBtn.textContent = "⏸ Tạm dừng";
    readSentence();
  }

  function pauseReading() {
    readPaused = true;
    clearTimeout(readTimer);
    stopAudioTTS();
    if (HAS_NATIVE_TTS) window.speechSynthesis.cancel();
    els.readBtn.textContent = "▶ Tiếp tục";
  }

  function resumeReading() {
    readPaused = false;
    els.readBtn.textContent = "⏸ Tạm dừng";
    readSentence();
  }

  function stopReading() {
    reading = false;
    readPaused = false;
    readIdx = 0;
    clearTimeout(readTimer);
    stopAudioTTS();
    if (HAS_NATIVE_TTS) window.speechSynthesis.cancel();
    reader.classList.remove("is-reading");
    els.readBtn.textContent = "▶ Đọc truyện";
    els.readPos.hidden = true;
    highlightPara(0);
  }

  /* ---- Click câu để nghe ---- */

  let singleToken = 0;

  function playSingle(i, langCode) {
    singleToken += 1;
    const tok = singleToken;
    if (reading) stopReading();
    highlightPara(i);
    els.columns.querySelectorAll(".para.is-playing").forEach((p) => p.classList.remove("is-playing"));
    const el = els.columns.querySelector(`.para.${langCode}[data-i="${i}"]`);
    if (el) el.classList.add("is-playing");
    const s = STORIES[current];
    speak(s.paragraphs[i - 1][langCode], () => {
      if (tok === singleToken) {
        highlightPara(0);
        if (el) el.classList.remove("is-playing");
      }
    }, null, null, langCode);
  }

  function openStory(i) {
    current = i;
    lastOpener = document.activeElement;
    renderStory();
    reader.hidden = false;
    document.body.style.overflow = "hidden";
    els.back.focus();
  }

  function closeReader() {
    stopReading();
    reader.hidden = true;
    document.body.style.overflow = "";
    if (lastOpener && document.contains(lastOpener)) lastOpener.focus();
  }

  function renderStory() {
    const s = STORIES[current];
    els.title.textContent = s.title.vi;
    els.sub.textContent = s.title.en;
    els.eyebrow.textContent = "Cổ tích & ngụ ngôn · Folk tale";
    els.storyTitle.innerHTML =
      `${s.title.vi}<br><span class="card-title-en">${s.title.en}</span>`;

    els.columns.innerHTML = s.paragraphs
      .map(
        (p, i) =>
          `<p class="para vi" data-i="${i + 1}" role="button" tabindex="0" title="Nghe câu này">${p.vi}</p>` +
          `<p class="para en" data-i="${i + 1}" role="button" tabindex="0" title="Nghe câu này">${p.en}</p>`
      )
      .join("");

    els.moralText.innerHTML =
      `<span class="moral-vi">${s.moral.vi}</span>` +
      `<span class="moral-en">${s.moral.en}</span>`;

    const ad = document.getElementById("reader-ad");
    if (ad && !ad.dataset.loaded) {
      ad.innerHTML = adSlotHTML(ADS.slotReader);
      ad.dataset.loaded = "1";
    }

    els.pos.textContent = `${current + 1} / ${STORIES.length}`;
    els.prev.disabled = STORIES.length < 2;
    els.next.disabled = STORIES.length < 2;
    reader.scrollTop = 0;
  }

  function step(delta) {
    stopReading();
    const n = STORIES.length;
    current = (current + delta + n) % n;
    renderStory();
  }

  function applyReadLang() {
    document.querySelectorAll("#read-lang .read-lang-btn").forEach((b) =>
      b.classList.toggle("is-active", b.dataset.readLang === readLang)
    );
  }

  function setReadLang(l) {
    readLang = l;
    localStorage.setItem("tsn_read_lang", l);
    applyReadLang();
    if (reading) {
      readGen += 1;
      clearTimeout(readTimer);
      stopAudioTTS();
      if (HAS_NATIVE_TTS) window.speechSynthesis.cancel();
      els.columns.querySelectorAll(".para.is-playing").forEach((p) => p.classList.remove("is-playing"));
      readSentence();
    }
  }

  /* ---- Events ---- */

  els.back.addEventListener("click", closeReader);
  els.prev.addEventListener("click", () => step(-1));
  els.next.addEventListener("click", () => step(1));

  els.readBtn.addEventListener("click", () => {
    if (!reading) startReading();
    else if (readPaused) resumeReading();
    else pauseReading();
  });

  els.columns.addEventListener("click", (e) => {
    const p = e.target.closest(".para.vi, .para.en");
    if (!p) return;
    playSingle(Number(p.dataset.i), p.classList.contains("en") ? "en" : "vi");
  });

  els.columns.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("para")) {
      e.preventDefault();
      playSingle(Number(e.target.dataset.i), e.target.classList.contains("en") ? "en" : "vi");
    }
  });

  document.querySelectorAll("#read-lang .read-lang-btn").forEach((b) =>
    b.addEventListener("click", () => setReadLang(b.dataset.readLang))
  );

  els.fontDown.addEventListener("click", () => {
    fs = Math.max(FS_MIN, +(fs - 0.065).toFixed(3));
    localStorage.setItem("tsn_fs", String(fs));
    applyFontSize();
  });

  els.fontUp.addEventListener("click", () => {
    fs = Math.min(FS_MAX, +(fs + 0.065).toFixed(3));
    localStorage.setItem("tsn_fs", String(fs));
    applyFontSize();
  });

  els.langBtns.forEach((b) =>
    b.addEventListener("click", () => {
      lang = b.dataset.mode;
      localStorage.setItem("tsn_lang", lang);
      applyLang();
    })
  );

  document.addEventListener("keydown", (e) => {
    if (reader.hidden) return;
    if (e.key === "Escape") closeReader();
    if (e.key === "ArrowLeft" && !e.target.closest("input, textarea, select")) step(-1);
    if (e.key === "ArrowRight" && !e.target.closest("input, textarea, select")) step(1);
  });

  /* ---- Init ---- */

  applyFontSize();
  applyLang();
  applyReadLang();
  loadAdsScript();

  const sideLeft = document.getElementById("side-ad-left");
  const sideRight = document.getElementById("side-ad-right");
  if (sideLeft) sideLeft.innerHTML = sideAdHTML(ADS.slotLeft);
  if (sideRight) sideRight.innerHTML = sideAdHTML(ADS.slotRight);
})();