import { WebpHeroOptions, PolyfillDocumentOptions } from "./interfaces";
export declare class WebpMachine {
    private readonly webp;
    private readonly webpSupport;
    private busy;
    private cache;
    /**
     * Instance a webp machine
     */
    constructor({ webp, webpSupport }?: WebpHeroOptions);
    /**
     * Decode raw webp data into a png data url
     */
    decode(webpData: Uint8Array): Promise<string>;
    /**
     * Polyfill the webp format on the given <img> element
     */
    polyfillImage(image: HTMLImageElement): Promise<void>;
    /**
     * Run the webp format polyfill on the entire web page
     */
    polyfillDocument({ document }?: PolyfillDocumentOptions): Promise<void>;
}
