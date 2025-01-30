import Alerts from '../pageobjects/alerts';
import FirstScenario from '../pageobjects/first-scenario';
import SecondScenario from '../pageobjects/second-scenario';

describe('Automation', () => {
    beforeEach(async () => {
        await browser.url('https://smartitnow.blogspot.com/p/e.html');
        await Alerts.confirmCookies();
    });

    it('Verifies bottom caption and embed layer', async () => {
        await FirstScenario.hoverPicture(); 
        await browser.switchToFrame(0);
        await FirstScenario.verifyBottomCaption();
        await FirstScenario.goToEmbed();
        await FirstScenario.verifyEmbedLayer();
    });

    it('Verifies share button and SE redirection', async () => {
        await SecondScenario.hoverPicture();
        await SecondScenario.verifyShareButton();
        await SecondScenario.clickSe();
        await SecondScenario.verifyRedirection();
    });
});
