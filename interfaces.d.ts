interface FetchOptions {
    method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
    headers: {
        'Content-Type': 'application/json'
    };
    body?: string
}