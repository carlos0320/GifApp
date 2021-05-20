

export const getGifs = async ( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Sc5rXlymOCNSNJ1NFyJVxLZdcPVyW3T3&q=${ encodeURI(category) }&limit=12`
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs =data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;    
}