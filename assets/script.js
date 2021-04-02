const body = document.querySelector('body');
const header = document.querySelector('header');
const hamburgerToggle = document.querySelector('#hamburger-toggle');
const hamburgerIcon = document.querySelector('.animated-icon');
const langDropdown = document.querySelectorAll('#language-selector');
const mobileNav = document.querySelector('.mobile-menu--container');
const modalContainer = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const privacyPolicyBtn = document.querySelector('.privacy-policy--btn');
const closeModalBtn = document.querySelector('.btn--close');

const aboutLink = document.querySelector('a.about');
const projectsLink = document.querySelector('a.projects');
const contactLink = document.querySelector('a.contact');

const links = document.querySelectorAll('nav ul li a');

const privacyPolicyText = `<div class="privacy-policy--container"><h3>Privacy Policy</h3>
  <p>
  This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service, the Gianluigi Trontini Freelancer website.
  </p>
  <p>
  If you choose to use our Service, then you agree to the collection and use of information in relation with this policy. The Personal Information that we collect are used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.
  </p>
  <p>
  The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at Website URL, unless otherwise defined in this Privacy Policy.
  </p>
  <span class="block bold">Information Collection and Use</span>
  <p>
  For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you.
  </p>
  <span class="block bold">Log Data</span>
  <p>
  We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol (“IP”) address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
  </p>
  <span class="block bold">Cookies</span>
  <p>
  Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.
  </p>
  <p>
  Our website uses these “cookies” to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.
  </p>
  <span class="block bold">Service Providers</span>
  <p>
  We may employ third-party companies and individuals due to the following reasons:
  </p>
  <ul>
  <li>To facilitate our Service;</li>
  <li>To provide the Service on our behalf;</li>
  <li>To perform Service-related services; or</li>
  <li>To assist us in analyzing how our Service is used.</li>
  </ul>
  <p>
  We want to inform our Service users that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
</p>
  <span class="block bold">Security</span>
  <p>
  We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
  </p>
  <span class="block bold">Links to Other Sites</span>
  <p>
  Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
  </p>
  <span class="block bold">Children's Privacy</span>
  <p>
  Our Services do not address anyone under the age of 13. We do not knowingly collect personal identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do necessary actions.
  </p>
  <span class="block bold">Changes to This Privacy Policy</span>
  <p>
  We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
  </p>
  <span class="block bold">Contact Us</span>
  <p>
  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact me.</p></div>`;

privacyPolicyBtn.addEventListener('click', () => {
  modalContainer.classList.add('open');
  body.style.overflowY = 'hidden';
  modalContent.innerHTML = privacyPolicyText;
});
closeModalBtn.addEventListener('click', () => {
  if (modalContainer.classList.contains('open')) {
    modalContainer.classList.remove('open');
    body.style.overflowY = 'initial';
  }
});
modalContainer.addEventListener('click', () => {
  if (modalContainer.classList.contains('open')) {
    modalContainer.classList.remove('open');
    body.style.overflowY = 'initial';
  }
});
modal.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  return false;
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    document
      .getElementById(link.getAttribute('data-scroll'))
      .scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (hamburgerIcon.classList.contains('open')) {
      hamburgerIcon.classList.remove('open');
      header.classList.remove('header-fixed-mobile');
    }
    if (mobileNav.classList.contains('show')) {
      mobileNav.classList.remove('show');
    }
  });
});

hamburgerToggle.addEventListener('click', function () {
  header.classList.toggle('header-fixed-mobile');
  hamburgerIcon.classList.toggle('open');
  mobileNav.classList.toggle('show');
});

langDropdown.forEach((item) => {
  item.addEventListener('change', function (e) {
    if (e.target.value != 'en') {
      if (
        location.pathname.indexOf('es') !== -1 ||
        location.pathname.indexOf('it') !== -1
      ) {
        location.pathname = location.pathname.replace(/^.{3}/g, e.target.value);
        location.pathname.reload();
      } else {
        location.pathname = e.target.value + location.pathname;
        location.pathname.reload();
      }
    } else {
      window.location.replace(location.origin);
    }
  });
});

// Shuffle js filter and masonry
var Shuffle = window.Shuffle;

var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
  itemSelector: '.shuffle-item',
  buffer: 1,
});

document.querySelectorAll('input[name="shuffle-filter"]').forEach((item) => {
  item.addEventListener('change', function (e) {
    var input = e.currentTarget;
    if (input.checked) {
      myShuffle.filter(input.value);
    }
  });
});

document.querySelectorAll('select[name="shuffle-filter"]').forEach((item) => {
  item.addEventListener('change', function (e) {
    var input = e.currentTarget;
    if (input) {
      myShuffle.filter(input.value);
    }
  });
});
