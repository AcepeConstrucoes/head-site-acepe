/*
  ACEPE — Hero Custom Element para Wix

  USO NO WIX:
  URL do servidor:
  https://cdn.jsdelivr.net/gh/AcepeConstrucoes/head-site-acepe@main/head-site-acepe.js

  Nome da tag:
  acepe-hero
*/

(function () {
  const HERO_VIDEO_URL = "https://video.wixstatic.com/video/7a108b_2b04b7c20ee741b3b3157a755932f512/1080p/mp4/file.mp4";
  const HERO_CARD_IMAGE = "https://static.wixstatic.com/media/7a108b_44dd1ef02dfc4c1a9c8a2ef71fa4eadd~mv2.png";

  const PRIMARY_BUTTON_URL = "PASTE_PRIMARY_BUTTON_URL_HERE";
  const SECONDARY_BUTTON_URL = "PASTE_SECONDARY_BUTTON_URL_HERE";

  if (typeof window === "undefined" || !window.customElements || !window.HTMLElement) return;

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
            height: 900px;
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
            width: 100%;
            height: 900px;
            
            overflow: hidden;
            background: #142A45;
            color: white;
          }

          .acepe-video {
            position: absolute;
            left: 0;
            top: 0;
            width: 60%;
            height: 900px;
            object-fit: cover;
            opacity: 0.6;
          }

          .acepe-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(
              to left,
              #142A45 0%,
              rgba(20, 42, 69, 0.95) 50%,
              rgba(20, 42, 69, 0.15) 100%
            );
          }

          .acepe-container {
            position: relative;
            z-index: 2;
            width: min(1400px, calc(100% - 48px));
            height: 900px;
            
            margin: 0 auto;
            display: grid;
            grid-template-columns: 0.95fr 0.9fr;
            align-items: start;
            gap: 56px;
            padding-top: 175px;
            padding-bottom: 32px;
          }

          .acepe-left,
          .acepe-right {
            height: 640px;
            min-height: 560px;
          }

          .acepe-left {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 8px;
          }

          .acepe-copy-group {
            display: block;
          }

          .acepe-left h1 {
            max-width: 650px;
            color: #ffffff;
            font-size: clamp(56px, 5.3vw, 82px);
            line-height: 0.98;
            letter-spacing: -0.055em;
            font-weight: 900;
          }

          .acepe-left p {
            margin-top: 24px;
            max-width: 570px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 22px;
            line-height: 1.72;
          }

          .acepe-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 24px;
          }

          .acepe-btn {
            height: 56px;
            padding: 0 36px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 17px;
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
            box-shadow: 0 16px 36px rgba(0, 0, 0, 0.18);
          }

          .acepe-btn-primary:hover {
            background: #3d73ab;
          }

          .acepe-btn-primary span {
            margin-left: 8px;
            font-size: 20px;
            line-height: 1;
          }

          .acepe-btn-secondary {
            border: 1px solid rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.05);
            color: #ffffff;
            backdrop-filter: blur(12px);
          }

          .acepe-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
          }

          .acepe-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            max-width: 610px;
          }

          .acepe-stat-card {
            padding: 16px;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
          }

          .acepe-stat-card strong {
            display: block;
            color: #8DB5DD;
            font-size: 34px;
            font-weight: 900;
            line-height: 1;
          }

          .acepe-stat-card span {
            display: block;
            margin-top: 8px;
            color: rgba(255, 255, 255, 0.6);
            font-size: 14px;
            line-height: 1.35;
          }

          .acepe-right {
            position: relative;
            overflow: hidden;
            border-radius: 36px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow: 0 26px 70px rgba(0, 0, 0, 0.32);
          }

          .acepe-right::before {
            content: "";
            position: absolute;
            inset: -40px;
            z-index: -1;
            border-radius: 48px;
            background: rgba(47, 93, 140, 0.2);
            filter: blur(48px);
          }

          .acepe-right img {
            width: 100%;
            height: 900px;
            object-fit: cover;
            display: block;
          }

          .acepe-right-gradient {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, #142A45 0%, transparent 62%);
          }

          .acepe-method-card {
            position: absolute;
            left: 20px;
            right: 20px;
            bottom: 20px;
            padding: 20px;
            border-radius: 22px;
            background: rgba(20, 42, 69, 0.82);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(12px);
          }

          .acepe-method-card small {
            color: #8DB5DD;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 700;
          }

          .acepe-method-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
            margin-top: 16px;
          }

          .acepe-method-item {
            height: 92px;
            border-radius: 14px;
            background: rgba(255, 255, 255, 0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 12px 8px;
            text-align: center;
          }

          .acepe-method-item span {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #8DB5DD;
            font-size: 36px;
            line-height: 1;
          }

          .acepe-method-item p {
            margin: 8px 0 0;
            min-height: 28px;
            color: rgba(255, 255, 255, 0.72);
            font-size: 13px;
            line-height: 1.25;
          }

          @media (max-width: 1200px) {
            .acepe-left,
            .acepe-right {
              height: 600px;
            }

            .acepe-left h1 {
              font-size: clamp(50px, 5vw, 70px);
            }

            .acepe-left p {
              font-size: 20px;
            }
          }

          @media (max-width: 980px) {
            :host {
              height: auto;
            }
            .acepe-hero {
              height: auto;
              min-height: 900px;
            }

            .acepe-video {
              width: 100%;
              opacity: 0.32;
            }

            .acepe-overlay {
              background: rgba(20, 42, 69, 0.86);
            }

            .acepe-container {
              width: min(100% - 32px, 1400px);
              height: auto;
              min-height: auto;
              grid-template-columns: 1fr;
              gap: 40px;
              padding-top: 120px;
              padding-bottom: 64px;
            }

            .acepe-left,
            .acepe-right {
              height: auto;
              min-height: auto;
            }

            .acepe-left h1 {
              font-size: 46px;
              letter-spacing: -0.04em;
            }

            .acepe-left p {
              font-size: 18px;
              line-height: 1.6;
            }

            .acepe-stats {
              grid-template-columns: 1fr;
              margin-top: 32px;
            }

            .acepe-right {
              min-height: 520px;
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
              height: 82px;
            }
          }
        </style>

        <section class="acepe-hero">
          <video class="acepe-video" autoplay muted loop playsinline>
            <source src="${HERO_VIDEO_URL}" type="video/mp4" />
          </video>

          <div class="acepe-overlay"></div>

          <div class="acepe-container">
            <div class="acepe-left">
              <div class="acepe-copy-group">
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
              <div class="acepe-right-gradient"></div>

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
})();
