import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

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