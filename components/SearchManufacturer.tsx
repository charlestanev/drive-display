'use client';

import { Combobox, ComboboxButton, ComboboxInput, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';

const SearchManufacturer = ({
    manufacturer,
    setManufacturer
}: SearchManufacturerProps) => {
    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className="relative w-full">
                    <ComboboxButton className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            className="ml-4"
                            alt="Car Logo"
                        />
                    </ComboboxButton>
                    <ComboboxInput
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer:string) => manufacturer}
                    />
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer