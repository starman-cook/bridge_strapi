import type { Schema, Struct } from '@strapi/strapi';

export interface AboutAbout extends Struct.ComponentSchema {
  collectionName: 'components_about_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    label: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
    video_bg: Schema.Attribute.Media<'videos'>;
  };
}

export interface ContactsContacts extends Struct.ComponentSchema {
  collectionName: 'components_contacts_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    form: Schema.Attribute.Component<'contacts.form', false>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ContactsForm extends Struct.ComponentSchema {
  collectionName: 'components_contacts_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    button: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    namePlaceholder: Schema.Attribute.String;
    privacy: Schema.Attribute.String;
    privacyBold: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface FooterContacts extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts';
  info: {
    displayName: 'Contacts';
  };
  attributes: {
    email: Schema.Attribute.String;
    emailValue: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    phoneValue: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'footer.contacts', false>;
    copyright: Schema.Attribute.String;
    nav: Schema.Attribute.Component<'footer.nav', true>;
  };
}

export interface FooterNav extends Struct.ComponentSchema {
  collectionName: 'components_footer_navs';
  info: {
    displayName: 'Nav';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface HeaderHeader extends Struct.ComponentSchema {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    nav: Schema.Attribute.Component<'header.navigation', false>;
  };
}

export interface HeaderNavigation extends Struct.ComponentSchema {
  collectionName: 'components_header_navigations';
  info: {
    displayName: 'Navigation';
  };
  attributes: {
    about: Schema.Attribute.String;
    contacts: Schema.Attribute.String;
    investors: Schema.Attribute.String;
    news: Schema.Attribute.String;
    partners: Schema.Attribute.String;
    projects: Schema.Attribute.String;
  };
}

export interface InvestorsInvestors extends Struct.ComponentSchema {
  collectionName: 'components_investors_investors';
  info: {
    displayName: 'Investors';
  };
  attributes: {
    button: Schema.Attribute.String;
    label: Schema.Attribute.String;
    list: Schema.Attribute.Component<'investors.list', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface InvestorsList extends Struct.ComponentSchema {
  collectionName: 'components_investors_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    value: Schema.Attribute.String;
  };
}

export interface MissionItems extends Struct.ComponentSchema {
  collectionName: 'components_mission_items';
  info: {
    displayName: 'Items';
  };
  attributes: {
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MissionMission extends Struct.ComponentSchema {
  collectionName: 'components_mission_missions';
  info: {
    displayName: 'Mission';
  };
  attributes: {
    items: Schema.Attribute.Component<'mission.items', true>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface NewsItems extends Struct.ComponentSchema {
  collectionName: 'components_news_items';
  info: {
    displayName: 'Items';
  };
  attributes: {
    date: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    linkedin: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface NewsNews extends Struct.ComponentSchema {
  collectionName: 'components_news_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    items: Schema.Attribute.Component<'news.items', true>;
    title: Schema.Attribute.String;
  };
}

export interface PartnersPartners extends Struct.ComponentSchema {
  collectionName: 'components_partners_partners';
  info: {
    displayName: 'Partners';
  };
  attributes: {
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PlansPlans extends Struct.ComponentSchema {
  collectionName: 'components_plans_plans';
  info: {
    displayName: 'plans';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsImages extends Struct.ComponentSchema {
  collectionName: 'components_projects_images';
  info: {
    displayName: 'Images';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    images: Schema.Attribute.Component<'projects.images', true>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PromoStatisticsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_promo_statistics_statistics';
  info: {
    displayName: 'Statistics';
  };
  attributes: {
    stats_items: Schema.Attribute.Component<
      'promo-statistics.stats-item',
      true
    >;
  };
}

export interface PromoStatisticsStatsItem extends Struct.ComponentSchema {
  collectionName: 'components_promo_statistics_stats_items';
  info: {
    displayName: 'stats_items';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface PromoPromotion extends Struct.ComponentSchema {
  collectionName: 'components_promo_promotions';
  info: {
    displayName: 'Promotion';
  };
  attributes: {
    button: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'promo-statistics.statistics', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ValuesValues extends Struct.ComponentSchema {
  collectionName: 'components_values_values';
  info: {
    displayName: 'Values';
  };
  attributes: {
    label: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.about': AboutAbout;
      'contacts.contacts': ContactsContacts;
      'contacts.form': ContactsForm;
      'footer.contacts': FooterContacts;
      'footer.footer': FooterFooter;
      'footer.nav': FooterNav;
      'header.header': HeaderHeader;
      'header.navigation': HeaderNavigation;
      'investors.investors': InvestorsInvestors;
      'investors.list': InvestorsList;
      'mission.items': MissionItems;
      'mission.mission': MissionMission;
      'news.items': NewsItems;
      'news.news': NewsNews;
      'partners.partners': PartnersPartners;
      'plans.plans': PlansPlans;
      'projects.images': ProjectsImages;
      'projects.projects': ProjectsProjects;
      'promo-statistics.statistics': PromoStatisticsStatistics;
      'promo-statistics.stats-item': PromoStatisticsStatsItem;
      'promo.promotion': PromoPromotion;
      'values.values': ValuesValues;
    }
  }
}
