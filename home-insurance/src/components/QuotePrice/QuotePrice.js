import React, { useEffect, useState } from 'react';
import { useAppData } from '../../context/AppProvider';

export const QuotePrice = ({ paymentType, baseMonthlyPrice, baseAnnualPrice }) => {
    const [totalPrice, setTotalPrice] = useState(baseMonthlyPrice);
    const { appState: { addOns } } = useAppData();
    
    useEffect(() => {
        const annualPrice = (total) => {
            addOns?.forEach(addOn => {
                total += addOn.annualPrice;
                setTotalPrice(parseFloat(total).toFixed(2));
            });
        }
    
        const monthlyPrice = (total) => {
            addOns?.forEach(addOn => {
                total += addOn.monthlyPrice;
                setTotalPrice(parseFloat(total).toFixed(2));
            });
        }
        if (addOns.length === 0) {
            paymentType ? setTotalPrice(baseAnnualPrice) : setTotalPrice(baseMonthlyPrice);
        } else {
           let total = paymentType ? baseAnnualPrice : baseMonthlyPrice;
            paymentType ? annualPrice(total) : monthlyPrice(total)
        }
    }, [addOns, paymentType,baseMonthlyPrice, baseAnnualPrice]);

    return (
        <h1 className="card-title display-3">
            <strong data-testid="total-price">{`£${totalPrice}`}</strong>
        </h1>
    )
}
