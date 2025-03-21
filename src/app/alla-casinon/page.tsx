import React from 'react';
import { allaCasinonData } from '@/lib/categories-data';
import { marked } from 'marked';

const AllaCasinonPage = () => {
    const htmlContent = marked(allaCasinonData.content);
    return (
        <div>
            <h1>{allaCasinonData.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default AllaCasinonPage;