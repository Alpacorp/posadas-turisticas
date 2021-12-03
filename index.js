const finalText = document.getElementById('finalText');
finalText.innerHTML = `Instituto Departamental de Cultura y Turismo | IDECUT | ${new Date().getFullYear()}`;

const bannerHero = document.getElementById('bannerHero');
const viewerWidth = () => {
  if (screen.width < 810) {
    bannerHero.src = './assets/images/banner_mobile.png'
  } else {
    bannerHero.src = './assets/images/banner_idecut_posadas-100_1.png'
  }
}

viewerWidth();