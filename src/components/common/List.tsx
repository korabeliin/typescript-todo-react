import React, {PropsWithChildren} from 'react';

interface ListProps<T> {
    items: T[],
    renderItem: (items: T) => React.ReactNode
}

const List = <T,> (props: PropsWithChildren <ListProps<T>>) => {
    return (
        <ul>
            {props.items.map(props.renderItem)}
        </ul>
    );
};

export default List;