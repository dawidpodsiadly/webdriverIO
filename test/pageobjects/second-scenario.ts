class SecondScenario {

    get picture() {
        return $('smart-frame');
    }

    get shareButton() {
        return $('.--share span');
    }

    get seIcon() {
        return $('.--custom span');
    }

    visitPage() {
        browser.url("https://smartitnow.blogspot.com/p/w.html");
    }

    async hoverPicture() {
        await this.picture.moveTo();
    }

    async verifyShareButton() {
        const button = await this.shareButton;
        await expect(button).toHaveText('SHARE');
        await expect(button).toBeDisplayed();
    }

    async clickSe() {
        const icon = await this.seIcon;
        await expect(icon).toHaveText('SE');
        await icon.click();
    }

    async verifyRedirection() {
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await expect(browser).toHaveUrl('https://smartframe.io/');
    }
}

export default new SecondScenario