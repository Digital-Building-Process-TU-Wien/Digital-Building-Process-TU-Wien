import type { LocalizedText } from './team';

export interface NewsItem {
  id: string;
  date: string;
  dateLabel: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  url: string;
  image?: string;
  imageAlt: LocalizedText;
}

export const news: NewsItem[] = [
  {
    id: 'bimcert-handbuch-2026',
    date: '2026-03-18',
    dateLabel: { en: '18 March 2026', de: '18. März 2026', ja: '2026年3月18日' },
    title: {
      en: 'BIMcert Handbook 2026 published',
      de: 'BIMcert Handbuch 2026 erschienen',
      ja: 'BIMcertハンドブック2026刊行',
    },
    summary: {
      en: 'The 2026 edition brings the BIMcert knowledge base up to date and highlights collaborative translation work that brings experience from other countries into the handbook.',
      de: 'Die Ausgabe 2026 aktualisiert das BIMcert-Wissen und betont gemeinschaftliche Übersetzungsarbeiten, die Erfahrungen aus anderen Ländern in das Handbuch einbringen.',
      ja: '2026年版はBIMcertの知識基盤を最新化し、共同翻訳によって他国での経験をハンドブックに取り入れる取り組みを紹介しています。',
    },
    url: 'https://www.tuwien.at/cee/ibb/zdb/aktuelles/news/bimcert-handbuch-2026-erschienen',
    image: '/images/news/bimcert-handbuch-2026.webp',
    imageAlt: { en: 'Cover of the BIMcert Handbook 2026', de: 'Titelseite des BIMcert-Handbuchs 2026', ja: 'BIMcertハンドブック2026表紙' },
  },
  {
    id: 'openbim-building-code-compliance-checks',
    date: '2026-09-24',
    dateLabel: { en: '24 September 2026', de: '24. September 2026', ja: '2026年9月24日' },
    title: {
      en: 'New paper on openBIM-based building code compliance checks: Case study in the City of Vienna',
      de: 'Neues Paper zu openBIM-basierten Building-Code-Compliance-Checks: Fallstudie aus Wien',
      ja: 'openBIMに基づく建築法規への適合性確認に関する論文：ウィーン市の事例研究',
    },
    summary: {
      en: 'The paper presents a structured, process-oriented methodology for developing and validating automated code compliance checks in public-sector permit processes, illustrated through a pilot with 24 real construction projects in Vienna.',
      de: 'Das Paper stellt eine strukturierte, prozessorientierte Methodik zur Entwicklung und Validierung automatisierter Building-Code-Compliance-Checks in öffentlichen Genehmigungsprozessen vor und veranschaulicht sie anhand eines Piloten mit 24 realen Bauprojekten in Wien.',
      ja: 'この論文では、公共部門の許可プロセスにおける自動適合性確認の開発と検証に向けた、構造化されたプロセス重視の方法論を提示し、ウィーンにある24件の実在する建設プロジェクトによる実証を示しています。',
    },
    url: 'https://repositum.tuwien.at/handle/20.500.12708/229819',
    image: '/images/news/openbim-building-code-compliance-checks.webp',
    imageAlt: { en: 'Title page of the paper on openBIM-based building code compliance checks', de: 'Titelseite des Papers zu openBIM-basierten Building-Code-Compliance-Checks', ja: 'openBIMに基づく建築法規への適合性確認に関する論文の表紙' },
  },
  {
    id: 'rcc4oeag-kickoff',
    date: '2026-05-12',
    dateLabel: { en: '12 May 2026', de: '12. Mai 2026', ja: '2026年5月12日' },
    title: {
      en: 'RCC4ÖAG research project kick-off: automated openBIM validation in focus',
      de: 'Kick-off für das Forschungsprojekt RCC4ÖAG – Automatisierte openBIM-Prüfprozesse im Fokus',
      ja: '研究プロジェクトRCC4ÖAGが始動：openBIMによる自動検証に注力',
    },
    summary: {
      en: 'RCC4ÖAG develops an open methodology for translating textual regulations and standards into machine-readable, automated openBIM validation logics with a human-in-the-loop approach.',
      de: 'RCC4ÖAG entwickelt eine offene Methodik, um textuelle Vorschriften und Normen in maschinenlesbare, automatisierte openBIM-Prüflogiken zu überführen.',
      ja: 'RCC4ÖAGは、文書形式の法規・規格を機械可読なopenBIMベースの自動検証ロジックに変換するオープンな方法論を開発しています。',
    },
    url: 'https://www.tuwien.at/cee/ibb/zdb/aktuelles/news/kick-off-fuer-das-forschungsprojekt-rcc4oeag-automatisierte-openbim-pruefprozesse-im-fokus',
    image: '/images/news/rcc4oeag-kickoff.webp',
    imageAlt: { en: 'Project partners of the RCC4ÖAG project', de: 'Projektpartner:innen des Projekts RCC4ÖAG', ja: 'RCC4ÖAGプロジェクトのパートナー' },
  },
  {
    id: 'digital-building-permit-conference',
    date: '2025-12-09',
    dateLabel: { en: '9 December 2025', de: '9. Dezember 2025', ja: '2025年12月9日' },
    title: {
      en: 'Digital Building Permit Conference at TU Wien',
      de: 'Digital Building Permit Konferenz 2025 an der TU Wien',
      ja: 'TU Wienでデジタル建築許可会議を開催',
    },
    summary: {
      en: 'Three days of scientific research, innovative practical applications, practice-oriented workshops and exchange on digital building permits at TU Wien.',
      de: 'Drei Tage voller wissenschaftlicher Forschung, innovativer praktischer Anwendungen, praxisorientierter Workshops und Austausch zu digitalen Baugenehmigungen an der TU Wien.',
      ja: 'TU Wienで、デジタル建築許可を巡る科学的研究、革新的な実践応用、実践的なワークショップ、交流のための3日間の会議が開催されました。',
    },
    url: 'https://www.tuwien.at/cee/ibb/zdb/aktuelles/news/digital-building-permit-konferenz-2026-an-der-tu-wien',
    image: '/images/news/digital-building-permit-conference.webp',
    imageAlt: { en: 'Digital Building Process team at the conference', de: 'Team des Forschungsbereichs auf der Konferenz', ja: '会議に登壇した研究チーム' },
  },
  {
    id: 'ar-review-process',
    date: '2025-11-20',
    dateLabel: { en: '20 November 2025', de: '20. November 2025', ja: '2025年11月20日' },
    title: {
      en: 'New paper on Augmented Reality in the review process of an official approval process',
      de: 'Neues Paper zu Augmented Reality in der Bauverhandlung eines behördlichen Genehmigungsprozesses erschienen',
      ja: '公的許可プロセスの審査における拡張現実に関する論文',
    },
    summary: {
      en: 'A case study examines how an AR-supported building hearing can improve spatial understanding and the organisation of the official approval process.',
      de: 'Eine Fallstudie untersucht, wie eine AR-gestützte Bauverhandlung das räumliche Verständnis und die Organisation des behördlichen Genehmigungsprozesses verbessern kann.',
      ja: 'ケーススタディにより、ARを活用した建築審査が空間理解と公的許可プロセスの組織を改善できる可能性を検討しています。',
    },
    url: 'https://www.tuwien.at/cee/ibb/zdb/aktuelles/news/neues-paper-zu-augmented-reality-im-behoerdlichen-genehmigungsprozess-erschienen-1',
    image: '/images/news/ar-review-process.webp',
    imageAlt: { en: 'Publication cover', de: 'Titelblatt der Publikation', ja: '論文の表紙' },
  },
  {
    id: 'ids-generation',
    date: '2025-04-03',
    dateLabel: { en: '3 April 2025', de: '3. April 2025', ja: '2025年4月3日' },
    title: {
      en: 'New paper on generating Information Delivery Specifications (IDS)',
      de: 'Neues Paper zur Generierung von Information Delivery Specifications (IDS) erschienen',
      ja: 'Information Delivery Specifications（IDS）生成に関する論文',
    },
    summary: {
      en: 'The paper presents a concept for generating IDS from conventional tabular information requirements while preserving the logic of the familiar table format.',
      de: 'Das Paper stellt ein Konzept zur Generierung von IDS aus herkömmlichen tabellarischen Informationsanforderungen vor und bewahrt dabei die Logik der vertrauten Tabellenform.',
      ja: 'この論文は、従来の表形式の情報要求からIDSを生成し、馴染みのある表形式のロジックを維持する概念を提案しています。',
    },
    url: 'https://www.tuwien.at/cee/ibb/zdb/aktuelles/news/neues-paper-zur-generierung-von-information-delivery-specifications-ids-erschienen',
    image: '/images/news/ids-generation.webp',
    imageAlt: { en: 'Publication cover', de: 'Titelblatt der Publikation', ja: '論文の表紙' },
  },
];
