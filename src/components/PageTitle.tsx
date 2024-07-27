import {useEffect} from "react";

const PageTitle = ({value}: {value: string}) => {
    useEffect(() => {
        document.title = `${value} | GeoAnalysis-Engineering`;
    }, []);

    return (
        <></>
    );
}

export default PageTitle;