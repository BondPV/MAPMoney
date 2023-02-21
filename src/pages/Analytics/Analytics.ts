import '../../styles/main.scss';
import './Analytics.scss';
import Highcharts from 'highcharts';
import BasePage from '../BasePage/BasePage';
import { Route } from '../../types/enums';
import createElement from '../../utils/createElement';
import { ClassMap } from '../../constants/htmlConstants';
import {
  IAccount, ICategory, IExpense, IIncome,
  IFilterParams,
} from '../../types/interfaces';
import AppState from '../../constants/appState';
import RequestApi from '../../Api/RequestsApi';
import { Endpoint } from '../../Api/serverConstants';
import { IExpense, IIncome } from '../../types/interfaces';
import { LocalStorageKey } from '../../constants/common';
import ChartYearExpenses from '../../components/ChartYearExpenses/ChartYearExpenses';
import ChartYearIncomes from '../../components/ChartYearIncomes/ChartYearIncomes';

interface IСhartLine {
  type?: string
  date: Date,
  sum: number,
}

class Analytics extends BasePage {
  private chartYearExpenses: ChartYearExpenses;

  private chartYearIncomes: ChartYearIncomes;

  constructor() {
    super();
    this.chartYearExpenses = new ChartYearExpenses();
    this.chartYearIncomes = new ChartYearIncomes();
  }

  public async render(): Promise<void> {
    this.createPageStructure(Route.ANALYTICS);

    const mainContent = document.querySelector(`.${ClassMap.mainContent}`);

    const yearExpenses = await this.chartYearExpenses.render();
    const yearIncomes = await this.chartYearIncomes.render();

    mainContent?.replaceChildren(yearExpenses, yearIncomes);

    this.chartYearExpenses.addChart();
    this.chartYearIncomes.addChart();
    this.init();
  }

  public async init() {
    if (AppState.userAccount) {
      const userToken: string = JSON.parse(AppState.userAccount).token;

      // TODO Account Api
      //! создание пользовательского счета
      // const fakeNewAccount: IAccount = {
      //   account: 'New account',
      //   sum: 500,
      //   icon: 'icon',
      // };
      // const newAccount: IAccount = await RequestApi.create(Endpoint.ACCOUNT, userToken, fakeNewAccount);
      // console.log(newAccount);

      //! изменение счета (id и любые параметры)
      // id Пришлось прописывать отдельно, при использовании дженерика не смог придумать иной выход, поэтому и в функции 4 параметра
      // const fakeId = '63eb73429e3431e4fb34286a';
      // const fakeСhangedAccount: Partial<IAccount> = {
      //   icon: 'icon4',
      // };
      // const changedAccount: IAccount = await RequestApi.update(Endpoint.ACCOUNT, userToken, fakeId, fakeСhangedAccount);
      // console.log(changedAccount);

      //! получение счета по id
      // const fakeId = '63eb73429e3431e4fb34286a';
      // const account: IAccount = await RequestApi.get(Endpoint.ACCOUNT, userToken, fakeId);
      // console.log(account);

      //! удаление счета
      // const fakeId2 = '63eb73429e3431e4fb34286a';
      // await RequestApi.delete(Endpoint.ACCOUNT, userToken, fakeId2);

      //! получение всeх счетов пользовтеля
      // const accountsData: IAccount[] = await RequestApi.getAll(Endpoint.ACCOUNT, userToken);
      // console.log(accountsData);

      // TODO Category Api
      //! создание категории
      // const fakeNewCategory: ICategory = {
      //   category: 'My new category',
      //   icon: 'category-icon',
      // };
      // const newCategory: ICategory = await RequestApi.create(Endpoint.CATEGORY, userToken, fakeNewCategory);
      // console.log(newCategory);

      //! изменение категории (id и любые параметры)
      // id Пришлось прописывать отдельно, при использовании дженерика не смог придумать иной выход, поэтому и в функции 4 параметра
      // const fakeId = '63eb82429e3431e4fb342878';
      // const fakeСhangedCategory: Partial<ICategory> = {
      //   icon: 'icon8',
      // };
      // const changedCategory: ICategory = await RequestApi.update(Endpoint.CATEGORY, userToken, fakeId, fakeСhangedCategory);
      // console.log(changedCategory);

      //! получение категории по id
      // const fakeId = '63eb82429e3431e4fb342878';
      // const category: ICategory = await RequestApi.get(Endpoint.CATEGORY, userToken, fakeId);
      // console.log(category);

      //! удаление категории
      // const fakeId2 = '63eb83839e3431e4fb342882';
      // await RequestApi.delete(Endpoint.CATEGORY, userToken, fakeId2);

      //! получение всeх категорий пользователя
      // const categoriesData: ICategory[] = await RequestApi.getAll(Endpoint.CATEGORY, userToken);
      // console.log(categoriesData);

      // TODO Expense Api
      //! создание расхода
      // const fakeNewExpense: IExpense = {
      //   date: new Date('2023-01-12'),
      //   account: 'Cash',
      //   category: 'Clothes',
      //   expense: 10,
      //   currency: 'USD',
      //   comment: 'optional parameter',
      // };
      // const newExpense: IExpense = await RequestApi.create(Endpoint.EXPENSE, userToken, fakeNewExpense);
      // console.log(newExpense);

      //! изменение расхода (id и любые параметры)
      // id Пришлось прописывать отдельно, при использовании дженерика не смог придумать иной выход, поэтому и в функции 4 параметра
      // const fakeId = '63eb85139e3431e4fb34288d';
      // const fakeСhangedExpense: Partial<IExpense> = {
      //   comment: 'new comment2',
      // };
      // const changedExpense: IExpense = await RequestApi.update(Endpoint.EXPENSE, userToken, fakeId, fakeСhangedExpense);
      // console.log(changedExpense);

      //! получение расхода по id
      // const fakeId = '63eb85139e3431e4fb34288d';
      // const expense: IExpense = await RequestApi.get(Endpoint.EXPENSE, userToken, fakeId);
      // console.log(expense);

      //! удаление расхода
      // const fakeId = '63eb85139e3431e4fb34288d';
      // await RequestApi.delete(Endpoint.EXPENSE, userToken, fakeId);

      //! получение всех расходов пользователя
      // const expensesData: IExpense[] = await RequestApi.getAll(Endpoint.EXPENSE, userToken);
      // console.log(expensesData);

      // ? получение всeх расходов пользователя с фильтрами
      // все параметры не обязательные, без параметров = методу RequestApi.getAll
      // const params: IFilterParams = {
      //   startDate: '2022-01-01',
      //   endDate: '2022-12-31',
      //   account: 'Card',
      //   category: 'House',
      //   currency: 'USD',
      //   page: 1,
      //   limit: 5,
      // };

      // const expensesData: IExpense[] = await RequestApi.getFiltered(Endpoint.EXPENSE, userToken, params);
      // console.log(expensesData);

      // TODO Income Api
      //! создание дохода
      // const fakeNewIncome: IIncome = {
      //   date: new Date(),
      //   account: 'Cash',
      //   income: 2000,
      //   currency: 'USD', // optional
      //   comment: 'optional parameter',
      // };
      // const newIncome: IIncome = await RequestApi.create(Endpoint.INCOME, userToken, fakeNewIncome);
      // console.log(newIncome);

      //! изменение дохода (id и любые параметры)
      // id Пришлось прописывать отдельно, при использовании дженерика не смог придумать иной выход, поэтому и в функции 4 параметра
      // const fakeId = '63ec60a7109d6a118269bd11';
      // const fakeСhangedIncome: Partial<IIncome> = {
      //   income: 2500,
      // };
      // const changedIncome: IIncome = await RequestApi.update(Endpoint.INCOME, userToken, fakeId, fakeСhangedIncome);
      // console.log(changedIncome);

      //! получение дохода по id
      // const fakeId = '63ec60a7109d6a118269bd11';
      // const income: IIncome = await RequestApi.get(Endpoint.INCOME, userToken, fakeId);
      // console.log(income);

      //! удаление дохода
      // const fakeId = '63ec60a7109d6a118269bd11';
      // await RequestApi.delete(Endpoint.INCOME, userToken, fakeId);

      //! получение всех доходов пользователя
      // const incomesData: IIncome[] = await RequestApi.getAll(Endpoint.INCOME, userToken);
      // console.log(incomesData);

      // ? получение всeх доходов пользователя с фильтрами
      // все параметры не обязательные, без параметров = методу RequestApi.getAll
      // const params: IFilterParams = {
      //   startDate: '2023-01-02',
      //   endDate: '2023-02-03',
      //   account: 'Card',
      //   currency: 'USD',
      //   page: 1,
      //   limit: 10,
      // };

      // const incomesData: IIncome[] = await RequestApi.getFiltered(Endpoint.INCOME, userToken, params);
      // console.log(incomesData);
    }
  }
}

export default Analytics;
