export const getItems = async () => {
    const api = 'http://localhost:5000/api/items/';
    const resp = await fetch(api);
    const data = await resp.json();
    const items = data.map( item => ({
        id: item._id,
        title: item.name,
        description: item.description,
        createdAt: item.createdAt,
    }));
    return items;
}

export const getItem = async (id) => {
    const api = `http://localhost:5000/api/items/${id}`;
    const resp = await fetch(api);
    const data = await resp.json();
    const item = {
        id: data._id,
        title: data.name,
        description: data.description,
        createdAt: data.createdAt,
    };
    return item;
}

export const postItem = async (item) => {
    const api = 'http://localhost:5000/api/items/';
    const resp = await fetch(api, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const data = await resp.json();
    return data;
}

export const updateItem = async (item) => {
    console.log(item)
    const api = `http://localhost:5000/api/items/${item.id}`;
    const resp = await fetch(api, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
    const { status } = resp;
    return status;
}

export const deleteItem = async (id) => {
    const api = `http://localhost:5000/api/items/${id}`;
    const resp = await fetch(api, {
        method: 'DELETE',
    });
    const { status } = resp;
    return status;
}