import React from 'react'

export type langType = 'fr' | 'en'
export type setLangCallback = React.Dispatch<React.SetStateAction<langType>>;

export type langOptions = {
    lang: langType;
    setLang: setLangCallback
}