export type Language = 'en' | 'de' | 'ja';

export type LocalizedText = Record<Language, string>;

export interface TeamMember {
  name: string;
  title: LocalizedText;
  role?: LocalizedText;
  image: string;
  profileUrl: string;
  linkedinUrl?: string;
  orcid?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Christian Schranz',
    title: { en: 'Assoc. Prof. Dipl.-Ing. Dr. techn., M.Sc.', de: 'Assoc. Prof. Dipl.-Ing. Dr. techn., M.Sc.', ja: '准教授 Dipl.-Ing. Dr. techn., M.Sc.' },
    role: { en: 'Head of the research unit', de: 'Leiter des Forschungsbereichs', ja: '研究領域長' },
    image: '/images/team/christian-schranz.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/fpl/person/index.xhtml?tid=36976',
    linkedinUrl: 'https://www.linkedin.com/in/christian-schranz-tu-wien/',
    orcid: 'https://orcid.org/0000-0003-4403-5435',
  },
  {
    name: 'Harald Urban',
    title: { en: 'Assistant Prof. Dipl.-Ing. Dr. techn., B.Sc.', de: 'Assistant Prof. Dipl.-Ing. Dr. techn., B.Sc.', ja: '准教授 Dipl.-Ing. Dr. techn., B.Sc.' },
    role: { en: 'Deputy head of the research unit', de: 'Stv. Leiter des Forschungsbereichs', ja: '研究領域副長' },
    image: '/images/team/harald-urban.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/fpl/person/index.xhtml?tid=253092',
    linkedinUrl: 'https://www.linkedin.com/in/harald-urban-170a7a162/',
    orcid: 'https://orcid.org/0000-0002-6002-0762',
  },
  {
    name: 'Simon Fischer',
    title: { en: 'Senior Scientist Dipl.-Ing. Dr. techn., B.Sc.', de: 'Senior Scientist Dipl.-Ing. Dr. techn., B.Sc.', ja: 'シニアサイエンスティスト Dipl.-Ing. Dr. techn., B.Sc.' },
    image: '/images/team/simon-fischer.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/291973.html',
    linkedinUrl: 'https://www.linkedin.com/in/simon-fischer-6526b4211/',
  },
  {
    name: 'Daniel Pfeiffer',
    title: { en: 'Univ.Ass. Dipl.-Ing., B.Sc.', de: 'Univ.Ass. Dipl.-Ing., B.Sc.', ja: '大学研究員 Dipl.-Ing., B.Sc.' },
    image: '/images/team/daniel-pfeiffer.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/309547.html',
    linkedinUrl: 'https://www.linkedin.com/in/daniel-pfeiffer-75b787239/',
  },
  {
    name: 'Konstantin Höbart',
    title: { en: 'Project assistant Dipl.-Ing., B.Sc.', de: 'Projektass. Dipl.-Ing., B.Sc.', ja: 'プロジェクト研究員 Dipl.-Ing., B.Sc.' },
    image: '/images/team/konstantin-hobart.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/231675.html',
    linkedinUrl: 'https://www.linkedin.com/in/konstantin-h%C3%B6bart-1b2a71135/',
  },
  {
    name: 'Patrick Loibl',
    title: { en: 'Univ.Ass. Dipl.-Ing., B.Sc.', de: 'Univ.Ass. Dipl.-Ing., B.Sc.', ja: '大学研究員 Dipl.-Ing., B.Sc.' },
    image: '/images/team/patrick-loibl.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/300055.html',
    linkedinUrl: 'https://www.linkedin.com/in/patrickloibl/',
  },
  {
    name: 'Anes Husic',
    title: { en: 'Univ.Ass. Dipl.-Ing., B.Sc.', de: 'Univ.Ass. Dipl.-Ing., B.Sc.', ja: '大学研究員 Dipl.-Ing., B.Sc.' },
    image: '/images/team/anes-husic.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/300366.html',
  },
  {
    name: 'Leo Gaishofer',
    title: { en: 'Project assistant Dipl.-Ing., B.Sc.', de: 'Projektass. Dipl.-Ing., B.Sc.', ja: 'プロジェクト研究員 Dipl.-Ing., B.Sc.' },
    image: '/images/team/leo-gaishofer.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/333884.html',
    linkedinUrl: 'https://www.linkedin.com/in/leogaishofer/',
  },
  {
    name: 'Gabriel Pelikan',
    title: { en: 'Project MA, B.Sc.', de: 'Projekt-MA, B.Sc.', ja: 'プロジェクト研究員, B.Sc.' },
    image: '/images/team/gabriel-pelikan.jpg',
    profileUrl: 'https://tiss.tuwien.ac.at/person/339054.html',
    linkedinUrl: 'https://www.linkedin.com/in/gabriel-pelikan-629059181/',
  },
];
