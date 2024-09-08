"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import { CarProps } from '@/types';
import { CustomButton } from '@/components';
import { calculateUSCarRent } from '@/utils';

interface CarCardProps {
    car: CarProps;
}

const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, drive, make, model, transmission, year } = car;

    const carRent = calculateUSCarRent(city_mpg, year);
    
    return (
        <div>ddz</div>
    )
}

export default CarCard