import React from 'react';
import { useDrag } from 'react-dnd';

export default function Knight() {

    const ItemTypes = {
        KNIGHT: 'knight'
    }

    // useDrag hook to make Knight draggable:
    //    accepts a memoization function that returns a specification object
    const [ { isDragging }, drag ] = useDrag( () => ({
        type: ItemTypes.KNIGHT,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div
            ref={drag}
            style={ {
                opacity: isDragging ? 0.5 : 1,
                fontSize: '50pt',
                fontWeight: 'bold',
                cursor: 'move'
            } }
        >
            ♘
        </div>
    )
}