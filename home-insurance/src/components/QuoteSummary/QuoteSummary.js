import { Button } from '../../globalStyles';
import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import { QuotePrice } from '../QuotePrice/QuotePrice';

import {
    PricingCardContent,
    PricingCard,
    PricingCardInfo,
    PricingCardLength,
    PricingCardText
} from './QuoteSummary.styled';
import { useAppData } from '../../context/AppProvider';

export const QuoteSummary = () => {
    const [toggleBtnContent, setToggleBtnContent] = useState(false);
    const { dispatch } = useAppData()
    const { data, status } = useFetch('quote');

    const togglePayment = (e) => {
        setToggleBtnContent(!toggleBtnContent);
        dispatch({ type: "TOGGLE_PAYMENT" });
    }
    const displayPrice = () => {
        return (<>
            {(status === "loading") && <div>Loading...</div>}
            {data?.map((user, index) => {
                return (
                    <QuotePrice
                        key={user.annualPrice + "_" + index}
                        paymentType={toggleBtnContent}
                        baseMonthlyPrice={user?.monthlyPrice}
                        baseAnnualPrice={user?.annualPrice} />)
            })}
        </>)
    }

    return (
        <PricingCard>
            <PricingCardContent>
                <PricingCardInfo>
                    {displayPrice()}
                </PricingCardInfo>
                <PricingCardLength>{toggleBtnContent ? "per annum" : "per month"}</PricingCardLength>
                <PricingCardText>{`This price includes Insurance Premium Tax at the current rate. No charge for paying ${toggleBtnContent ? "annuam" : "monthly"}`}</PricingCardText>
                <Button
                    primary
                    fontBig
                    large
                    onClick={togglePayment}>
                    <strong>{toggleBtnContent ? "Switch to monthly" : "Switch to annum"}</strong>
                </Button>
            </PricingCardContent>
        </PricingCard>
    )
}
