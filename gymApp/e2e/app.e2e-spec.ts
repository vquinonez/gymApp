import { GymAppPage } from './app.po';

describe('gym-app App', () => {
  let page: GymAppPage;

  beforeEach(() => {
    page = new GymAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
