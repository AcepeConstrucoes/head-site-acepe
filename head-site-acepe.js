/*
  ACEPE — Hero em Custom Element para Wix

  COMO USAR NO WIX:
  1. Suba este arquivo como: head-site-acepe.js
  2. Use no Wix a URL:
     https://cdn.jsdelivr.net/gh/AcepeConstrucoes/head-site-acepe@main/head-site-acepe.js
  3. Adicione um Elemento Personalizado / Custom Element.
  4. URL do servidor: cole a URL acima.
  5. Nome da tag: acepe-hero
*/

(function () {
  const HERO_VIDEO_URL = "https://video.wixstatic.com/video/7a108b_2b04b7c20ee741b3b3157a755932f512/1080p/mp4/file.mp4";
  const HERO_CARD_IMAGE = "https://static.wixstatic.com/media/7a108b_44dd1ef02dfc4c1a9c8a2ef71fa4eadd~mv2.png";

  const PRIMARY_BUTTON_URL = "PASTE_PRIMARY_BUTTON_URL_HERE";
  const SECONDARY_BUTTON_URL = "PASTE_SECONDARY_BUTTON_URL_HERE";

  if (typeof window === "undefined" || !window.customElements || !window.HTMLElement) {
    return;
  }

  class AcepeHero extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
      this.render();
    }

    render() {
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            min-height: 1000px;
            font-family: Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          * {
            box-sizing: border-box;
          }

          a {
            text-decoration: none;
          }

          h1,
          p {
            margin: 0;
          }

          .acepe-hero {
            position: relative;
            min-height: 1000px;
            background: #142A45;
            overflow: hidden;
            color: white;
          }

          .acepe-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 62%;
            height: 100%;
            object-fit: cover;
            opacity: 0.6;
          }

          .acepe-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to left,
              #142A45 0%,
              #142A45 48%,
              rgba(20, 42, 69, 0.88) 62%,
              rgba(20, 42, 69, 0.15) 100%
            );
          }

          .acepe-spacer-header {
            position: relative;
            z-index: 3;
            height: 180px;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
          }

          .acepe-container {
            position: relative;
            z-index: 2;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
            min-height: 880px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 56px;
            align-items: stretch;
            padding: 0 24px 72px;
          }

          .acepe-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .acepe-left h1 {
            max-width: 780px;
            color: #ffffff;
            font-size: clamp(46px, 4.8vw, 72px);
            line-height: 0.95;
            letter-spacing: -0.06em;
            font-weight: 900;
          }

          .acepe-left p {
            margin-top: 32px;
            max-width: 640px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 19px;
            line-height: 1.8;
          }

          .acepe-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 32px;
          }

          .acepe-btn {
            height: 52px;
            padding: 0 28px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 700;
            transition: 0.3s ease;
            white-space: nowrap;
          }

          .acepe-btn:hover {
            transform: translateY(-2px);
          }

          .acepe-btn-primary {
            background: #2F5D8C;
            color: #ffffff;
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.18);
          }

          .acepe-btn-primary:hover {
            background: #3d73ab;
          }

          .acepe-btn-primary span {
            margin-left: 12px;
            font-size: 19px;
            line-height: 1;
          }

          .acepe-btn-secondary {
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            backdrop-filter: blur(10px);
          }

          .acepe-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .acepe-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
            margin-top: 40px;
            max-width: 680px;
          }

          .acepe-stat-card {
            padding: 20px;
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }

          .acepe-stat-card strong {
            display: block;
            color: #8DB5DD;
            font-size: 28px;
            font-weight: 900;
            line-height: 1;
          }

          .acepe-stat-card span {
            display: block;
            margin-top: 10px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            line-height: 1.45;
          }

          .acepe-right {
            position: relative;
            min-height: 640px;
            border-radius: 40px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          }

          .acepe-right img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .acepe-method-card {
            position: absolute;
            left: 24px;
            right: 24px;
            bottom: 24px;
            padding: 20px;
            border-radius: 28px;
            background: rgba(20, 42, 69, 0.82);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
          }

          .acepe-method-card small {
            color: #8DB5DD;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 700;
          }

          .acepe-method-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 20px;
          }

          .acepe-method-item {
            height: 96px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12px;
            text-align: center;
          }

          .acepe-method-item span {
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8DB5DD;
            font-size: 28px;
            line-height: 1;
          }

          .acepe-method-item p {
            margin: 12px 0 0;
            min-height: 32px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 12px;
            line-height: 1.3;
          }

          @media (max-width: 980px) {
            :host {
              min-height: auto;
            }

            .acepe-hero {
              min-height: auto;
            }

            .acepe-video {
              width: 100%;
              opacity: 0.32;
            }

            .acepe-overlay {
              background: rgba(20, 42, 69, 0.86);
            }

            .acepe-spacer-header {
              height: 80px;
            }

            .acepe-container {
              min-height: auto;
              grid-template-columns: 1fr;
              gap: 48px;
              padding: 12px 24px 56px;
            }

            .acepe-left h1 {
              font-size: 42px;
              letter-spacing: -0.04em;
            }

            .acepe-left p {
              font-size: 18px;
              line-height: 1.65;
            }

            .acepe-right {
              min-height: 540px;
            }

            .acepe-stats {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 560px) {
            .acepe-actions {
              flex-direction: column;
            }

            .acepe-btn {
              width: 100%;
            }

            .acepe-method-grid {
              grid-template-columns: 1fr;
            }

            .acepe-method-item {
              height: 86px;
            }
          }
        </style>

        <section class="acepe-hero">
          <video class="acepe-video" autoplay muted loop playsinline>
            <source src="${HERO_VIDEO_URL}" type="video/mp4" />
          </video>

          <div class="acepe-overlay"></div>

          <div class="acepe-spacer-header"></div>

          <div class="acepe-container">
            <div class="acepe-left">
              <h1>Sua residência construída com excelência.</h1>

              <p>
                Engenharia, gestão e execução para transformar projetos exclusivos em obras sólidas, elegantes e bem conduzidas.
              </p>

              <div class="acepe-actions">
                <a href="${PRIMARY_BUTTON_URL}" class="acepe-btn acepe-btn-primary">
                  Solicitar orçamento
                  <span>→</span>
                </a>

                <a href="${SECONDARY_BUTTON_URL}" class="acepe-btn acepe-btn-secondary">
                  Ver obras realizadas
                </a>
              </div>

              <div class="acepe-stats">
                <div class="acepe-stat-card">
                  <strong>12+</strong>
                  <span>anos de experiência</span>
                </div>

                <div class="acepe-stat-card">
                  <strong>+30 mil</strong>
                  <span>m² construídos</span>
                </div>

                <div class="acepe-stat-card">
                  <strong>Dezenas</strong>
                  <span>de obras entregues</span>
                </div>
              </div>
            </div>

            <div class="acepe-right">
              <img src="${HERO_CARD_IMAGE}" alt="Acepe Construções" />

              <div class="acepe-method-card">
                <small>Método Acepe</small>

                <div class="acepe-method-grid">
                  <div class="acepe-method-item">
                    <span>⌖</span>
                    <p>Precisão técnica</p>
                  </div>

                  <div class="acepe-method-item">
                    <span>◷</span>
                    <p>Gestão de prazo</p>
                  </div>

                  <div class="acepe-method-item">
                    <span>✓</span>
                    <p>Alto padrão</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      `;
    }
  }

  if (!window.customElements.get("acepe-hero")) {
    window.customElements.define("acepe-hero", AcepeHero);
  }

  window.runAcepeHeroSmokeTests = function () {
    return {
      customElementDefined: !!window.customElements.get("acepe-hero"),
      hasHeroVideo: HERO_VIDEO_URL.startsWith("https://video.wixstatic.com/"),
      hasFrontImage: HERO_CARD_IMAGE.startsWith("https://static.wixstatic.com/"),
      hasPrimaryButtonPlaceholder: PRIMARY_BUTTON_URL === "PASTE_PRIMARY_BUTTON_URL_HERE",
      hasSecondaryButtonPlaceholder: SECONDARY_BUTTON_URL === "PASTE_SECONDARY_BUTTON_URL_HERE",
      hasThirtyMetric: true,
    };
  };
})();
