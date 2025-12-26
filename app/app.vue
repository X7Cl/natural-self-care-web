<template>
  <div class="app">
    <!-- Top banner -->
    <header class="topbar">
      <div class="topbar-title">Natural Self-Care</div>
    </header>

    <div class="layout">
      <!-- Left sidebar -->
      <aside class="sidebar">
        <div class="sidebar-top">
          <button class="icon-btn" aria-label="Menu">
            <!-- simple hamburger -->
            <span class="hamburger"></span>
          </button>

          <div class="brand">
            <div class="brand-mark" aria-hidden="true">
              <!-- simple lotus placeholder -->
              <svg width="34" height="34" viewBox="0 0 64 64" fill="none">
                <path d="M32 10c7 8 10 14 10 20 0 6-4 10-10 10s-10-4-10-10c0-6 3-12 10-20Z" fill="#2FBFA6"/>
                <path d="M16 22c9 4 15 9 18 14 3 5 1 10-4 12-5 2-10 0-12-5-2-5-2-11-2-21Z" fill="#77D5C6"/>
                <path d="M48 22c0 10 0 16-2 21-2 5-7 7-12 5-5-2-7-7-4-12 3-5 9-10 18-14Z" fill="#77D5C6"/>
              </svg>
            </div>
            <div class="brand-text">
              <div class="brand-name">Natural Self-Care</div>
            </div>
          </div>
        </div>

        <nav class="nav">
          <NuxtLink class="nav-btn active" to="/">Accueil</NuxtLink>
        </nav>

        <div class="sidebar-bottom">
          <div class="swiss">
  <img
    src="/images/swiss-flag.png"
    alt="Swiss flag"
    class="swiss-flag-img"
  />
  <div class="swiss-text">by ASC Genève - Switzerland</div>
</div>
        </div>
      </aside>

      <!-- Main content -->
      <main class="content">
        <div class="content-header">
          <div class="titles">
            <h1>Se soigner avec des remèdes naturels</h1>
            <p>Résultats établis par la recherche scientifique</p>
          </div>

          <button class="lang-btn" type="button" @click="toggleLang">
            🌐 Langue - {{ languageLabel }}
          </button>
        </div>

        <div class="content-grid">
          <!-- Center CTA column -->
          <section class="cta-col">
            <NuxtLink class="cta" to="/remedes">
              Explorer les remèdes naturels
            </NuxtLink>

            <NuxtLink class="cta" to="/chemins">
              <div>Du symptome au remède, lancer un chemin de décision</div>
            </NuxtLink>

            <NuxtLink class="cta" to="/problemes">
              <div>Liste des problèmes de santé</div>
              <div>(A–Z)</div>
            </NuxtLink>
          </section>

          <!-- Right partners box -->
          <aside class="partners">
            <div class="partners-title">Nos partenaires</div>

            <div class="partners-grid">
              <!-- Remplace les src par tes vraies images (assets/ ou URL Directus) -->
              <div class="partner-logo">
                <img :src="partnerLogos[0]" alt="Partenaire 1" />
              </div>
              <div class="partner-logo">
                <img :src="partnerLogos[1]" alt="Partenaire 2" />
              </div>
              <div class="partner-logo">
                <img :src="partnerLogos[2]" alt="Partenaire 3" />
              </div>
              <div class="partner-logo">
                <img :src="partnerLogos[3]" alt="Partenaire 4" />
              </div>
              <div class="partner-logo span-2">
                <img :src="partnerLogos[4]" alt="Partenaire 5" />
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Natural Self-Care',
  meta: [
    { name: 'description', content: 'Natural Self-Care : remèdes naturels, chemins de décision et problèmes de santé A–Z.' }
  ]
})

const language = ref<'Français' | 'English'>('Français')
const languageLabel = computed(() => language.value)

function toggleLang() {
  language.value = language.value === 'Français' ? 'English' : 'Français'
}

/**
 * Logos : mets tes fichiers dans /public/partners/...
 * ex: /public/partners/unige.png
 * ou remplace par des URLs Directus.
 */
const partnerLogos = [
  '/partners/placeholder-1.png',
  '/partners/placeholder-2.png',
  '/partners/placeholder-3.png',
  '/partners/placeholder-4.png',
  '/partners/placeholder-5.png'
]
</script>

<style scoped>
/* Page base */
.app {
  min-height: 100vh;
  background: #f3f3f3;
  color: #111;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;
}

/* Top banner */
.topbar {
  height: 110px;
  background: linear-gradient(90deg, #0aa6b2 0%, #16c98f 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.topbar-title {
  font-size: 64px;
  font-weight: 300;
  color: #fff;
  letter-spacing: 1px;
}

/* Layout */
.layout {
  display: grid;
  grid-template-columns: 360px 1fr;
  min-height: calc(100vh - 110px);
}

/* Sidebar */
.sidebar {
  background: #ffffff;
  border-right: 1px solid #e6e6e6;
  display: flex;
  flex-direction: column;
  position: relative;
}

.sidebar-top {
  padding: 18px 18px 10px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.icon-btn {
  width: 44px;
  height: 38px;
  border: 0;
  background: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.hamburger {
  width: 28px;
  height: 18px;
  position: relative;
  display: inline-block;
}
.hamburger::before,
.hamburger::after,
.hamburger {
  border-top: 4px solid #6fbfae;
}
.hamburger::before,
.hamburger::after {
  content: "";
  position: absolute;
  left: 0;
  width: 28px;
}
.hamburger::before {
  top: 6px;
}
.hamburger::after {
  top: 12px;
}

.brand {
  display: flex;
  gap: 12px;
  align-items: center;
  padding-left: 8px;
}

.brand-name {
  font-size: 30px;
  font-weight: 600;
}

.nav {
  padding: 10px 18px;
}

.nav-btn {
  display: block;
  text-decoration: none;
  text-align: center;
  background: #64caa9;
  color: #fff;
  font-size: 34px;
  font-weight: 300;
  padding: 18px 12px;
  border-radius: 2px;
  transition: filter 0.15s ease;
}
.nav-btn:hover {
  filter: brightness(0.95);
}
.nav-btn.active {
  box-shadow: inset 0 0 0 2px rgba(255,255,255,0.35);
}

.sidebar-bottom {
  margin-top: auto;
  padding: 18px;
}

.swiss {
  display: flex;
  align-items: center;
  gap: 12px;
}

.swiss-flag {
  width: 52px;
  height: 52px;
  background: #d90000;
  position: relative;
  border-radius: 2px;
}
.swiss-cross-h {
  position: absolute;
  top: 50%;
  left: 12px;
  right: 12px;
  height: 10px;
  background: #fff;
  transform: translateY(-50%);
}
.swiss-cross-v {
  position: absolute;
  left: 50%;
  top: 12px;
  bottom: 12px;
  width: 10px;
  background: #fff;
  transform: translateX(-50%);
}
.swiss-text {
  font-size: 26px;
}

/* Content */
.content {
  padding: 22px 26px;
  background: #f6f6f6;
}

.content-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 6px 8px 18px 8px;
}

.titles h1 {
  margin: 0;
  font-size: 40px;
  font-weight: 500;
}
.titles p {
  margin: 6px 0 0 0;
  font-size: 22px;
  color: #2a2a2a;
}

.lang-btn {
  border: 1px solid #7dcdb5;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 22px;
  align-items: start;
}

/* CTA column */
.cta-col {
  display: flex;
  flex-direction: column;
  gap: 26px;
  padding-top: 10px;
}

.cta {
  text-decoration: none;
  color: #ffffff;
  background: #00f07a;
  border-radius: 18px;
  min-height: 92px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 38px;
  font-weight: 600;
  padding: 18px 16px;
  box-shadow: 0 3px 0 rgba(0,0,0,0.10);
  transition: transform 0.08s ease, filter 0.12s ease;
}
.cta:hover {
  filter: brightness(0.98);
}
.cta:active {
  transform: translateY(1px);
}

/* Partners box */
.partners {
  background: #ffffff;
  border: 1px solid #dedede;
  padding: 12px;
}

.partners-title {
  font-size: 14px;
  color: #2a2a2a;
  margin-bottom: 10px;
}

.partners-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.partner-logo {
  background: #fff;
  border: 1px solid #eee;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 92px;
}
.partner-logo img {
  max-width: 100%;
  max-height: 70px;
  object-fit: contain;
}
.partner-logo.span-2 {
  grid-column: 1 / span 2;
  min-height: 120px;
}
.partner-logo.span-2 img {
  max-height: 95px;
}

/* Responsive */
@media (max-width: 1100px) {
  .layout { grid-template-columns: 300px 1fr; }
  .topbar-title { font-size: 48px; }
  .cta { font-size: 30px; }
}

@media (max-width: 900px) {
  .layout { grid-template-columns: 1fr; }
  .sidebar { display: none; } /* sur mobile: à remplacer par un drawer si tu veux */
  .content-grid { grid-template-columns: 1fr; }
}
</style>
