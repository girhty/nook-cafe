/**
 * Single source of truth for every fact on the page.
 * All values come from the supplied Google Places + Instagram inputs.
 */
export const SITE = {
  name: 'NooK Café',
  nameAlt: 'NooK Café نووك',
  tagline: 'Every Day Mood',
  taglineAr: 'كل يوم مزاج',

  /* Google Places */
  address:
    'شارع سيد حامد، الفرع المجاور لمطعم الحسون, Basrah, Basra Governorate, 61001, Iraq',
  addressShort: 'Sayyid Hamid St — next to Al-Hassoun Restaurant, Basra',
  phone: '+964 772 510 0008',
  phoneHref: 'tel:+9647725100008',
  phone2: '+964 782 510 0008',
  phone2Href: 'tel:+9647825100008',
  rating: 4.2,
  reviewCount: 4,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=NooK%20Caf%C3%A9%20Basra',

  /* Instagram */
  handle: '@nook_iraq',
  instagram: 'https://instagram.com/nook_iraq',
  followers: 31866,
  followersLabel: '31.8K',
  biography: 'كل يوم مزاج — Everyday Mood',
  profilePic:
    'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-19/752682442_18123178903707619_8012619269466550386_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_cat=110&ccb=7-5&_nc_sid=f7ccc5&efg=eyJ2ZXJzaW9uIjoicHJvZmlsZV9waWMud3d3Ljk1MS5DMyJ9&_nc_ohc=yNp92vqcr54Q7kNvwHqnp4c&_nc_oc=AdoJkLHWrVg2gHJqggvC-_UxKsVZbUgBt0vgOFCORWfQoCTmQGury6TQwVs79x8wTQQ&_nc_zt=24&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=z49Rb442usHEBRVcn9quHg&_nc_ss=7ba8c&oh=00_AQNzEyerPYRL3RJuKQp_zofKmpmm3IV8tAbZgyIhujoS6Q&oe=6AC10A94',

  /* Derived honestly: the cafe's own post marks "ثماني سنوات" — eight years in Basra. */
  yearsOpen: 8,

  /* Instagram posts — used for hero, gallery, craft, experience and the feed grid */
  posts: [
    {
      id: 'chocolate',
      caption: 'Hot Chocolate Please!',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.71878-15/605284339_1905742720329149_581982739458372117_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=2fz6fKA10W4Q7kNvwG5Lztp&_nc_oc=Adq7M0ZbnqnNhXh0EGq3h7FUh8PfIL2vA0pe8S-MEIPvhI1NFG1IBX0xCrv3apsdk0Q&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQMtJrnEXJMXPvTdJYX2XAmNcX4Mxo2lIJ9zLmfiQIrQvA&oe=6AC12630'
    },
    {
      id: 'signature',
      caption: 'اطلب مشروبات توقيعنا الجديدة وخبرونا بذوقكم — new signature drinks.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/749440596_18122789392707619_327884191046454746_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=v-HZ9u9HcMoQ7kNvwHaYvZ0&_nc_oc=AdpX6ODiO4ENF1jbplfANsGyenRTEEfc7X9rYf_ghMXVBJ_kKHOUsU576d4dYLjnsxY&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQM6VoilIvPdMMrnRWXHtMY5gDlfauH5ujx9zCAmyoEovw&oe=6AC1182A'
    },
    {
      id: 'kitchen',
      caption: 'مطبخنا صار جاهز مع الوجبات الجديدة — the kitchen is ready with new plates.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/751071334_18122892970707619_8956317259041449491_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=JNP1WtVjVEgQ7kNvwG8ufP0&_nc_oc=Adq13T13Wo0ean8gz2vk4CZLvcJaZiGl85rUCVzacgBqf0koj2hL_9YQE3jgsuxOhdM&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQNejvUkQM4v201Egg__xKS9nWPZHbKm-wmWBdIDPJWPhA&oe=6AC11B8E'
    },
    {
      id: 'pizza',
      caption: 'شاهد مهارة شيف NOOK في تحضير البيتزا الإيطالية الأصيلة.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.71878-15/714486343_3073292689727646_1763272717937354963_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=Tmmtxq_iYYIQ7kNvwH_vMvx&_nc_oc=AdpNVJ8LX0YjJKNLnOO8HTe64PuNiWCkPhtxCt_p4DzgphJw6HRqnLVapBGqdm6y2PU&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQN8TaxFVddVpqeFLV0tEHpnlSxT1cuTva5h8Yc_WDK9IA&oe=6AC12D6E'
    },
    {
      id: 'event',
      caption:
        'قنطرة hosted an evening of poetry and music at NooK — Aurora band, warm hospitality.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/726380857_17993892476976709_3392548867320775201_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=MLWGKDfb7TYQ7kNvwFPb8JN&_nc_oc=Adpf4kq6x6TZChDmCCy5H18Uv-P4cycU8px5wXxRxe9Jy_iswIYLsIVMo92tSzwajzg&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQN-6U0NoKfyH0awhGW7G95GzcUvQiKGoPNbqMllYAM9fw&oe=6AC13944'
    },
    {
      id: 'latte',
      caption: 'شتكولون منو راح يفوز ب أطيب سبانش لاتيه؟',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.71878-15/671194837_1679303053199025_3183664580661757338_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=66VfsPyXugsQ7kNvwFDCvFh&_nc_oc=Adqw1jUC_xD3ZVhIm-KZGBdZ9hgUr9g0SlYU09nq6D4yuirFp92NRdl9YcDp09kmbog&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQNJI8DQ7T34tKLeh5K6hUedOLfjOpfPATa6CZDYqyeFwg&oe=6AC112D5'
    },
    {
      id: 'table',
      caption: 'جمال الطعم خلى أجواء The Walking Dead تصير على الطاولة.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.71878-15/697141985_1291398922507065_1920347731348725574_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=107&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=OALYLApZppYQ7kNvwEXli9b&_nc_oc=AdqvDs78VY-DgnH0vrR-R6mpxgYqjX9TD8KnBfhBCd1EIcxPNEn9QxKb7U1AV1u6JsQ&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQPRAonFBXtYvGMwvIIxYYcUURnPNUzsiAtd1f9WE5AcKA&oe=6AC11816'
    },
    {
      id: 'guest',
      caption: '@krm.fashion — ان تكون وجهتنا للخير والسعه والفرح دائماً',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.82787-15/671234508_18045341414597058_7057541260264360990_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ED52dA3hlsAQ7kNvwFn_XuV&_nc_oc=Adr3vh_kORnVLnOpcxJbsE3dQQ0azeX0ONsu30U_jHadkJpEwSv6T8LRtVGd868flIs&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQMVW4IjdI3j9bvpAsKwMliiibIkpV_nFv4atrYHYvrHKg&oe=6AC13A00'
    },
    {
      id: 'night',
      caption: 'A night at NooK — lights low, cups warm.',
      image:
        'https://scontent-ams2-1.cdninstagram.com/v/t51.71878-15/723084552_929701646793032_3124892960806151362_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0xJUFMuYmVzdF9pbWFnZV91cmxnZW4uQzMifQ%3D%3D&_nc_ohc=FUr4mJCrm54Q7kNvwGthgsk&_nc_oc=AdpJNeNlNduYWcqSrMN5kuVhvnkswPzoTk_MuMWJZYuHaFy-jT5qUrS78mwXhuibumQ&_nc_zt=23&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_gid=iAL__7EhTh02EJiDKyhXhA&_nc_ss=7ba8c&oh=00_AQMkKe1cggRFriCOwEA8wQuukweT1Ai7Xr--_vlTR5X7Ew&oe=6AC12904'
    }
  ],

  /* Google Places photos */
  googlePhotos: [
    'https://lh3.googleusercontent.com/gps-cs-s/ANWiy9Rc6Y2k9Hmb6GkcWJ_sT_Izeg10OKHgRK5bDA53R65mEOE6SZNM9R_5bYRbqkZk_ats4nAnM2JH0DLtP6gvh1g-DG6eYEGdcfCGETgLVbI1wBBbl0MyDkEqWu7uGOr4vsEEna0=w425-h240-k-no'
  ]
};

export const MARQUEE_A = [
  'SPANISH LATTE',
  'HOT CHOCOLATE',
  'SIGNATURE ICED',
  'WOOD-FIRED PIZZA',
  'EVERY DAY MOOD'
];

export const MARQUEE_B = [
  'NOOK BASRA',
  'KITCHEN OPEN',
  'كل يوم مزاج',
  'LATE NIGHTS',
  'GOOD PEOPLE'
];