// Dropdown.js 
//needs customising

'use client'
import { useState } from 'react';
import { ChevronDown } from "@deemlol/next-icons";
import { useSetFont } from './SetFontProvider';
import { FontList, Fonts, TFontList } from './fonts';
import { useMantineColorScheme } from '@mantine/core';

export default function FontDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [siteFont, setSelectedFont] = useState('Select Font');
    const { colorScheme } = useMantineColorScheme();

    const setFont = useSetFont();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (font: TFontList) => {
        // setSelectedFont(fonts);
        setFont(font);
        setIsOpen(false);
    };

    return (
        <div className={"flex justify-center"}>
            <div className="relative inline-block text-left">
                {/* Dropdown button */}
                <button
                    type="button"
                    className="inline-flex justify-center w-full
                               rounded-md border border-gray-300
                               shadow-sm px-4 py-2 bg-white text-sm
                               font-medium text-black hover:bg-gray-50"
                    onClick={toggleDropdown}
                >
                    {siteFont}
                    <ChevronDown className="ml-2" />
                </button>

                {/* Dropdown menu */}
                {isOpen && (
                    <div className="origin-top-right absolute
                                    right-0 mt-2 w-56 rounded-md
                                    shadow-lg bg-white ring-1 ring-black
                                    ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {FontList.map((font, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="block px-4 py-2
                                               text-sm text-black
                                               hover:bg-gray-100"
                                    onClick={() => handleSelect(font)}
                                >
                                    {font}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}