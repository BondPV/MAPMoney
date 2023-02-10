import Footer from '../../components/Footer/Footer';
import createElement from '../../utils/createElement';
import MainMenu from '../../components/MainMenu/MainMenu';
import { ClassMap } from '../../constants/htmlConstants';
import { LANG, MODE } from '../../types/types';
import AppState from '../../constants/appState';

class BasePage {
  private footer: Footer;

  private mainMenu: MainMenu;

  private modeValue: MODE;

  private lang: LANG;

  constructor() {
    this.modeValue = AppState.modeValue;
    this.lang = AppState.lang;
    this.footer = new Footer();
    this.mainMenu = new MainMenu(this.lang);
  }

  protected createPageStructure(page: string): void {
    const mainSection = document.querySelector(`.${ClassMap.main}`);
    const menuBlock = document.querySelector(`.${ClassMap.menu.menuSection}`);
    const footerBlock = document.querySelector(`.${ClassMap.footer.footer}`);

    if (mainSection && menuBlock && footerBlock) {
      return;
    }

    const main = createElement({
      tag: 'main',
      classList: [ClassMap.main, ClassMap.mode[this.modeValue].background],
    });

    const mainContent = createElement({
      tag: 'section',
      classList: [ClassMap.mainContent],
    });

    const mainMenu = this.mainMenu.render(page);
    const footer = this.footer.render();

    main.append(mainMenu, mainContent);

    document.body.classList.add(ClassMap.mode[this.modeValue].background);

    document.body.replaceChildren(main, footer);
  }
}

export default BasePage;
