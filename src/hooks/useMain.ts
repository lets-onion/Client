import { useState, useEffect } from 'react';
import { DataResponse } from '../models/models';
import { checkNegative, checkPositive, fetchMain, notePositive, waterNegative, waterPositive } from '../api/main.api';

export const useMain = () => {
    const [mainData, setMainData] = useState<DataResponse>();

    useEffect(() => {
        fetchMain().then((response) => {
            setMainData(response);
        }).catch((error) => {
            console.error('Failed to fetch main data in useMain', error);
        });
    }, []);

    const NotePositive = (note: string) => {
        notePositive(note).then((response) => {
            return response
        })
    };

    const WaterPositive = () => {
        waterPositive().then((response) => {
            return response
        })
    };

    const WaterNegative = () => {
        waterNegative().then((response) => {
            return response
        })
    };

    const CheckPositive = async (note: string) => {
        try {
            const response = await checkPositive(note);
            return response.data;
        } catch (error) {
            console.error('CheckPositive Error:', error);
            throw error;
        }
    };

    const CheckNegative = async (note: string) => {
        try {
            const response = await checkNegative(note);
            return response.data;
        } catch (error) {
            console.error('CheckNegative Error:', error);
            throw error;
        }
    };


    return { mainData, NotePositive, WaterPositive, WaterNegative, CheckPositive, CheckNegative };
};