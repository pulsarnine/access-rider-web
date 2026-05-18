"use client";

import { Dispatch, type ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { Fonts, TFontList } from './fonts';
import { useLocalStorage } from "usehooks-ts";

// Creates context that initialises as null
export const SetFontContext = createContext<TSetFont>(
    null as unknown as TSetFont
);

// A type representation function that sets a useState, eg. typeof setFont
type TSetFont = Dispatch<SetStateAction<TFontList>>; 

// Exposes the setFont function to other components
export function useSetFont() {
    return useContext(SetFontContext);
}

export function SetFontProvider({ children }: { children: ReactNode }) {
    const [font, setFont] = useState<TFontList>('openSans');

    return (
        <SetFontContext.Provider value={setFont}>
            <div className={Fonts[font].className}>
                {children}
            </div>
        </SetFontContext.Provider>
    );
}