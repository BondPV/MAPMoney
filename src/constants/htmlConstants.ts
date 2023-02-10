import { Route } from '../types/enums';
import AppState from './appState';
import { Dictionary, DictionaryKeys } from './dictionary';
import SvgMap from './svgMap';

export const ClassMap = {
  alertMessage: {
    wrapper: 'alert-wrapper',
    error: 'alert-wrapper_error',
    success: 'alert-wrapper_success',
  },
  authorization: {
    section: 'authorization',
    wrapper: 'authorization__wrapper',
    imgContainer: 'authorization__greeting-images',
    title: 'authorization__header',
    greeting: 'authorization__greeting',
    slider: 'authorization__slider',
    slide: 'authorization__slider__slide',
    form: 'authorization__form',
    formItem: 'authorization__form__input',
    inputEmail: 'authorization__form__email',
    inputPassword: 'authorization__form__password',
    registration: 'authorization__form__registration',
    registrationText: 'authorization__form__registration__text',
    registrationLink: 'authorization__form__registration__link',
    signInButton: 'authorization__form_submit',
    main: 'main__authorization',
  },
  registration: {
    wrapper: 'registration-wrapper',
    form: 'registration-form',
    formTitle: 'registration-form__title',
    formItem: 'registration-form__input',
    inputEmail: 'registration-form__email',
    inputName: 'registration-form__name',
    inputPassword: 'registration__form__password',
    selectCurrency: 'registration-form__currency',
    inputConfirmPassword: 'registration__form__confirm-password',
    submit: 'registration-form_submit',
  },
  mode: {
    dark: {
      background: 'dark-mode-background',
      backgroundMenu: 'dark-mode-menu-background',
      title: 'dark-mode-title',
      font: 'dark-mode-font',
      modal: 'dark-mode-modal-background',
      modalTitle: 'dark-mode-modal-title',
      icon: 'dark-mode-icon',
    },
    light: {
      background: 'light-mode-background',
      backgroundMenu: 'light-mode-menu-background',
      title: 'light-mode-title',
      font: 'light-mode-font',
      modal: 'light-mode-modal-background',
      modalTitle: 'light-mode-modal-title',
      icon: 'light-mode-icon',
    },
  },
  passwordIcon: 'password-icon',
  showPassword: 'show-password',
  closeModalButton: 'close-modal',
  closeLine: 'close-modal__line',
  errorValidation: 'error-validation-message',
  show: 'show',
  hide: 'hide',
  parentInput: 'form__item',
  wrapperPassword: 'wrapper-password',
  footer: {
    footer: 'footer',
    footerLogo: 'footer__logo',
    footerCopyright: 'footer__copyright',
    footerGithubWrap: 'footer__github-wrap',
    footerGithub: 'footer__github',
    footerGithubLogo: 'footer__github-logo',
  },
  menu: {
    navWrap: 'menu__nav-wrap',
    menuSection: 'main__menu',
    logo: 'menu__logo',
    logoTitle: 'menu__logo-title',
    logoWrap: 'menu__logo-wrap',
    navList: 'menu__nav',
    navItem: 'menu__nav-item',
    navIcon: 'menu__nav-icon',
    navButton: 'menu__nav-button',
    navButtonActive: 'menu__nav-button_active',
    menuItem: 'menu__item',
    menuList: 'menu__list',
    userImg: 'user__img',
    userWrap: 'user__wrap',
    user: 'user',
    switchInput: 'menu__input',
    switchSpan: 'menu__button-span',
    switchLabel: 'menu__switch',
    switchWrap: 'switch-wrap',
  },
  main: 'main',
  mainContent: 'main__content',
  langSwitcher: {
    button: 'lang-switcher',
    container: 'lang-switcher__container',
    item: 'lang-switcher__container__item',
    big: 'big-switcher',
    small: 'small-switcher',
    show: 'switcher-show',
  },
};

export const Title = {
  copyright: 'All Rights Reserved © Yoda`s team 2023',
  logo: 'MAPmoney',
};

export const PageLink = {
  rsSchool: 'https://rs.school/js/',
  firstGithub: 'https://github.com/BondPV',
  secondGithub: 'https://github.com/marinastepanchuk',
  thirdGithub: 'https://github.com/Alesia-V175',
};

export const Attribute = {
  target: 'target',
  targetValue: '_blank',
  rel: 'rel',
  relValue: 'noopener',
  dataLink: 'data-link',
  checked: 'checked',
  inputCheckbox: 'checkbox',
};

export const MenuNavItem = {
  dashboard: {
    path: Route.DASHBOARD,
    name: Dictionary[AppState.lang].dashboard,
    key: DictionaryKeys.dashboard,
    image: SvgMap.dashboard,
  },
  wallet: {
    path: Route.WALLET,
    name: Dictionary[AppState.lang].wallet,
    key: DictionaryKeys.wallet,
    image: SvgMap.wallet,
  },
  analytics: {
    path: Route.ANALYTICS,
    name: Dictionary[AppState.lang].analytics,
    key: DictionaryKeys.analytics,
    image: SvgMap.analytic,
  },
  account: {
    path: Route.ACCOUNT,
    name: Dictionary[AppState.lang].account,
    key: DictionaryKeys.account,
    image: SvgMap.account,
  },
};
