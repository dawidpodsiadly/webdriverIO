import Alerts from '../pageobjects/alerts';
import FirstScenario from '../pageobjects/first-scenario';
import SecondScenario from '../pageobjects/second-scenario';

describe('Automation', () => {
    it('Verifies bottom caption adn embed layer', async () => {
        await FirstScenario.visitPage();
        await Alerts.confirmCookies();
        await FirstScenario.hoverPicture(); 
        await browser.switchToFrame(0);
        await FirstScenario.verifyBottomCaption();
        await FirstScenario.goToEmbed();
        await FirstScenario.verifyEmbedLayer();
    });
    it('Verifies share button and SE redirection', async () => {
        await SecondScenario.visitPage();
        //await Alerts.confirmCookies();
        await SecondScenario.hoverPicture();
        await SecondScenario.verifyShareButton();
        await SecondScenario.clickSe();
        await SecondScenario.verifyRedirection();
    });
});

