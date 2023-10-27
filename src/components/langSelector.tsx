import React from 'react';
import { langOptions, langType } from '../typings/core';
import Select, { SingleValue } from 'react-select'
import langs from '../cache/langs';

const langSelector = ({ lang, setLang }: langOptions) => {
    const formatOptionLabel = ({ label, value }: { label: any, value: string }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={langs.langs[value as langType].metadata.flag} alt={label} style={{ marginRight: 8 }} className="flag" />
            {label}
        </div>
    );

    const handleChange = (value: SingleValue<{ label: any; value: string }>) => {
        if (value?.value) setLang(value?.value as langType)
    }

    return (
        <div>
            <Select 
                className="lang-selector"
                options={
                    Object.entries(langs.langs).map(([ key, value ]) => ({
                        label: value.metadata.name ,
                        value: key as langType
                    }))
                }
                formatOptionLabel={formatOptionLabel}
                onChange={handleChange}
                value={{ label: langs.resolve(lang, 'metadata.name'), value: lang }}
                isSearchable={false}
                components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
                classNamePrefix="lang-selector-style"
            />
        </div>
    );
};

export default langSelector;