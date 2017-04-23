import { DevotifyDashboardAppPage } from './app.po';

describe('devotify-dashboard-app App', () => {
  let page: DevotifyDashboardAppPage;

  beforeEach(() => {
    page = new DevotifyDashboardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
