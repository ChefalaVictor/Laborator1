
export const CustomInput = (props: any) => {
    const {setText, text} = props

    return (
        <div>
            <input type="text" value={text} placeholder={'Some text'} onChange={(e) => {
                setText(e.target.value)
            }} />
        </div>
    )
}

