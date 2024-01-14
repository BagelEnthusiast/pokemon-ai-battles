interface Props {
    imageUrl: string,
}

export const BotScreen = (props: Props) => {
    return (
        <img src={props.imageUrl} style={{
            height: '20em',
            width: '20em'
        }} />
    )
}