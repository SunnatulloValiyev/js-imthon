export const fetchData = async (url) => {
    const req = await fetch(url);

    if (!req) {
        throw new Error("API da hatolik")
    }

    const data = await req.json()

    return data;
}

