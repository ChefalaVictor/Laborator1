type CustomItemProps = {
    lists: { id: number, name: string }[]
    // updateLists: (id: number, name: string) => void
}

export const CustomItems = ({lists}: CustomItemProps) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'

        }}>
            {
                lists.map((list) => {
                    return (
                        <span>{list.id} - {list.name}</span>
                    )
                })
            }
        </div>
    )
}