import React, { useState } from 'react';
import { Button } from '../../globalStyles';
import {
    CoverOptionColumn,
    CoverOptionCard,
    CoverOptionCardContent,
    BtnContainer,
    CoverOptionCardText,
    CoverOptionCardTitle,
    CoverOptionCardPrice,
    TitleContainer
} from "./CoverOption.styled";
import { useAppData } from '../../context/AppProvider';

export const CoverOption = ({ id, title, text, monthlyPrice, annualPrice }) => {

    const { appState: { togglePayment }, dispatch } = useAppData();
    const [selected, setSelected] = useState(false);

    const addExtra = (id, monthlyPrice, annualPrice) => {
        dispatch({
            type: "ADD_EXTRA",
            payload: {
                id: id,
                monthlyPrice: monthlyPrice,
                annualPrice: annualPrice
            }
        });
    }

    const removeExtra = (id) => {
        dispatch({ type: "REMOVE_EXTRA", payload: { id: id } });
    }

    return (
        <CoverOptionColumn >
            <CoverOptionCard selected={selected}>
                <CoverOptionCardContent >
                    <TitleContainer>
                        <CoverOptionCardTitle>{title}</CoverOptionCardTitle>
                        <CoverOptionCardPrice>{`£${togglePayment ? annualPrice : monthlyPrice} per ${togglePayment ? 'annuam' : 'monthly'}`}</CoverOptionCardPrice>
                    </TitleContainer>
                        <CoverOptionCardText>{text}</CoverOptionCardText>
                    <BtnContainer>
                        <Button fontBig
                            onClick={(e) => {
                                setSelected(!selected);
                                selected ? removeExtra(id) : addExtra(id, monthlyPrice, annualPrice);
                            }}
                            primary={selected ? false : true}>
                            <strong>{selected ? "Remove this extra" : "Select this extra"}</strong>
                        </Button>
                    </BtnContainer>
                </CoverOptionCardContent>
            </CoverOptionCard>
        </CoverOptionColumn>

    )
}
