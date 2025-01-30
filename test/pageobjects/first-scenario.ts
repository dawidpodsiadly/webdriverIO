class FirstScenario {

    bottomCaptionText = 'An image (from Latin: imago) is an artifact that depicts visual perception, such as a photograph or other two-dimensional picture, that resembles a subject—usually a physical object—and thus provides a depiction of it. In the context of signal processing, an image is a distributed amplitude of color(s). A pictorial script is a writing system that employs images as symbols for various semantic entities, rather than the abstract signs used by alphabets.';
    scriptCaptionText = '<script src="https://embed.smartframe.io/ee5ba7bdc441bb5c2122f6157dea0175.js" data-image-id="marivi_pazos_4kx1uoaaohy_unsplash_1622111934764" data-width="100%" data-max-width="4704px" data-theme="security"></script>';

    get picture() {
        return $('#post-body-2195234803014015561');
    }
    
    get bottomCaption() {
        return $('.caption-box p');
    }

    get bottomCaptionHrefText() {
        return $('.caption-box a');
    }

    get embedButton() {
        return $('.--embed span');
    }

    get embedScriptCaption() {
        return $('.share__script');
    }

    get embedLayerHelp() {
        return $('.share__terms a');
    }

    get embedLayerTcs() {
        return $('.embed-terms');
    }

    get embedLayerCopyCode() {
        return $('button[data-action-button="copy-embed-code"]');
    }

    async hoverPicture() {
        this.picture.moveTo();
        await browser.pause(1000);
    }

    async verifyBottomCaption() {
        const caption = await this.bottomCaption;
        await expect(caption).toHaveText(this.bottomCaptionText);

        const hrefText = await this.bottomCaptionHrefText;
        await expect(hrefText).toHaveText('Latin: imago');
        await expect(hrefText).toHaveHref('https://en.wikipedia.org/wiki/Image');
    }

    async goToEmbed() {
        const button = await this.embedButton;
        await expect(button).toHaveText("EMBED");
        await button.click();
    }

    async verifyEmbedLayer() {
        const scriptCaption = await this.embedScriptCaption;
        await expect(scriptCaption).toHaveText(this.scriptCaptionText);

        const embedHelp = await this.embedLayerHelp;
        await expect(embedHelp).toHaveText('Help');
        await expect(embedHelp).toHaveHref('https://smartframe.io/embedding-smartframes/?ref=liveEmbed');

        const embedTcs = await this.embedLayerTcs;
        await expect(embedTcs).toHaveText('Embed T&Cs');
        await expect(embedTcs).toHaveHref('https://smartframe.io/embed-terms-conditions/?ref=liveEmbed');

        const copyCode = await this.embedLayerCopyCode;
        await expect(copyCode).toHaveText('COPY CODE');
    }
}

export default new FirstScenario