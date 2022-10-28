class Alerts {
    get okCookiesElement() {
        return $("#cookieChoiceDismiss");
    }

    async confirmCookies() {
        await this.okCookiesElement.click();
    }
}

export default new Alerts