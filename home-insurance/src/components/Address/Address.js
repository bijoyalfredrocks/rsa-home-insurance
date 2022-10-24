import {AddressText} from './Address.styled'

export const Address = (props) => {
    const address = Object.values(props).filter(Boolean).join(", ");
    return (
        <AddressText>{`Here is your quote for ${address}`}</AddressText>
    )
}
