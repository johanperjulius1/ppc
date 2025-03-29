import React from 'react';
import { allaCasinonData } from '@/lib/categories-data';
import { marked } from 'marked';
import FaqComponent from '@/components/faq/FaqComponent';

const AllaCasinonPage = () => {
    const htmlContent = marked(allaCasinonData.content);
    return (
        <div>
            <h1>{allaCasinonData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            {allaCasinonData.faq && (
                <FaqComponent 
                    faqBox={allaCasinonData.faq} 
                    title={allaCasinonData.title} 
                />
            )}
        </div>
    );
};

export default AllaCasinonPage;