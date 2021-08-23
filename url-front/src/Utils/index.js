export const fetchUrl = async (e, longUrl, setUrl, setShortUrl) => {
    e.preventDefault();
    try {
        let response;
        response = await fetch(`${process.env.REACT_APP_REST_API}url/shorten`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    longUrl : longUrl,
                })
            });
        const data = await response.json();
        setUrl(data.url.urlCode)
       setShortUrl(data.url.shortUrl)
    } catch (error) {
        console.log(error)
    }
};

// export const directUrl = async (e, urlCode, setUrlGo) => {
//     e.preventDefault();
//     try {
//         let response;
//         response = await fetch(`${process.env.REACT_APP_REST_API}url/{urlCode}`, {
//                 method: 'POST',
//                 headers: {'Content-Type': 'application/json'},
//                 body: JSON.stringify({
//                     urlCode : urlCode,
//                 })
//             });
//         const data = await response.json();
//         console.log(data)
//         setUrlGo(data.user.longUrl)
//     } catch (error) {
//         console.log(error)
//     }
// };