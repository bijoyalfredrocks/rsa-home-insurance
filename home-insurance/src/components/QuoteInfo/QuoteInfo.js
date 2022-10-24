import React from 'react';
import useFetch from '../../hooks/useFetch';
import { Address } from '../Address/Address';
import {QutoInfoContainer,
       QutoInfoFirstName,
       QutoInfoQuoteRef,
       QutoInfoCoverDate} from './QutoInfo.styled'

export const QuoteInfo = () => {
    const { data, status } = useFetch('quote')

    return (
        <>
            {status === "error" && <div>{"Something went wrong"}</div>}
            {status === "loading" && <div>Loading...</div>}
            <QutoInfoContainer>            
                {data?.map((user, index) => {
                    return (<div key={user.quoteRef + "_" + index}>
                        <QutoInfoFirstName>{`Hey ${user.firstName},`}</QutoInfoFirstName>
                        <Address
                            addressLine1={user?.address1}
                            addressLine2={user?.address2}
                            addressLine3={user?.address3}
                            town={user.town} />
                        <QutoInfoQuoteRef>{`Quote Reference: ${user.quoteRef}`}</QutoInfoQuoteRef>
                        <QutoInfoCoverDate>{`Cover starts on ${(user.startDate).split('T')[0]}`}</QutoInfoCoverDate>
                    </div>
                    );
                })}
            </QutoInfoContainer>
        </>
    )
}
