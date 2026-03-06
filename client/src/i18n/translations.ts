export type Lang = "ru" | "en";

export const translations = {
  ru: {
    nav: {
      services: "Логистика",
      routes: "Закупки",
      sourcing: "Валюты",
      products: "Продукция",
      export: "Экспорт/Импорт",
      initiateContact: "Связаться",
    },
    hero: {
      badge: "Глобальная торговая сеть активна",
      title: "Assayf -",
      rotatingWords: ["Надёжность", "Контроль", "Доверие", "Прозрачность", "Ответственность", "Системность"],
      subtitle:
        "Единая международная торговая экосистема, объединяющая логистику, закупки, валютные операции и производство. Наша глобальная сеть связывает континенты.",
      exploreServices: "Изучить сеть",
      getStarted: "Подключиться к сети",
    },
    stats: {
      years: "Лет глобальной торговой сети",
      partners: "Узлов торговой сети",
      countries: "Стран в сети",
    },
    cargo: {
      title: "Логистическая",
      titleAccent: "сеть",
      subtitle:
        "Узлы Assayf Global Trade Network соединяют Турцию, Россию и Таджикистан мультимодальными коридорами. Единая логистическая экосистема для глобальной торговли.",
      auto: "Наземная сеть",
      autoDesc: "Автомобильные коридоры торговой сети с end-to-end мониторингом.",
      air: "Воздушная сеть",
      airDesc: "Авиационные узлы для критичных поставок в торговой сети.",
      express: "Экспресс-сеть",
      expressDesc: "Высокоскоростные каналы торговой сети для срочных грузов.",
      customs: "Таможенная сеть",
      customsDesc: "Интегрированная система таможенного оформления торговой сети.",
      cases: {
        title: "Кейсы торговой сети",
        subtitle: "Успешные операции глобальной торговой сети",
        case1: "Мультимодальная доставка через торговую сеть",
        case1desc: "300 тонн через узлы Турция-Россия-Таджикистан за 10 дней",
        case2: "Экспресс-канал торговой сети",
        case2desc: "Авиационный узел доставил груз за 24 часа",
        viewAll: "Все операции сети",
        getService: "Подключиться к логистической сети"
      }
    },
    china: {
      title: "Китайский узел",
      titleAccent: "торговой сети",
      subtitle: "Assayf Global Trade Network интегрирован с производственными кластерами Китая. Прямые каналы от фабрик к глобальной торговой сети.",
      why: {
        title: "Преимущества торговой сети",
        experience: "5+ лет интеграции китайских производителей в торговую сеть",
        quality: "Контроль качества через узлы торговой сети",
        prices: "Прямые контракты производителей с торговой сетью",
        logistics: "Интегрированная логистика торговой сети",
      },
      services: {
        sourcing: "Поиск через сеть",
        verification: "Верификация узлов",
        negotiation: "Переговоры в сети",
        quality: "Сетевой контроль качества",
        shipping: "Доставка по торговой сети"
      },
      getService: "Подключиться к китайскому узлу"
    },
    currency: {
      title: "Финансовая",
      titleAccent: "сеть",
      subtitle: "Assayf Global Trade Network обеспечивает валютные операции между узлами сети. Мультивалютная экосистема для глобальной торговли.",
      experience: "5+ лет финансовой сети",
      services: {
        exchange: "Сетевой обмен валют",
        exchangeDesc: "Внутрисетевые курсы для узлов торговой сети",
        transfer: "Переводы по торговой сети",
        transferDesc: "Мгновенные переводы между узлами глобальной сети",
        consulting: "Финансовое сопровождение сети",
        consultingDesc: "Экспертиза по валютным операциям торговой сети",
        hedging: "Сетевое хеджирование",
        hedgingDesc: "Защита торговой сети от валютных рисков"
      },
      currencies: ["USD", "EUR", "RUB", "CNY", "TRY"],
      getService: "Подключиться к финансовой сети"
    },
    exportimport: {
      title: "Торговые",
      titleAccent: "партнёрства",
      subtitle: "Assayf Global Trade Network объединяет производителей и дистрибьюторов в единую экосистему. Прямые торговые каналы через глобальную сеть.",
      partners: {
        title: "Партнёры торговой сети",
        factories: "20+ производственных узлов",
        companies: "50+ торговых партнёров в сети",
        turnover: "$2M+ оборот торговой сети"
      },
      service: "Поставка товаров через узлы Assayf Global Trade Network в любую точку мира",
      advantages: {
        network: "Глобальная торговая сеть",
        experience: "Многолетняя интеграция партнёров в сеть",
        reliability: "Гарантии торговой сети",
        support: "Полное сопровождение через сеть"
      },
      getService: "Подключиться к торговой сети"
    },
    products: {
      title: "Собственная продукция",
      titleAccent: "торговой сети",
      subtitle: "Бренды, созданные и дистрибьютируемые через Assayf Global Trade Network. Глобальное производство и распространение через торговую сеть.",
      nutrition: "Assayf Sports Network",
      nutritionDesc: "Спортивное питание, производимое и поставляемое через торговую сеть.",
      coffee: "Assayf Coffee Network",
      coffeeDesc: "Премиальный кофе, дистрибьютируемый глобальной торговой сетью.",
      drinks: "Assayf Drinks Network",
      drinksDesc: "Функциональные напитки сети для активного образа жизни.",
      getService: "Заказать через торговую сеть"
    },
    testimonials: {
      title: "Отзывы",
      titleAccent: "партнёров сети",
      subtitle: "Компании и специалисты из разных стран о работе с Assayf Global Trade Network.",
      items: [
        { body: "Логистика через сеть ускорила наши поставки в разы.", country: "🇦🇺 Австралия" },
        { body: "Вертикальная интеграция с китайским узлом — то, что нужно.", country: "🇩🇪 Германия" },
        { body: "Плавная работа с валютой и прозрачные условия.", country: "🇮🇹 Италия" },
        { body: "Подключение к сети заняло минимум времени.", country: "🇮🇳 Индия" },
        { body: "Лучший партнёр по глобальной торговле.", country: "🇺🇸 США" },
        { body: "Гибко и надёжно. Рекомендуем сеть.", country: "🇫🇷 Франция" },
        { body: "Отличная работа на мобильных рынках Азии.", country: "🇯🇵 Япония" },
        { body: "Нравится персональный менеджер и поддержка сети.", country: "🇨🇦 Канада" },
        { body: "Идеально для отзывов и кейсов партнёров.", country: "🇪🇸 Испания" },
      ],
    },
    contact: {
      title: "Подключение",
      titleAccent: "к сети",
      subtitle: "Станьте частью Assayf Global Trade Network. Опишите ваши торговые потребности для интеграции в глобальную сеть.",
      secure: "Защищённые каналы сети",
      support: "Персональный менеджер сети",
      customRouting: "Индивидуальные маршруты в сети",
    },
    form: {
      identification: "Имя / компания",
      commsLink: "Email",
      payload: "Сообщение",
      placeholderName: "Ваше имя или компания",
      placeholderEmail: "email@domain.com",
      placeholderMessage: "Опишите ваши потребности для подключения к торговой сети...",
      submit: "Подключиться к сети",
      toastTitle: "Готово",
      toastDescription: "Откроется почтовый клиент для отправки.",
    },
    validation: {
      required: "Обязательно",
      invalidEmail: "Некорректный email",
    },
    footer: "© {year} Assayf Global Trade Network. Единая экосистема международной торговли.",
  },
  en: {
    nav: {
      services: "Logistics Network",
      routes: "Chinese Node",
      sourcing: "Financial Network",
      products: "Network Products",
      export: "Trade Partnerships",
      initiateContact: "Join Network",
    },
    hero: {
      badge: "Global Trade Network Active",
      title: "Assayf :",
      rotatingWords: ["Reliability", "Control", "Trust", "Transparency", "Responsibility", "Systematicity"],
      subtitle:
        "Unified international trade ecosystem integrating logistics, sourcing, currency operations, and production. Our global network connects continents.",
      exploreServices: "Explore Network",
      getStarted: "Join the Network",
    },
    stats: {
      years: "Years of Global Trade Network",
      partners: "Trade Network Nodes",
      countries: "Countries in Network",
    },
    cargo: {
      title: "Logistics",
      titleAccent: "Network",
      subtitle:
        "Assayf Global Trade Network nodes connect Turkey, Russia, and Tajikistan via multimodal corridors. Unified logistics ecosystem for global trade.",
      auto: "Ground Network",
      autoDesc: "Automotive corridors of trade network with end-to-end monitoring.",
      air: "Air Network",
      airDesc: "Aviation nodes for critical supplies in trade network.",
      express: "Express Network",
      expressDesc: "High-speed channels of trade network for urgent cargo.",
      customs: "Customs Network",
      customsDesc: "Integrated customs clearance system of trade network.",
      cases: {
        title: "Trade Network Cases",
        subtitle: "Successful operations of global trade network",
        case1: "Multimodal delivery via trade network",
        case1desc: "300 tons through Turkey-Russia-Tajikistan nodes in 10 days",
        case2: "Express channel of trade network",
        case2desc: "Aviation node delivered cargo in 24 hours",
        viewAll: "All network operations",
        getService: "Connect to Logistics Network"
      }
    },
    china: {
      title: "Chinese Node",
      titleAccent: "Trade Network",
      subtitle: "Assayf Global Trade Network integrated with China's manufacturing clusters. Direct channels from factories to global trade network.",
      why: {
        title: "Trade Network Advantages",
        experience: "5+ years integrating Chinese manufacturers into trade network",
        quality: "Quality control through trade network nodes",
        prices: "Direct manufacturer contracts with trade network",
        logistics: "Integrated trade network logistics",
      },
      services: {
        sourcing: "Network sourcing",
        verification: "Node verification",
        negotiation: "Network negotiations",
        quality: "Network quality control",
        shipping: "Trade network delivery"
      },
      getService: "Connect to Chinese Node"
    },
    currency: {
      title: "Financial",
      titleAccent: "Network",
      subtitle: "Assayf Global Trade Network provides currency operations between network nodes. Multi-currency ecosystem for global trade.",
      experience: "5+ years of financial network",
      services: {
        exchange: "Network Currency Exchange",
        exchangeDesc: "Intra-network rates for trade network nodes",
        transfer: "Trade Network Transfers",
        transferDesc: "Instant transfers between global network nodes",
        consulting: "Network Financial Support",
        consultingDesc: "Expertise in trade network currency operations",
        hedging: "Network Hedging",
        hedgingDesc: "Protecting trade network from currency risks"
      },
      currencies: ["USD", "EUR", "RUB", "CNY", "TRY"],
      getService: "Connect to Financial Network"
    },
    exportimport: {
      title: "Trade",
      titleAccent: "Partnerships",
      subtitle: "Assayf Global Trade Network unites manufacturers and distributors in unified ecosystem. Direct trade channels via global network.",
      partners: {
        title: "Trade Network Partners",
        factories: "20+ production nodes",
        companies: "50+ trade partners in network",
        turnover: "$2M+ trade network turnover"
      },
      service: "Product supply through Assayf Global Trade Network nodes to anywhere in the world",
      advantages: {
        network: "Global Trade Network",
        experience: "Years of partner integration into network",
        reliability: "Trade network guarantees",
        support: "Full support through network"
      },
      getService: "Connect to Trade Network"
    },
    products: {
      title: "Trade Network",
      titleAccent: "Products",
      subtitle: "Brands created and distributed through Assayf Global Trade Network. Global production and distribution via trade network.",
      nutrition: "Assayf Sports Network",
      nutritionDesc: "Sports nutrition produced and supplied through trade network.",
      coffee: "Assayf Coffee Network",
      coffeeDesc: "Premium coffee distributed by global trade network.",
      drinks: "Assayf Drinks Network",
      drinksDesc: "Functional drinks for active lifestyle through network.",
      getService: "Order via Trade Network"
    },
    testimonials: {
      title: "What",
      titleAccent: "Partners Say",
      subtitle: "Companies and professionals from around the world on working with Assayf Global Trade Network.",
      items: [
        { body: "Network logistics made our supply chain many times faster.", country: "🇦🇺 Australia" },
        { body: "Vertical integration with the China node is exactly what we needed.", country: "🇩🇪 Germany" },
        { body: "Smooth currency operations and transparent terms.", country: "🇮🇹 Italy" },
        { body: "Joining the network was quick and straightforward.", country: "🇮🇳 India" },
        { body: "The best global trade partner we have.", country: "🇺🇸 USA" },
        { body: "Flexible and reliable. We recommend the network.", country: "🇫🇷 France" },
        { body: "Impressive performance in Asian markets.", country: "🇯🇵 Japan" },
        { body: "Love the personal manager and network support.", country: "🇨🇦 Canada" },
        { body: "Great for testimonials and partner case studies.", country: "🇪🇸 Spain" },
      ],
    },
    contact: {
      title: "Network",
      titleAccent: "Connection",
      subtitle: "Become part of Assayf Global Trade Network. Describe your trade needs for integration into global network.",
      secure: "Secure network channels",
      support: "Personal network manager",
      customRouting: "Individual network routes",
    },
    form: {
      identification: "Name / Company",
      commsLink: "Email",
      payload: "Message",
      placeholderName: "Your name or company",
      placeholderEmail: "email@domain.com",
      placeholderMessage: "Describe your needs for connecting to trade network...",
      submit: "Connect to Network",
      toastTitle: "Done",
      toastDescription: "Your email client will open to send the message.",
    },
    validation: {
      required: "Required",
      invalidEmail: "Invalid email",
    },
    footer: "© {year} Assayf Global Trade Network. Unified international trade ecosystem.",
  },
} as const;
