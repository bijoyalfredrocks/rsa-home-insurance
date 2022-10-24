import { QuoteInfo } from '../QuoteInfo/QuoteInfo'
import { QuoteSummary } from '../QuoteSummary/QuoteSummary'
import { InfoColumn, InfoRow} from './InfoSection.styled'

export const InfoSection = () => {
    return (
        <InfoRow>
            <InfoColumn>
                <QuoteInfo />
            </InfoColumn>
            <InfoColumn>
                <QuoteSummary />
            </InfoColumn>
        </InfoRow>
    )
}
