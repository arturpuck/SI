function slugifier(text: any): string {

    const slug: string = text.replace(/[:\)\(\?!\.,]/g, '').replace(/ /g, '-')
        // .replace(/:/g, '')
        // .replace(/\)/g, '')
        // .replace(/\(/g, '')
        // .replace(/\?/g, '')
        //.replace(/!/g, '')
        //.replace(/\./g, '')
       // .replace(/,/g, '')
        .toLowerCase();

    return slug;
}

export default slugifier;