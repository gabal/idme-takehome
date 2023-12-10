export const get = async (url?: string): Promise<any> => {
    if (!url) return Promise.resolve();
    let data;
    let response
    try {
        response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        data = await response.json();
    } catch (e) {
        data = { error: true, status: response?.status };
    }
    return data;
}