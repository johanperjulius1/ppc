import Image from 'next/image';

interface LogoObject {
    logoTitle: string;
    logoName: string;
    backgroundColor: string;
    altText: string;
}

interface LogoProps {
    logoObject: LogoObject;
}

export default function LogoContainer({ logoObject }: LogoProps) {
    const { logoTitle, logoName, backgroundColor, altText } = logoObject;
    const logoPath = `/images/logos/${logoTitle}/${logoName}`;
    return (
        <div style={{ backgroundColor }}>
            <Image width={100} height={125} src={logoPath} alt={altText} />
        </div>
    );
}

// Padding:
// Definition: Padding is the space between the element's content 
// and its border. It creates space inside the element, around its 
// content.

// Role: Padding is used to increase the space within an element, 
// making it visually appealing and improving readability. 
// For example, if you have text inside a box, you might use padding 
// to ensure the text doesn’t touch the edges of the box.


// --- Box-sizing: border-box

// When you set box-sizing: border-box, the width and height 
// properties include the element's padding and border.

// This means that if you set a width of 200px, that 200px 
// includes any padding and border you apply. So if you have 
// 10px of padding and a 2px border, the content area will be 
// reduced accordingly to fit within the total width of 200px.