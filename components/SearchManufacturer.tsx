'use client';

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions, Transition } from '@headlessui/react'
import { SearchManufacturerProps } from '@/types'
import React, { Fragment } from 'react'
import Image from 'next/image';
import { useState } from 'react';

const SearchManufacturer = ({
    manufacturer,
    setManufacturer
}: SearchManufacturerProps) => {
    const [query, setQuery] = useState('')

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
                        onChange={(event) => setQuery(event.currentTarget.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <ComboboxOptions>

                        </ComboboxOptions>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer