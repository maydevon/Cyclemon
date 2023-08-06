import React, {useState, useEffect} from 'react';

const ScrollProg = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setOpacity(scrollPosition/1000);
    }, [scrollPosition]);

    return (
        <div style={{opacity}}>
        </div>
    );
};

export default ScrollProg;