import { ReactNode, forwardRef } from 'react';

interface PageProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ children, className, id }, ref) => {
    return (
        <div className={`max-w-page px-[20px] md:px-[72px] mx-auto ${className || ''}`} id={id} ref={ref}>
            {children}
        </div>
    );
});

export default Page;
