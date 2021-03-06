export function filterDescription({item, hideTranslated, searchQuerry}) {
    if (item == null) console.log('item null')
    const {name, description, material, source, id} = item;

    const translatedHidden = hideTranslated
        && ((name?.length ?? 0) > 0)
        && ((description?.length ?? 0) > 0)
        && ((material?.length ?? 1) > 0)
        && ((source?.length ?? 0) > 0);
    
    searchQuerry = searchQuerry || '';

    const searchShow = (name ?? '').toLowerCase().includes(searchQuerry.toLowerCase())
        || id.toLowerCase().includes(searchQuerry.toLowerCase())
    
    
    return  translatedHidden || !searchShow;
}

