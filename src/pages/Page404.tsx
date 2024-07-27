import Page from "@/components/Page.tsx";
import PageTitle from "@/components/PageTitle.tsx";

const Page404 = () => {
    return (
        <>
            <PageTitle value={'404 Page Not Found'}/>

            <Page className='flex flex-col justify-center items-center leading-[150px] text-2xl lg:text-[60px] md:text-[80px] font-bold text-gray-400'>Page not found 404 !</Page>
        </>
    );
}

export default Page404