import { LANG } from '../types/types';

type DictionaryLang = {
  [key in LANG]: {
    [key: string]: string,
  };
};

export const Dictionary: DictionaryLang = {
  EN: {
    authorizationTitle: 'Welcome to MAPmoney!',
    authorizationGreeting: 'The best app for manage your finance',
    quote1: 'Money speaks sense in a language all nations understand. Aphra Behn',
    quote2: 'He who will not economize will have to agonize. Confucius',
    quote3: 'Your life is worth much more than gold. Bob Marley',
    quote4: 'A wise man should have money in his head, but not in his heart. Jonathan Swift',
    quote5: 'A man is rich in proportion to the number of things he can afford to let alone. Henry David Thoreau',
    quote6: 'Success does not consist in never making mistakes but in never making the same one a second time. Bernard Shaw',
    quote7: 'Не does not possess wealth that allows it to possess him. Franklin',
    quote8: 'An investment in knowledge always pays the best interest. Benjamin Franklin',
    quote9: 'It\'s a cash and carry world. Sometimes you pay a little. Mostly it\'s a lot. Sometimes, it\'s everything you have. Stephen King',
    labelEmail: 'Email Address',
    labelPassword: 'Password',
    registrationLinkText: 'Don\'t have an account?',
    signUpButton: 'Sign Up',
    signInButton: 'Sign In',
    registrationTitle: 'Create your Account',
    labelName: 'Name',
    labelConfirmPassword: 'Confirm Password',
    labelCurrencySelection: 'Сurrency (you can\'t change it later)',
    errorMessageEmail: 'Value is not valid.',
    errorMessageName: 'Name must contain at least 3 characters.',
    errorMessagePassword: 'Password must contain at least 5 characters.',
    errorMessageConfirmPassword: 'Passwords do not match. Please try again.',
    menuSupport: 'Support',
    language: 'Language',
    dashboard: 'Dashboard',
    darkMode: 'Dark Mode',
    support: 'Support',
    logout: 'Logout',
    wallet: 'My Wallet',
    analytics: 'Analytics',
    account: 'Account',
    supportTitle: 'Contact Support',
    labelQuestion: 'Question content',
    supportSubmitButton: 'Send a message',
    welcomeHeader: 'Welcome, ',
    totalIncome: 'Total Income',
    totalExpense: 'Total Expenses',
    accountsTitle: 'Balance: ',
    categoriesTitle: 'Expenses: ',
    transport: 'Transport',
    clothes: 'Clothes',
    entertainment: 'Entertainment',
    food: 'Food',
    cafe: 'Eating out',
    health: 'Health',
    house: 'House',
    sport: 'Sport',
    cash: 'Cash',
    card: 'Card',
    createAccountTitle: 'Creating account',
    createAccountName: 'Enter account name',
    createAccountBalance: 'Balance',
    createAccountSubmit: 'Create account',
    errorMessageAccountExists: 'Account with the same name already exists',
    createCategoryTitle: 'Creating category',
    createCategoryName: 'Enter category name',
    createCategoryLimit: 'Limit per month',
    createCategorySubmit: 'Create category',
    errorMessageCategoryExists: 'Category with the same name already exists',
    expenses: 'expenses',
    chartDailyExpensesTitle: 'Daily spending schedule',
    chartMonthlyExpensesTitle: 'Monthly incomes and expenses chart',
    chartCategoriesColumnsTitle: 'Schedule of expenses by category',
    chartCategoriesPieTitle: 'Expense Schedule',
    walletPeriodTitle: 'Billing period:',
    walletPeriodCurrentMonth: 'current month',
    walletPeriodYear: 'year',
    walletPeriodMonth: '30 days',
    cardBalance: 'Card Balance: ',
    cashBalance: 'Cash Balance: ',
    updateWalletButton: 'Update my wallet',
    addIncome: 'Add income',
    addExpense: 'Add expense',
    addLimit: 'Add limit',
    formIncomeTitle: 'New Income',
    formExpenseTitle: 'New Expense',
    labelCategory: 'Choose category',
    labelSum: 'Add sum',
    labelDate: 'Choose data',
    labelNote: 'Add comment',
    addIncomeButton: 'Add income',
    addExpenseButton: 'Add expense',
    today: 'Today',
    lastYear: 'Last Year',
    lastSevenDays: 'Last 7 Days',
    lastThirtyDays: 'Last 30 Days',
    currentYear: 'Current Year',
    allTime: 'All Time',
    currentMonth: 'Current Month',
    calendarInput: 'Choose period',
    error: 'Error. Please try again later',
    loginStatus: 'Login successful',
    EmailNotFound: 'Email not found',
    InvalidPassword: 'Invalid password',
    RegistrationError: 'Registration Error',
    EmailAlreadyExists: 'A user with email already exists',
    Registered: 'User successfully registered',
    updateAccountTitle: 'Update account details',
    updateAccountSubmit: 'Save changes',
    deleteAccountButton: 'Delete account',
    createIncomeButton: 'Add income',
    createExpenseButton: 'Add expense',
    updateCategoryTitle: 'Update category details',
    updateCategorySubmit: 'Save changes',
    deleteCategoryButton: 'Delete category',
    limitAlert: 'Limit exceeded: ',
    backToHomePage: 'Back to home page',
  },
  RU: {
    authorizationTitle: 'Добро пожаловать в MAPmoney!',
    authorizationGreeting: 'Лучшее приложение для управления вашими финансами',
    quote1: 'Деньги говорят на языке, который понятен всем нациям. Афра Бен',
    quote2: 'Тот, кто не будет экономить - будет мучиться. Конфуций',
    quote3: 'Ваша жизнь стоит гораздо больше, чем золото. Боб Марли',
    quote4: 'Мудрый человек должен иметь деньги в своей голове, но не в сердце. Джонатан Свифт',
    quote5: 'Богатство человека прямо пропорционально числу вещей, которые он может позволить себе не делать. Генри Дэвид Торо',
    quote6: 'Секрет успеха заключается не в том, чтобы не делать ошибок, а в том, чтобы не повторять одних и тех же ошибок дважды. Бернард Шоу',
    quote7: 'Тот не владеет богатством, кто позволяет богатству овладеть собой. Франклин',
    quote8: 'Инвестиции в знания всегда дают наибольшую прибыль. Бенджамин Франклин',
    quote9: 'В этом мире все продается за наличные. Иногда приходится платить немного; иногда - много, а иногда вообще все, что у тебя есть. Стивен Кинг',
    labelEmail: 'Электронная Почта',
    labelPassword: 'Пароль',
    registrationLinkText: 'У Вас нет аккаунта?',
    signUpButton: 'Регистрация',
    signInButton: 'Войти',
    registrationTitle: 'Создать учетную запись',
    labelName: 'Имя',
    labelConfirmPassword: 'Повторите Пароль',
    labelCurrencySelection: 'Валюта (вы не сможете изменить ее в дальнейшем)',
    errorMessageEmail: 'Введенное значение не валидно.',
    errorMessageName: 'Имя должно содержать не менее 3 символов.',
    errorMessagePassword: 'Пароль должен содержать не менее 5 символов.',
    errorMessageConfirmPassword: 'Пароли не совпадают. Повторите ввод.',
    menuSupport: 'Написать в поддержку',
    language: 'Выбор языка',
    dashboard: 'Панель управления',
    darkMode: 'Темная тема',
    support: 'Служба поддержки',
    logout: 'Выход из аккаунта',
    wallet: 'Мои счета',
    analytics: 'Статистика',
    account: 'Личный кабинет',
    supportTitle: 'Обращение в службу поддержки',
    labelQuestion: 'Содержание вопроса',
    supportSubmitButton: 'Отправить сообщение',
    welcomeHeader: 'Добро пожаловать,',
    totalIncome: 'Доход итого',
    totalExpense: 'Расход итого',
    accountsTitle: 'Баланс: ',
    categoriesTitle: 'Расходы: ',
    transport: 'Транспорт',
    clothes: 'Одежда',
    entertainment: 'Развлечения',
    food: 'Продукты',
    cafe: 'Еда вне дома',
    health: 'Медицина',
    house: 'Дом',
    sport: 'Спорт',
    cash: 'Наличные',
    card: 'Карта',
    createAccountTitle: 'Создание счета',
    createAccountName: 'Введите имя счета',
    createAccountBalance: 'Баланс',
    createAccountSubmit: 'Создать счет',
    errorMessageAccountExists: 'Счет с таким именем уже существует',
    createCategoryTitle: 'Создание категории',
    createCategoryName: 'Введите имя категории',
    createCategoryLimit: 'Лимит в месяц',
    createCategorySubmit: 'Создать категорию',
    errorMessageCategoryExists: 'Категория с таким именем уже существует',
    expenses: 'расходы',
    chartDailyExpensesTitle: 'График ежедневных расходов',
    chartMonthlyExpensesTitle: 'График ежемесячных доходов и расходов',
    chartCategoriesColumnsTitle: 'График расходов по категориям',
    chartCategoriesPieTitle: 'График расходов',
    walletPeriodTitle: 'Расчетный период:',
    walletPeriodCurrentMonth: 'текущий месяц',
    walletPeriodYear: 'год',
    walletPeriodMonth: '30 дней',
    cardBalance: 'Баланс карты: ',
    cashBalance: 'Баланс наличных: ',
    updateWalletButton: 'Изменить мои счета',
    addIncome: 'Добавить доход',
    addExpense: 'Добавить расход',
    addLimit: 'Добавить лимит',
    formIncomeTitle: 'Новый доход',
    formExpenseTitle: 'Новый расход',
    labelCategory: 'Выбрать категорию',
    labelSum: 'Добавить сумму',
    labelDate: 'Выбрать дату',
    labelNote: 'Добавить комментарий',
    addIncomeButton: 'Добавить доход',
    addExpenseButton: 'Добавить расход',
    today: 'Сегодня',
    lastYear: 'Последний год',
    lastSevenDays: 'Последние 7 дней',
    lastThirtyDays: 'Последние 30 дней',
    currentYear: 'Текущий год',
    allTime: 'Все',
    currentMonth: 'Текущий месяц',
    calendarInput: 'Выберите период',
    error: 'Ошибка. Пожалуйста, повторите попытку позже',
    loginStatus: 'Вход выполнен',
    EmailNotFound: 'Адрес электронной почты не найден',
    InvalidPassword: 'Неверный пароль',
    RegistrationError: 'Ошибка регистрации',
    EmailAlreadyExists: 'Пользователь с таким адресом электронной почты уже существует',
    Registered: 'Пользователь успешно зарегистрирован',
    updateAccountTitle: 'Изменить данные счета',
    updateAccountSubmit: 'Сохранить изменения',
    deleteAccountButton: 'Удалить счет',
    createIncomeButton: 'Добавить доход',
    createExpenseButton: 'Добавить расход',
    updateCategoryTitle: 'Изменить данные категории',
    updateCategorySubmit: 'Сохранить изменения',
    deleteCategoryButton: 'Удалить категорию',
    limitAlert: 'Превышение лимита: ',
    backToHomePage: 'Вернуться на главную',
  },
  DE: {
    authorizationTitle: 'Willkommen bei MAPmoney!',
    authorizationGreeting: 'Die beste App für die Verwaltung Ihrer Finanzen',
    quote1: 'Geld spricht eine Sprache, die alle Nationen verstehen können. Aphra Ben',
    quote2: 'Wer nicht spart, wird leiden. Konfuzius',
    quote3: 'Dein Leben ist viel mehr wert als Gold. Bob Marley',
    quote4: 'Ein kluger Mann sollte Geld in seinem Kopf haben, aber nicht in seinem Herzen. Jonathan Swift',
    quote5: 'Der Reichtum eines Menschen ist direkt proportional zu der Anzahl der Dinge, die er sich leisten kann, nicht zu tun. Henry David Thoreau',
    quote6: 'Das Geheimnis des Erfolgs besteht darin, keine Fehler zu machen, aber die gleichen Fehler nicht zweimal zu machen. Bernard Shaw',
    quote7: 'Man besitzt nicht den Reichtum, sondern man erlaubt dem Reichtum, sich selbst zu besitzen. Franklin',
    quote8: 'Investitionen in Wissen bringen immer die höchsten Erträge. Benjamin Franklin',
    quote9: 'In dieser Welt wird alles für Geld verkauft. Manchmal muss man ein wenig bezahlen, manchmal viel, und manchmal alles, was man hat. Stephen King',
    labelEmail: 'Email',
    labelPassword: 'Passwort',
    registrationLinkText: 'Haben Sie kein Konto?',
    signUpButton: 'Anmeldung',
    signInButton: 'Einloggen',
    registrationTitle: 'Ein Konto erstellen',
    labelName: 'Name',
    labelConfirmPassword: 'Wiederholen Sie das Passwort',
    labelCurrencySelection: 'Währung (Sie können sie später nicht ändern)',
    errorMessageEmail: 'Der eingegebene Wert ist ungültig.',
    errorMessageName: 'Der Name muss mindestens 3 Zeichen lang sein.',
    errorMessagePassword: 'Das Passwort muss mindestens 5 Zeichen lang sein.',
    errorMessageConfirmPassword: 'Die Kennwörter stimmen nicht überein. Wiederholen Sie die Eingabe.',
    menuSupport: 'Kontakt zum Kundendienst',
    language: 'Sprache auswählen',
    dashboard: 'Das Bedienfeld',
    darkMode: 'Dunkles Thema',
    support: 'Kundendienst',
    logout: 'Ausloggen',
    wallet: 'Meine Konten',
    analytics: 'Statistik',
    account: 'Kontoeinstellungen',
    supportTitle: 'Kontakt mit dem Kundendienst',
    labelQuestion: 'Inhalt der Frage',
    supportSubmitButton: 'Nachricht senden',
    welcomeHeader: 'Willkommen,',
    totalIncome: 'Einkommen insgesamt',
    totalExpense: 'Verbrauch insgesamt',
    accountsTitle: 'Balance: ',
    categoriesTitle: 'Ausgaben: ',
    transport: 'Transport',
    clothes: 'Kleidung',
    entertainment: 'Unterhaltung',
    food: 'Produkte',
    cafe: 'Auswärts essen',
    health: 'Medizin',
    house: 'Haus',
    sport: 'Sport',
    cash: 'Bargeld',
    card: 'Geldkarte',
    createAccountTitle: 'Ein Konto erstellen',
    createAccountName: 'Geben Sie den Kontonamen ein',
    createAccountBalance: 'Balance',
    createAccountSubmit: 'Ein Konto einrichten',
    errorMessageAccountExists: 'Ein Konto mit diesem Namen existiert bereits',
    createCategoryTitle: 'Erstellen einer Kategorie',
    createCategoryName: 'Geben Sie einen Kategorienamen ein',
    createCategoryLimit: 'Begrenzung pro Monat',
    createCategorySubmit: 'Kategorie erstellen',
    errorMessageCategoryExists: 'Eine Kategorie mit diesem Namen existiert bereits',
    expense: 'Kosten',
    chartDailyExpensesTitle: 'Aufstellung der täglichen Ausgaben',
    chartMonthlyExpensesTitle: 'Aufstellung der monatlichen Einnahmen und Ausgaben',
    chartCategoriesColumnsTitle: 'Aufstellung der Ausgaben nach Kategorien',
    chartCategoriesPieTitle: 'Aufstellung der Ausgaben nach Kategorien',
    walletPeriodTitle: 'Berechnungszeitraum:',
    walletPeriodCurrentMonth: 'Aktueller Monat',
    walletPeriodYear: 'Jahr',
    walletPeriodMonth: '30 Tage',
    cardBalance: 'Kartenguthaben: ',
    cashBalance: 'Barguthaben: ',
    updateWalletButton: 'Konten ändern',
    addIncome: 'Einkommen hinzufügen',
    addExpense: 'Ausgaben hinzufügen',
    addLimit: 'Grenze hinzufügen',
    formIncomeTitle: 'Neues Einkommen',
    formExpenseTitle: 'Neuer Verbrauch',
    labelCategory: 'Kategorie auswählen',
    labelSum: 'Betrag hinzufügen',
    labelDate: 'Datum auswählen',
    labelNote: 'Einen Kommentar hinzufügen',
    addIncomeButton: 'Einkommen hinzufügen',
    addExpenseButton: 'Ausgaben hinzufügen',
    today: 'Heute',
    lastYear: 'Letztes Jahr',
    lastSevenDays: 'Letzten 7 Tage',
    lastThirtyDays: 'Letzte 30 Tage',
    allTime: 'Dieses Jahr',
    currentYear: 'Alle',
    currentMonth: 'Aktueller Monat',
    calendarInput: 'Wählen Sie einen Zeitraum',
    error: 'Fehler. Bitte versuchen Sie es später noch einmal',
    loginStatus: 'Der Eingang ist gemacht',
    EmailNotFound: 'E-Mail Adresse nicht gefunden',
    InvalidPassword: 'Falsches Passwort',
    RegistrationError: 'Fehler bei der Registrierung',
    EmailAlreadyExists: 'Benutzer mit dieser E-Mail-Adresse existiert bereits',
    Registered: 'Benutzer erfolgreich registriert',
    updateAccountTitle: 'Kontodaten ändern',
    updateAccountSubmit: 'Änderungen speichern',
    deleteAccountButton: 'Konto löschen',
    createIncomeButton: 'Einkommen hinzufügen',
    createExpenseButton: 'Kosten hinzufügen',
    updateCategoryTitle: 'Daten der Kategorie ändern',
    updateCategorySubmit: 'Änderungen speichern',
    deleteCategoryButton: 'Kategorie löschen',
    limitAlert: 'Überschreitung des Grenzwertes: ',
    backToHomePage: 'Zurück zur Hauptseite',
  },
};

type DictionaryKeysType = {
  [key: string]: string,
};

export const DictionaryKeys: DictionaryKeysType = {
  authorizationTitle: 'authorizationTitle',
  authorizationGreeting: 'authorizationGreeting',
  quote1: 'quote1',
  quote2: 'quote2',
  quote3: 'quote3',
  quote4: 'quote4',
  quote5: 'quote5',
  quote6: 'quote6',
  quote7: 'quote7',
  quote8: 'quote8',
  quote9: 'quote9',
  labelEmail: 'labelEmail',
  labelPassword: 'labelPassword',
  registrationLinkText: 'registrationLinkText',
  signUpButton: 'signUpButton',
  signInButton: 'signInButton',
  labelName: 'labelName',
  labelConfirmPassword: 'labelConfirmPassword',
  labelCurrencySelection: 'labelCurrencySelection',
  registrationTitle: 'registrationTitle',
  errorMessageEmail: 'errorMessageEmail',
  errorMessageName: 'errorMessageName',
  errorMessagePassword: 'errorMessagePassword',
  errorMessageConfirmPassword: 'errorMessageConfirmPassword',
  menuSupport: 'menuSupport',
  language: 'language',
  dashboard: 'dashboard',
  darkMode: 'darkMode',
  support: 'support',
  logout: 'logout',
  wallet: 'wallet',
  analytics: 'analytics',
  account: 'account',
  supportTitle: 'supportTitle',
  labelQuestion: 'labelQuestion',
  supportSubmitButton: 'supportSubmitButton',
  welcomeHeader: 'welcomeHeader',
  totalIncome: 'totalIncome',
  totalExpense: 'totalExpense',
  accountsTitle: 'accountsTitle',
  categoriesTitle: 'categoriesTitle',
  transport: 'transport',
  clothes: 'clothes',
  entertainment: 'entertainment',
  food: 'food',
  cafe: 'eatingOut',
  health: 'health',
  house: 'house',
  sport: 'sport',
  cash: 'cash',
  card: 'card',
  createAccountTitle: 'createAccountTitle',
  createAccountName: 'createAccountName',
  createAccountBalance: 'createAccountBalance',
  createAccountSubmit: 'createAccountSubmit',
  errorMessageAccountExists: 'errorMessageAccountExists',
  createCategoryTitle: 'createCategoryTitle',
  createCategoryName: 'createCategoryName',
  createCategoryLimit: 'createCategoryLimit',
  createCategorySubmit: 'createCategorySubmit',
  errorMessageCategoryExists: 'errorMessageCategoryExists',
  chartDailyExpensesTitle: 'chartDailyExpensesTitle',
  chartMonthlyExpensesTitle: 'chartMonthlyExpensesTitle',
  chartCategoriesColumnsTitle: 'chartCategoriesColumnsTitle',
  chartCategoriesPieTitle: 'chartCategoriesPieTitle',
  walletPeriodTitle: 'walletPeriodTitle',
  walletPeriodCurrentMonth: 'walletPeriodCurrentMonth',
  walletPeriodYear: 'walletPeriodYear',
  walletPeriodMonth: 'walletPeriodMonth',
  cardBalance: 'cardBalance',
  cashBalance: 'cashBalance',
  updateWalletButton: 'updateWalletButton',
  addIncome: 'addIncome',
  addExpense: 'addExpense',
  addLimit: 'addLimit',
  formIncomeTitle: 'formIncomeTitle',
  formExpenseTitle: 'formExpenseTitle',
  labelCategory: 'labelCategory',
  labelSum: 'labelSum',
  labelDate: 'labelDate',
  labelNote: 'labelNote',
  addIncomeButton: 'addIncomeButton',
  addExpenseButton: 'addExpenseButton',
  today: 'today',
  lastYear: 'lastYear',
  lastSevenDays: 'lastSevenDays',
  lastThirtyDays: 'lastThirtyDays',
  allTime: 'allTime',
  currentYear: 'currentYear',
  currentMonth: 'currentMonth',
  calendarInput: 'calendarInput',
  error: 'error',
  loginStatus: 'loginStatus',
  EmailNotFound: 'EmailNotFound',
  InvalidPassword: 'InvalidPassword',
  RegistrationError: 'RegistrationError',
  EmailAlreadyExists: 'EmailAlreadyExists',
  Registered: 'Registered',
  updateAccountTitle: 'updateAccountTitle',
  updateAccountSubmit: 'updateAccountSubmit',
  deleteAccountButton: 'deleteAccountButton',
  createIncomeButton: 'createIncomeButton',
  createExpenseButton: 'createExpenseButton',
  updateCategoryTitle: 'updateCategoryTitle',
  updateCategorySubmit: 'updateCategorySubmit',
  deleteCategoryButton: 'deleteCategoryButton',
  limitAlert: 'limitAlert',
  backToHomePage: 'backToHomePage',
};
