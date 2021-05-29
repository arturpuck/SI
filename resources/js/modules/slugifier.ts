function slugifier(text: any): string {

    const slug: string = text.replaceAll(' ', '-')
        .replaceAll(':', '')
        .replaceAll(')', '')
        .replaceAll('(', '')
        .replaceAll('?', '')
        .replaceAll('!', '')
        .replaceAll('.', '')
        .replaceAll(',', '')
        .toLowerCase();

    return slug;
}

export default slugifier;