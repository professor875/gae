import Page from "@/components/Page.tsx";
import Hero from "@/assets/images/kontakt/hero.png";

const Kontakt = () => {

    return (
        <>
            <div className={'bg-no-repeat bg-cover bg-center w-full h-[300px] relative mb-[30px] md:mb-[52px]'}
                 style={{backgroundImage: `url(${Hero})`}}>
                <Page className={'text-white h-full flex flex-col justify-center '}>
                    <h2 className={'leading-[24px] md:leading-[71px]'}>GeoAnalysis <br/> Engineering</h2>
                </Page>
            </div>

            <div className="h-[500px] w-full mb-[40px] md:mb-[70px]">
                <h3 className='text-center mb-[20px]'>Unser Standort</h3>
                <iframe
                    className="w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12461.012892478888!2d10.100969519398552!3d54.33603879931755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b2571a413d3575%3A0xd37663f4afd34bcf!2sGeoAnalysis-Engineering%20GmbH!5e0!3m2!1sen!2s!4v1715778697461!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </>
    );
}

export default Kontakt