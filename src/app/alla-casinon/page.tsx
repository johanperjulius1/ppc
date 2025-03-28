import React from 'react';
import { allaCasinonData } from '@/lib/categories-data';
import { marked } from 'marked';
import FaqComponent from '@/components/faq/FaaqComponent';

const AllaCasinonPage = () => {
    const htmlContent = marked(allaCasinonData.content);
    return (
        <div>
            <h1>{allaCasinonData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            {allaCasinonData.faq && <FaqComponent FaqBox={allaCasinonData.faq} />}
        </div>
    );
};

export default AllaCasinonPage;