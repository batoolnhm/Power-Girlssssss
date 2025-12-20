const navLinks = document.querySelectorAll(".nav-links .nav-link");
const navOpenBtn = document.querySelector("#nav-open-btn");
const navCloseBtn = document.querySelector("#nav-close-btn");

navOpenBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

navCloseBtn.addEventListener("click", () => navOpenBtn.click());

navLinks.forEach((link) => {
  link.addEventListener("click", () => navOpenBtn.click());
});

const clubsSwiper = new Swiper(".clubs-slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  rtl: true,
  speed: 600,
  grabCursor: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const eventsData = {
  1: {
    title: "اليوم المفتوح للغات",
    organization: "مركز الموارد التعليمية للغات",
    image: "language.jpg",
    description: "انضم لنا في اليوم المفتوح لمركز الموارد التعليمية للغات! فرصة رائعة لتجربة دورات اللغة المختلفة، والالتقاء بمتحدثين أصليين، واكتشاف طرق جديدة لتعلم اللغات. سيكون هناك ورش عمل، ألعاب تفاعلية، وجلسات حوارية ممتعة.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "السبت",
    date: "16 فبراير 2026",
    location: "الساحة البيضاء - الأكادمية"
  },
  2: {
    title: "TEDI-NAJAH EXPO",
    organization: "جامعة النجاح الوطنية",
    image: "expo.jpg",
    description: "معرض تيدي-النجاح للابتكار والتكنولوجيا! تعرّف على أحدث المشاريع الابتكارية، شاهد عروضًا حية للروبوتات، واستمع إلى محاضرات من روّاد التكنولوجيا. فرصة للتواصل مع الشركات الناشئة والمهتمين بمجال التكنولوجيا.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الأحد",
    date: "22 مارس 2026",
    location: "الحرم الجامعي الجديد  "
  },
  3: {
    title: "لقاء ريادة الأعمال",
    organization: "جمعية الرياديين",
    image: "coe.jpg",
    description: "لقاء خاص مع رواد أعمال ناجحين من خريجي الجامعة. تعلم كيفية تحويل فكرتك إلى مشروع ناجح، واكتشف أسرار التمويل والتسويق للمشاريع الناشئة. ستكون هناك فرصة لتقديم أفكارك والحصول على تغذية راجعة من الخبراء.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الاثنين",
    date: "10 فبراير 2026",
    location: " مدرج القانون "
  },
  4: {
    title: "Venture Cafe Series",
    organization: "حديقة النجاح للإبتكار",
    image: "vc.jpg",
    description: "سلسلة مقاهي المشاريع الريادية - لقاء أسبوعي يجمع المبتكرين، المستثمرين، وأصحاب الأفكار الطموحة. بيئة غير رسمية للتعارف، تبادل الخبرات، وبناء شبكات العلاقات المهنية. احضر معك فكرتك واستفد من آراء المجتمع الريادي.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الثلاثاء",
    date: "25 ديسمبر 2025",
    location: "حديقة الابتكار، الحرم القديم"
  },
  5: {
    title: "لقاء SAPA",
    organization: "جمعية SAPA",
    image: "nasa.jpg",
    description: "لقاء جمعية SAPA للفيزياء والفلك! استكشف عجائب الكون مع محاضرات عن الفضاء، رصد النجوم، وتجارب فيزيائية تفاعلية. مناسب للمهتمين بالعلوم والفضاء من جميع التخصصات.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الأربعاء",
    date: "5 مايو 2026",
    location: "مختبر الفيزياء، كلية العلوم"
  },
  6: {
    title: "مباراة كرة قدم",
    organization: "كلية القانون",
    image: "football.jpg",
    description: "بطولة كرة القدم السنوية لكلية القانون! انضم كفريق أو كمتفرج. جو من المنافسة الصحية والمرح بين طلاب الكلية. ستكون هناك جوائز للفائزين وتكريمات لأفضل لاعبين.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الخميس",
    date: "8 ابريل 2026",
    location: "ملعب المفتوح"
  },
  7: {
    title: "بناء القدرات الخضراء",
    organization: "جمعية التنمية المستدامة",
    image: "green.jpg",
    description: "ورشة عملية لتعلم مهارات الاستدامة البيئية. ستتعلم كيفية إنشاء حديقة منزلية صغيرة، إعادة تدوير المواد، وتقليل البصمة الكربونية. كل مشارك سيحصل على مجموعة أدوات للبدء بمشروعه البيئي.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "السبت",
    date: "17 مايو 2026",
    location: "حديقة الكلية الزراعية"
  },
  8: {
    title: "الترجمة القانونية",
    organization: "جمعية الترجمة",
    image: "lawtrans.jpg",
    description: "ورشة متخصصة في الترجمة القانونية للطلاب المهتمين بمجال الترجمة والقانون. تعلم المصطلحات القانونية، تقنيات الترجمة الدقيقة، وكيفية التعامل مع الوثائق القانونية. يقدمها مترجمون محترفون.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الأحد",
    date: "3 ابريل 2026",
    location: " كلية القانون "
  },
  9: {
    title: "تحدي الجسور",
    organization: "الهندسة المدنية",
    image: "civilengg.jpg",
    description: "تحدي تصميم وبناء الجسور باستخدام مواد محدودة! اختبر مهاراتك الهندسية وقدرتك على الابتكار. المسابقة مناسبة لجميع الطلاب بغض النظر عن التخصص. فرصة للتعلم العملي والتحدي الإبداعي.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الاثنين",
    date: "2 يونيو 2026",
    location: "قاعة التدريب - كلية الهندسة"
  },
  10: {
    title: "الرحلة الهندسية",
    organization: "IMechE",
    image: "mech.jpg",
    description: "رحلة علمية لطلاب الهندسة الميكانيكية لزيارة مصانع ومؤسسات صناعية. فرصة للتعرف على التطبيقات العملية للهندسة في سوق العمل، ومقابلة مهندسين محترفين، ورؤية الآلات الكبيرة تعمل على أرض الواقع.",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9",
    day: "الثلاثاء",
    date: "10 مايو 2026",
    location: "نقطة التجمع:  بوابة الحرم الجامعي الجديد"
  }
};

const clubsData = {
  1: {
    title: "احنا النجاح",
    description: "جمعية طلابية تهدف إلى تعزيز روح التطوع والتدريب والتطوير بين الطلاب. ننظم ورش عمل ودورات تدريبية وبرامج تطوعية لتنمية مهارات الطلاب وخدمة المجتمع.",
    image: "ehnanajah.jpg",
    activities: "تطوع • تدريب • تطوير • ورش عمل • برامج مجتمعية",
    contact: "insta: @ehnanajah_club | email: ehnanajah@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  2: {
    title: "ASCE",
    description: "جمعية الطلاب الأمريكيين للهندسة المدنية. نهدف إلى تطوير مهارات الطلاب الهندسية من خلال ورش العمل، الزيارات الميدانية، والمسابقات التقنية. نربط الطلاب بالصناعة والمهنيين.",
    image: "ASCE.png",
    activities: "مسابقات هندسية • زيارات ميدانية • محاضرات تقنية • شبكات مهنية",
    contact: "insta: @asce_najah | email: asce@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  3: {
    title: "مركز الموارد اللغات",
    description: "مركز متخصص في تعليم اللغات مع متحدثين أصليين. نقدم دورات في الإنجليزية، الفرنسية، الألمانية، والإسبانية. نهدف إلى تطوير مهارات اللغة التواصلية للطلاب.",
    image: "LRC1.jpg",
    activities: "دورات لغة • محادثات مع متحدثين أصليين • نوادي حوار • امتحانات دولية",
    contact: "هاتف: 09-2345678 | email: lrc@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  4: {
    title: "عين",
    description: "جمعية طلابية شبابية تهدف لتعزيز روح الابتكار والإبداع بين أعضائها. ننظم مسابقات ابتكارية، هاكاثونات، وبرامج ريادية لتحويل الأفكار إلى مشاريع واقعية.",
    image: "ain11.jpg",
    activities: "هاكاثونات • مسابقات ابتكار • ورش إبداع • حاضنات أفكار",
    contact: "insta: @ain_club | email: ain@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  5: {
    title: "جمعية التنمية المستدامة",
    description: "نعمل على نشر الوعي حول أهداف التنمية المستدامة الأممية. ننظم حملات توعوية، ورش عمل بيئية، ومبادرات مجتمعية لتحقيق مستقبل مستدام.",
    image: "sdgs.jpg",
    activities: "حملات توعوية • ورش بيئية • مبادرات مجتمعية • مؤتمرات",
    contact: "insta: @sdgs_najah | email: sdgs@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  6: {
    title: "جمعية الرياديين",
    description: "نحن مجتمع للطلاب الطامحين لتحويل أفكارهم إلى مشاريع ناجحة. نقدم تدريبات في ريادة الأعمال، جلسات إرشادية، وفرص تمويل للأفكار المبتكرة.",
    image: "rr.png",
    activities: "تدريب ريادي • إرشاد • تمويل أفكار • مسابقات مشاريع",
    contact: "insta: @entrepreneurs_najah | email: entrepreneurs@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  7: {
    title: "SAPA",
    description: "جمعية الطلاب للفيزياء والفلك. نستكشف عالم الفيزياء والفلك من خلال محاضرات، رصد فلكي، وتجارب عملية. نخلق بيئة علمية تفاعلية لطلاب العلوم.",
    image: "sapa.jpeg",
    activities: "محاضرات علمية • رصد فلكي • تجارب فيزيائية • مسابقات علمية",
    contact: "insta: @sapa_club | email: sapa@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  8: {
    title: "جمعية القانون",
    description: "جمعية طلاب القانون التي تنظم محاكم صورية، مناظرات قانونية، ومحاضرات مع خبراء في المجال القانوني. نهدف إلى تطوير مهارات الطلاب القانونية.",
    image: "lw.png",
    activities: "محاكم صورية • مناظرات • محاضرات قانونية • زيارات لمؤسسات قضائية",
    contact: "insta: @law_society | email: law@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  9: {
    title: "جمعية الترجمة",
    description: "نحن مجتمع لمحبي اللغات والترجمة. ننظم ورش ترجمة متخصصة، مناقشات ثقافية، وفعاليات لتطوير مهارات الترجمة بين اللغات المختلفة.",
    image: "tr.jpg",
    activities: "ورش ترجمة • مناقشات ثقافية • مسابقات ترجمة • لقاءات لغوية",
    contact: "insta: @translation_club | email: translation@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  },
  10: {
    title: "IMECH",
    description: "جمعية مهندسي الميكانيكا. ننظم زيارات لمصانع، محاضرات تقنية، ومسابقات هندسية. نهدف إلى ربط الدراسة النظرية بالتطبيق العملي في مجال الهندسة الميكانيكية.",
    image: "IMECH.png",
    activities: "زيارات مصانع • محاضرات تقنية • مسابقات هندسية • مشاريع تطبيقية",
    contact: "insta: @imech_najah | email: imech@example.com",
    registerLink: "https://forms.gle/ATFwJgUN88NZjRUk9"
  }
};

// EVENT POPUP CODE
const eventPopup = document.getElementById('eventPopup');
const popupEventImg = document.getElementById('popupEventImg');
const popupEventTitle = document.getElementById('popupEventTitle');
const popupEventOrg = document.getElementById('popupEventOrg');
const popupEventDesc = document.getElementById('popupEventDesc');
const popupEventDay = document.getElementById('popupEventDay');
const popupEventDate = document.getElementById('popupEventDate');
const popupEventLocation = document.getElementById('popupEventLocation');
const eventRegisterLink = document.getElementById('eventRegisterLink');
const eventCloseBtn = document.querySelector('#eventPopup .popup-close-btn');

function openEvent(eventId) {
  const event = eventsData[eventId];
  
  if (event) {
    popupEventImg.src = event.image;
    popupEventImg.alt = event.title;
    popupEventTitle.textContent = event.title;
    popupEventOrg.textContent = event.organization;
    popupEventDesc.textContent = event.description;
    popupEventDay.textContent = event.day;
    popupEventDate.textContent = event.date;
    popupEventLocation.textContent = event.location;
    eventRegisterLink.href = event.registerLink;
    
    eventPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeEventPopup() {
  eventPopup.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (eventCloseBtn) {
  eventCloseBtn.addEventListener('click', closeEventPopup);
}

eventPopup.addEventListener('click', function(e) {
  if (e.target === eventPopup) {
    closeEventPopup();
  }
});

// CLUB POPUP CODE - FIXED VERSION
const clubPopup = document.getElementById('clubPopup');
const popupClubImg = document.getElementById('popupClubImg');
const popupClubName = document.getElementById('popupClubName');
const popupClubDesc = document.getElementById('popupClubDesc');
const popupClubActivities = document.getElementById('popupClubActivities');
const popupClubContact = document.getElementById('popupClubContact');
const clubRegisterLink = document.getElementById('clubRegisterLink');
const clubCloseBtn = document.querySelector('#clubPopup .popup-close-btn');

// FIX: Add event listeners to club cards AFTER DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Add click listeners to ALL club cards (both static and swiper)
  document.querySelectorAll('.club-card').forEach((card) => {
    card.addEventListener('click', function() {
      const clubId = this.getAttribute('data-club-id');
      if (clubId) {
        openClub(clubId);
      }
    });
  });
});

function openClub(clubId) {
  const club = clubsData[clubId];
  
  if (club) {
    popupClubImg.src = club.image;
    popupClubImg.alt = club.title;
    popupClubName.textContent = club.title;
    popupClubDesc.textContent = club.description;
    popupClubActivities.textContent = club.activities;
    popupClubContact.textContent = club.contact;
    clubRegisterLink.href = club.registerLink;
    
    clubPopup.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeClubPopup() {
  clubPopup.classList.remove('active');
  document.body.style.overflow = 'auto';
}

if (clubCloseBtn) {
  clubCloseBtn.addEventListener('click', closeClubPopup);
}

clubPopup.addEventListener('click', function(e) {
  if (e.target === clubPopup) {
    closeClubPopup();
  }
});

// Share function
function shareClub() {
  const title = popupClubName.textContent;
  const url = window.location.href;
  const text = `تعرف على ${title} - نادي طلابي مميز في جامعة النجاح!`;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url
    });
  } else {
    navigator.clipboard.writeText(url);
    alert('تم نسخ الرابط إلى الحافظة! شاركه مع أصدقائك.');
  }
}

// Keyboard escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if (eventPopup.classList.contains('active')) {
      closeEventPopup();
    }
    if (clubPopup.classList.contains('active')) {
      closeClubPopup();
    }
  }
});

// Add click effects to club cards
document.querySelectorAll('.club-card').forEach(card => {
  card.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
  });
  
  card.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
  });
});

// Make functions globally available
window.openEvent = openEvent;
window.openClub = openClub;
window.shareClub = shareClub;


