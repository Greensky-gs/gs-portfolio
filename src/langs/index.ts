import { langType } from "../typings/core";
import imports from './imports'

export class Langs {
    private cache: Map<langType, Record<string, Object>> = new Map();
    private _defaultLang: langType;

    constructor(defaultLang: langType) {
        this._defaultLang = defaultLang;
        this.start()
    }

    public get langs() {
        return Object.fromEntries(this.cache.entries()) as Record<langType, Record<string, any>>
    }

    public get defaultLang() {
        return this._defaultLang;
    }
    public resolve(lang: langType, variable: string, options: Record<string, string | number> = {}) {
        const dict = this.cache.get(lang) ?? this.cache.get(this._defaultLang)

        let text: any = dict;

        for (const part of variable.split('.')) {
            text = text[part]

            if (!text) throw new Error(`No text for ${variable}`)
        }

        let output = text as string;

        Object.entries(options).forEach(([key, value]) => {
            output = output.replace(new RegExp(`{{${key}}}`, 'g'), value.toString())
        })

        return output
    }

    private start() {
        this.cache.set('fr', imports.fr)
        this.cache.set('en', imports.en)
    }
}