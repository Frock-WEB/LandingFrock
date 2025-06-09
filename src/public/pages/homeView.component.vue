<script>
import languageSwitcher from "../components/language-switcher.component.vue";

export default{
  name: "HomeView",
  components: {
    languageSwitcher,
  }
}

</script>

<template>
  <header>
    <div id="header-container">
      <img src="/src/assets/img/logo-chapaturuta.png" alt="logo" class="logoChapa">
      <nav>
        <ul>
          <li><a href="#">{{$t('nav.home')}}</a></li>
          <li><a href="#">{{$t('nav.how-it-works')}}</a></li>
          <li><a href="#">{{$t('nav.advantages')}}</a></li>
          <li><a href="#">{{$t('nav.collaborate')}}</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </nav>
      <language-switcher/>
    </div>
  </header>
  <div id="hero-section">
    <div id="hero-content-container">
      <div id="hero-content">
        <h1>{{$t('hero.title')}}</h1>
        <p>{{$t('hero.description')}}</p>
        <button class="button-primary">{{$t('hero.button-text')}}</button>
      </div>
      <img id="hero-image" src="/src/assets/img/hero-section.png"  alt="ubicaciones">
    </div>
  </div>
  <div id="how-it-works-section">
    <div id="how-it-works-content-container">
      <div id="how-it-works-content">
        <h2>{{$t('how-it-works.title')}}</h2>
        <ol id="how-it-works-list">
          <li id="how-it-works-item-1" class="how-it-works-item">
            <span>1</span>
            <h3>{{$t('how-it-works.number1')}}</h3>
          </li>
          <li id="how-it-works-item-2" class="how-it-works-item">
            <span>2</span>
            <h3>{{$t('how-it-works.number2')}}</h3>
          </li>
          <li id="how-it-works-item-3" class="how-it-works-item">
            <span>3</span>
            <h3>
              {{$t('how-it-works.number3')}}
            </h3>
          </li>
        </ol>
      </div>
    </div>
  </div>
  <div id="advantages-section">
    <div id="advantages-content-container">
      <div id="advantages-content">
        <div id="advantages-content-title">
          <h2>{{$t('advantages.title')}}</h2>
          <img id="advantages-content-title-image" src="/src/assets/img/route-man.png" alt="route-man">
        </div>
        <div id="advantages-container-list">
          <ul id="advantages-list">
            <li id="first-advantages">
              <h3>{{$t('advantages.first.title')}}</h3>
              <p>{{$t('advantages.first.description')}}</p>
            </li>
            <li id="second-advantages">
              <h3>{{$t('advantages.second.title')}}</h3>
              <p>{{$t('advantages.second.description')}}</p>
            </li>
            <li id="first-advantages">
              <h3>{{$t('advantages.third.title')}}</h3>
              <p>{{$t('advantages.third.description')}}</p>
            </li>
            <li>
              <h3>{{$t('advantages.fourth.title')}}</h3>
              <p>{{$t('advantages.fourth.description')}}</p>
            </li>
            <li>
              <h3>{{$t('advantages.fifth.title')}}</h3>
              <p>{{$t('advantages.fifth.description')}}</p>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
  <div id="colaborate-section">
    <div id="colaborate-content-container">
      <div id="colaborate-content">

      </div>
    </div>
  </div>
  <div id="faq-section">
    <div id="faq-content-container">
      <div id="faq-content">
        <div id="faq-content-title">
          <p>{{$t('FAQ.helper-text')}}</p>
          <h2>{{$t('FAQ.title')}}</h2>
        </div>
        <ul id="faq-list">
          <li>
            <p>{{$t('FAQ.first.question')}}</p>
            <p>{{$t('FAQ.first.answer')}}</p>
          </li>
          <li>
            <p>{{$t('FAQ.second.question')}}</p>
            <p>{{$t('FAQ.second.answer')}}</p>
          </li>
          <li>
            <p>{{$t('FAQ.third.question')}}</p>
            <p>{{$t('FAQ.third.answer')}}</p>
          </li>
          <li>
            <p>{{$t('FAQ.fourth.question')}}</p>
            <p>{{$t('FAQ.fourth.answer')}}</p>
          </li>
          <li>
            <p>{{$t('FAQ.fifth.question')}}</p>
            <p>{{$t('FAQ.fifth.answer')}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <footer class="footer-section">
    <div class="footer-content-container">
      <div class="footer-content">
        <div class="footer-content-title">
          <h2>ChapaTuRuta</h2>
          <div class="footer-content-logo">
            <img src="/src/assets/img/logo-chapaturuta.png" alt="logo" class="logoChapa">
          </div>
        </div>
        <div class="footer-contact-container">
          <div class="footer-content-social-media">
            <h4>{{$t('footer.social-media')}}</h4>
            <a href="#">
              <img src="/src/assets/img/icons/facebook.png" alt="facebook">
            </a>
            <a href="#">
              <img src="/src/assets/img/icons/instagram.png" alt="instagram">
            </a>
            <a href="#">
              <img src="/src/assets/img/icons/tiktok.png" alt="twitter">
            </a>
          </div>
          <div class="footer-content-links">
            <h4>{{$t('footer.links.title')}}</h4>
            <a href="#">{{$t('footer.links.home')}}</a>
            <a href="#">{{$t('footer.links.how-it-works')}}</a>
            <a href="#">{{$t('footer.links.advantages')}}</a>
            <a href="#">{{$t('footer.links.collaborate')}}</a>
            <a href="#">FAQ</a>
          </div>
          <div class="footer-content-contact">
            <h4>{{$t('footer.contact-us')}}</h4>
            <a href="https://wa.me/51987654321">+51 987654321
            </a>
          </div>
        </div>
      </div>
      <div class="footer-content-copyright">
        <p>© 2025 ChapaTuRuta. {{$t('footer.copyright')}}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--cl-background-50);
  z-index: 1000;
  padding: 1rem 0;
  backdrop-filter: blur(10px);
}

#header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--sideMargin);
}

#header-container img {
  width: 50px;
  height: auto;
}

nav ul {
  display: flex;
  gap: 2rem;
  list-style: none;
}

nav a {
  text-decoration: none;
  color: var(--cl-white);
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.3s ease;
  position: relative;
}

nav a:hover {
  color: var(--cl-purple);
}

nav a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -4px;
  left: 0;
  background-color: var(--cl-purple);
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  #header-container {
    padding: 0 var(--sideMarginMobile);
  }

  nav ul {
    gap: 1rem;
  }

  nav a {
    font-size: 0.9rem;
  }

  #header-container img {
    width: 60px;
  }
}

@media (max-width: 480px) {
  #header-container {
    flex-direction: column;
    gap: 1rem;
  }

  nav ul {
    flex-wrap: wrap;
    justify-content: center;
  }
}

#hero-section {
  background-color: var(--cl-black);
  height: 100vh;
}
#hero-content-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

#hero-content{
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}
#hero-content h1{
  font-family: 'Special Gothic Expanded One', cursive;
  font-size: 5rem;
  margin-top: 5rem;
  color: var(--cl-white);
  line-height: 0.95;
  text-align: center;
}
#hero-content p{
  font-size: 1.5rem;
  color: var(--cl-white);
  text-align: center;
}
.button-primary {
  background-color: var(--cl-purple);
  color: var(--cl-white);
  border: none;
  padding: 12px 28px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 2rem;
  /* ðŸŒ‘ SOMBRA 3D */
  box-shadow: 0 6px 15px rgba(99, 48, 238, 0.4);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(99, 48, 238, 0.4);
}

#hero-image{
  margin-top: 2rem;
  width: 100%;
  border-radius: 12px;
  height: 40vh;
  object-fit: cover;
  object-position: center;
}

#how-it-works-section{
  background-color: var(--cl-white);
  padding: 2rem 0;
}


#how-it-works-content-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}

#how-it-works-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 100vh;
}

#how-it-works-content h2{
  font-size: 3rem;
  color: var(--cl-black);
  font-family: 'Special Gothic Expanded One';
  text-align: center;
  margin-bottom: 3rem;
}

#how-it-works-content p{
  font-size: 1.5rem;
  color: var(--cl-black);
  text-align: center;
}

#how-it-works-list{
  display: flex;
  align-items:end;
}

.how-it-works-item{
  display: flex;
  width: 250px;
  padding: 1rem;
  position: relative;
}

#how-it-works-item-1{
  background-color: var(--cl-green);
  height: 250px;

}

#how-it-works-item-2{
  background-color: var(--cl-blue);
  height: 300px;
}

#how-it-works-item-3{
  background-color: var(--cl-purple);
  height: 350px;
}

.how-it-works-item span{
  font-size: 2rem;
  color: var(--cl-white);
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  background-color: var(--cl-white);
  border-radius: 50%;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--cl-black);
  border: 2px solid var(--cl-black);
}


#advantages-section{
  background-color: var(--cl-purple);
  padding: 2rem 0;
  height: 100vh;
  display: flex;
  align-items: center;
}

#advantages-content-title{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}
#advantages-content-title h2{
  font-size: 3rem;
  color: var(--cl-black);
  font-family: 'Special Gothic Expanded One';
  text-align: left;
}
#advantages-content-title img{
  width: 65%;
}


#advantages-content-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;


}
#advantages-content{
  display: flex;
}


#advantages-list{
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style-type: none;
}
#advantages-list li{
  padding: 1rem;
  background-color: #ff6d38;
  border:  solid 2px #141414;
  border-radius: 12px;
}

#faq-section{
  background-color: var(--cl-black);
  padding: 2rem 0;
}

#faq-content-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
}

#faq-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#faq-content-title{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#faq-content-title p{
  font-size: 0.8rem;
  text-align: center;
  color: var(--cl-lime);
  font-weight: 600;
}

#faq-content-title h2{
  font-size: 5rem;
  color: var(--cl-white);
  text-align: center;
  font-family: 'Special Gothic Expanded One';
  margin-bottom: 2rem;
}

#faq-list{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  list-style-type: none;
  width: 400px;
}
#faq-list li p{
  font-size: 1rem;
  color: var(--cl-white);
  width: 350px;
}
#faq-list li{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

#faq-list li p{
  border-radius: 12px;
  padding: 1rem;
  font-weight: 700;
}

#faq-list li p:nth-child(odd){
  background-color: var(--cl-lime);
  color: var(--cl-black);
}

/* FOOTER */

.footer-section{
  background-color: var(--cl-purple-300);
  padding: 2rem 0;
}

.footer-content-container{
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
}
.footer-content{
  display: flex;
  justify-content: space-between;
}

.footer-contact-container{
  display: flex;
  gap: 1rem;
}
.footer-content-social-media{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-content-social-media h4{
  font-size: 0.9rem;
  color: var(--cl-black);
}
.footer-content-social-media img{
  width: 1.5rem;
  height: 1.5rem;
}

.footer-content-links{
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
}

.footer-content-links a{
  text-decoration: none;
  color: var(--cl-black);
}

.footer-content-contact{
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.footer-content-contact h4{
  font-size: 0.9rem;
  color: var(--cl-black);
}
.footer-content-contact a{
  font-size: 0.9rem;
  color: var(--cl-black);
}
.footer-content-copyright{
  font-size: 0.9rem;
  color: var(--cl-black);
  text-align: left;
  margin-top: 2rem;
  border-top: 1px solid var(--cl-black);
  padding-top: 1rem;
}

.footer-content-logo img {
  width: auto;
  height: 50px;
}


</style>