import { DataTableRefreshPage } from './app.po';

describe('data-table-refresh App', () => {
  let page: DataTableRefreshPage;

  beforeEach(() => {
    page = new DataTableRefreshPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
