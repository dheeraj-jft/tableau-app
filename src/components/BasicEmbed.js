import React, { useEffect, useRef } from 'react'

const { tableau } = window;
const BasicEmbed = () => {
    const ref = useRef(null);
    const url = 'https://public.tableau.com/views/StormAnalysis_16158172918140/StormSummaryDashbard';

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "90vh",

        })
    };
    useEffect(() => {


        return () => {
            initViz();
        }
    }, []);

    return (
        <div ref={ref}>

        </div>
    )
}

export default BasicEmbed