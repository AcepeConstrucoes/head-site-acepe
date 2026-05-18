import React from "react";

const HERO_VIDEO_URL =
  "https://video.wixstatic.com/video/7a108b_2b04b7c20ee741b3b3157a755932f512/1080p/mp4/file.mp4";

const HERO_CARD_IMAGE =
  "https://static.wixstatic.com/media/7a108b_44dd1ef02dfc4c1a9c8a2ef71fa4eadd~mv2.png";

const PRIMARY_BUTTON_URL = "PASTE_PRIMARY_BUTTON_URL_HERE";
const SECONDARY_BUTTON_URL = "PASTE_SECONDARY_BUTTON_URL_HERE";

export function getAcepeHeroWixHtml() {
  return `
<section class="acepe-hero">
  <video class="acepe-video" autoplay muted loop playsinline>
    <source src="${HERO_VIDEO_URL}" type="video/mp4" />
  </video>

  <div class="acepe-overlay"></div>

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
      <img src="${HERO_CARD_IMAGE}" alt="Acepe" />

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

export function runAcepeHeroSmokeTests() {
  return {
    hasHeroVideo: HERO_VIDEO_URL.startsWith("https://video.wixstatic.com/"),
    hasFrontImage: HERO_CARD_IMAGE.startsWith("https://static.wixstatic.com/"),
    hasPrimaryButtonPlaceholder: PRIMARY_BUTTON_URL === "PASTE_PRIMARY_BUTTON_URL_HERE",
    hasSecondaryButtonPlaceholder: SECONDARY_BUTTON_URL === "PASTE_SECONDARY_BUTTON_URL_HERE",
    hasThirtyThousandMetric: getAcepeHeroWixHtml().includes("+30 mil"),
    hasMethodCards: getAcepeHeroWixHtml().includes("Método Acepe"),
  };
}

export default function AcepeHeroPreview() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#142A45] font-sans">
      <style>{`
        .acepe-hero {
          position: relative;
          min-height: 100vh;
          background: #142A45;
          overflow: hidden;
          font-family: Arial, sans-serif;
        }

        .acepe-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 62%;
          height: 100%;
          object-fit: cover;
          opacity: .6;
        }

        .acepe-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to left,#142A45,#142A45 55%,rgba(20,42,69,.15));
        }

        .acepe-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          padding: 40px 24px 80px;
        }

        .acepe-left h1 {
          color: white;
          font-size: 88px;
          line-height: .95;
          letter-spacing: -4px;
          font-weight: 900;
          max-width: 780px;
          margin: 0;
        }

        .acepe-left p {
          margin: 32px 0 0;
          max-width: 620px;
          color: rgba(255,255,255,.72);
          font-size: 22px;
          line-height: 1.8;
        }

        .acepe-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 40px;
        }

        .acepe-btn {
          height: 56px;
          padding: 0 34px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          font-size: 16px;
          font-weight: 700;
          transition: .3s;
        }

        .acepe-btn-primary {
          background: #2F5D8C;
          color: white;
        }

        .acepe-btn-primary span {
          margin-left: 12px;
          font-size: 22px;
        }

        .acepe-btn-secondary {
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.05);
          color: white;
          backdrop-filter: blur(10px);
        }

        .acepe-stats {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 16px;
          margin-top: 56px;
        }

        .acepe-stat-card {
          padding: 24px;
          border-radius: 24px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(10px);
        }

        .acepe-stat-card strong {
          display: block;
          color: #8DB5DD;
          font-size: 34px;
          font-weight: 900;
        }

        .acepe-stat-card span {
          display: block;
          margin-top: 10px;
          color: rgba(255,255,255,.6);
          font-size: 14px;
        }

        .acepe-right {
          position: relative;
          min-height: 760px;
          border-radius: 40px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          box-shadow: 0 30px 80px rgba(0,0,0,.35);
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
          padding: 24px;
          border-radius: 28px;
          background: rgba(20,42,69,.82);
          border: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(12px);
        }

        .acepe-method-card small {
          color: #8DB5DD;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .2em;
          font-weight: 700;
        }

        .acepe-method-grid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 12px;
          margin-top: 20px;
        }

        .acepe-method-item {
          height: 96px;
          border-radius: 18px;
          background: rgba(255,255,255,.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 12px;
          text-align: center;
        }

        .acepe-method-item span {
          color: #8DB5DD;
          font-size: 34px;
          line-height: 1;
        }

        .acepe-method-item p {
          margin: 12px 0 0;
          color: rgba(255,255,255,.72);
          font-size: 12px;
          line-height: 1.3;
        }

        @media(max-width: 980px){
          .acepe-container {
            grid-template-columns: 1fr;
          }

          .acepe-video {
            width: 100%;
          }

          .acepe-left h1 {
            font-size: 58px;
          }

          .acepe-right {
            min-height: 560px;
          }

          .acepe-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="acepe-hero">
        <video className="acepe-video" autoPlay muted loop playsInline>
          <source src={HERO_VIDEO_URL} type="video/mp4" />
        </video>

        <div className="acepe-overlay" />

        <div className="acepe-container">
          <div className="acepe-left">
            <h1>Sua residência construída com excelência.</h1>

            <p>
              Engenharia, gestão e execução para transformar projetos exclusivos em obras sólidas, elegantes e bem conduzidas.
            </p>

            <div className="acepe-actions">
              <a href={PRIMARY_BUTTON_URL} className="acepe-btn acepe-btn-primary">
                Solicitar orçamento
                <span>→</span>
              </a>

              <a href={SECONDARY_BUTTON_URL} className="acepe-btn acepe-btn-secondary">
                Ver obras realizadas
              </a>
            </div>

            <div className="acepe-stats">
              <div className="acepe-stat-card">
                <strong>12+</strong>
                <span>anos de experiência</span>
              </div>

              <div className="acepe-stat-card">
                <strong>+30 mil</strong>
                <span>m² construídos</span>
              </div>

              <div className="acepe-stat-card">
                <strong>Dezenas</strong>
                <span>de obras entregues</span>
              </div>
            </div>
          </div>

          <div className="acepe-right">
            <img src={HERO_CARD_IMAGE} alt="Acepe" />

            <div className="acepe-method-card">
              <small>Método Acepe</small>

              <div className="acepe-method-grid">
                <div className="acepe-method-item">
                  <span>⌖</span>
                  <p>Precisão técnica</p>
                </div>

                <div className="acepe-method-item">
                  <span>◷</span>
                  <p>Gestão de prazo</p>
                </div>

                <div className="acepe-method-item">
                  <span>✓</span>
                  <p>Alto padrão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
